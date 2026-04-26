import { ref, watch, onMounted } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const theme = ref<Theme>((localStorage.getItem('pinter-theme') as Theme) || 'system')

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(t: Theme) {
  const resolved = t === 'system' ? getSystemTheme() : t
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

export function useTheme() {
  onMounted(() => {
    applyTheme(theme.value)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (theme.value === 'system') applyTheme('system')
    }
    mediaQuery.addEventListener('change', handler)
  })

  watch(theme, (val) => {
    localStorage.setItem('pinter-theme', val)
    applyTheme(val)
  })

  function setTheme(t: Theme) {
    theme.value = t
  }

  function cycleTheme() {
    const order: Theme[] = ['light', 'dark', 'system']
    const idx = order.indexOf(theme.value)
    theme.value = order[(idx + 1) % order.length]
  }

  return { theme, setTheme, cycleTheme }
}
