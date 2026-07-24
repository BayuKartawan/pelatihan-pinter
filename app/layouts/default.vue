<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

useTheme()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-50 dark:bg-surface-950 text-surface-800 dark:text-surface-100 transition-colors">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
