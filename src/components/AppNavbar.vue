<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const mobileOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileOpen.value = false
})

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
}

const navLinks = [
  { to: '/', label: 'Beranda', icon: 'home' },
  { to: '/pelatihan', label: 'Daftar Pelatihan', icon: 'book' },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl shadow-sm border-b border-surface-200/50 dark:border-surface-700/50'
      : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-18">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold tracking-tight bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              Pinter
            </span>
            <span class="text-[10px] font-medium text-surface-500 dark:text-surface-400 -mt-1 tracking-widest uppercase">
              Kemenag
            </span>
          </div>
        </router-link>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="$route.path === link.to || ($route.path.startsWith(link.to) && link.to !== '/')
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
              : 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800'"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-2">
          <ThemeToggle />

          <!-- Mobile hamburger -->
          <button
            @click="mobileOpen = !mobileOpen"
            class="md:hidden p-2 rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white/95 dark:bg-surface-900/95 backdrop-blur-xl border-b border-surface-200 dark:border-surface-700"
      >
        <div class="px-4 py-3 space-y-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            :class="$route.path === link.to
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
              : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>
