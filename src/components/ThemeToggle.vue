<script setup lang="ts">
import { ref } from 'vue'
import { useTheme, type Theme } from '@/composables/useTheme'

const { theme, setTheme } = useTheme()
const open = ref(false)

const options: { value: Theme; label: string; icon: string }[] = [
  { value: 'light', label: 'Terang', icon: 'sun' },
  { value: 'dark', label: 'Gelap', icon: 'moon' },
  { value: 'system', label: 'Sistem', icon: 'monitor' },
]

function select(t: Theme) {
  setTheme(t)
  open.value = false
}

function handleClickOutside(e: Event) {
  const target = e.target as HTMLElement
  if (!target.closest('.theme-toggle-wrapper')) {
    open.value = false
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
}
</script>

<template>
  <div class="relative theme-toggle-wrapper">
    <button
      @click="open = !open"
      class="p-2 rounded-lg text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-700 dark:hover:text-surface-200 transition-all duration-200"
      :title="`Tema: ${theme === 'light' ? 'Terang' : theme === 'dark' ? 'Gelap' : 'Sistem'}`"
      aria-label="Toggle theme"
    >
      <!-- Sun -->
      <svg v-if="theme === 'light'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <!-- Moon -->
      <svg v-else-if="theme === 'dark'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <!-- Monitor / System -->
      <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="absolute right-0 top-full mt-2 w-40 py-1.5 rounded-xl bg-white dark:bg-surface-800 shadow-xl shadow-surface-900/10 dark:shadow-surface-950/30 border border-surface-200 dark:border-surface-700 z-50"
      >
        <button
          v-for="opt in options"
          :key="opt.value"
          @click="select(opt.value)"
          class="w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors"
          :class="theme === opt.value
            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
            : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700'"
        >
          <!-- Sun -->
          <svg v-if="opt.icon === 'sun'" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon -->
          <svg v-if="opt.icon === 'moon'" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Monitor -->
          <svg v-if="opt.icon === 'monitor'" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="font-medium">{{ opt.label }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>
