<template>
  <footer class="border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Logo & name -->
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span class="text-sm font-semibold text-surface-700 dark:text-surface-300">
            Pinter Kemenag
          </span>
        </div>

        <!-- Copyright -->
        <p class="text-xs text-surface-500 dark:text-surface-500">
          &copy; {{ new Date().getFullYear() }} Pinter Kemenag. Platform pelatihan online Kementerian Agama.
        </p>

        <!-- Nav links -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="text-xs text-surface-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Beranda
          </NuxtLink>
          <NuxtLink to="/pelatihan" class="text-xs text-surface-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Pelatihan
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
