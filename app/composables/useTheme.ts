import { onMounted, onUnmounted } from 'vue'

export function useTheme() {
  onMounted(() => {
    if (!import.meta.client) return

    // Clean up any previously saved manual theme preference
    localStorage.removeItem('pinter-theme')

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const updateTheme = () => {
      document.documentElement.classList.toggle('dark', mediaQuery.matches)
    }

    // Apply initial system preference
    updateTheme()

    // Listen to changes in device/system theme preference
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateTheme)
    } else {
      mediaQuery.addListener(updateTheme)
    }

    onUnmounted(() => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updateTheme)
      } else {
        mediaQuery.removeListener(updateTheme)
      }
    })
  })
}
