<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { fetchTrainingList, type TrainingListItem } from '@/services/api'

const trainings = ref<TrainingListItem[]>([])
const loading = ref(true)
const error = ref('')
const search = ref('')

onMounted(async () => {
  try {
    trainings.value = await fetchTrainingList()
  } catch (e: any) {
    error.value = e.message || 'Gagal memuat data pelatihan'
  } finally {
    loading.value = false
  }
})

const filtered = computed(() => {
  if (!search.value.trim()) return trainings.value
  const q = search.value.toLowerCase()
  return trainings.value.filter(t =>
    t.trainingName.toLowerCase().includes(q) ||
    t.sheetName.toLowerCase().includes(q)
  )
})

function formatDate(str: string) {
  return str || '-'
}
</script>

<template>
  <div class="pt-16 sm:pt-20 pb-12 sm:pb-16">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-2xl mb-8 sm:mb-10 animate-fade-in">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">Pelatihan</span>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 dark:text-white mb-2 sm:mb-3">
          Daftar Pelatihan
        </h1>
        <p class="text-sm sm:text-base text-surface-600 dark:text-surface-400 leading-relaxed">
          Pilih pelatihan yang ingin Anda pelajari. Setiap pelatihan berisi modul dan video pembelajaran yang terstruktur.
        </p>
      </div>

      <!-- Search bar -->
      <div class="mb-6 sm:mb-8 animate-fade-in" style="animation-delay: 0.1s;">
        <div class="relative max-w-md">
          <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Cari pelatihan..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-sm text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
          >
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <div
          v-for="i in 6"
          :key="i"
          class="p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 animate-pulse"
        >
          <div class="h-4 bg-surface-200 dark:bg-surface-700 rounded w-3/4 mb-3"></div>
          <div class="h-3 bg-surface-100 dark:bg-surface-700/50 rounded w-full mb-2"></div>
          <div class="h-3 bg-surface-100 dark:bg-surface-700/50 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-20">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
          <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p class="text-surface-600 dark:text-surface-400 mb-2">{{ error }}</p>
        <button
          @click="() => { loading = true; error = ''; fetchTrainingList().then(d => trainings = d).catch(e => error = e.message).finally(() => loading = false) }"
          class="text-sm text-primary-600 dark:text-primary-400 hover:underline"
        >
          Coba lagi
        </button>
      </div>

      <!-- Empty state -->
      <div v-else-if="filtered.length === 0" class="text-center py-20">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
          <svg class="w-8 h-8 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-surface-600 dark:text-surface-400">
          {{ search ? 'Tidak ada pelatihan yang cocok dengan pencarian.' : 'Belum ada pelatihan tersedia.' }}
        </p>
      </div>

      <!-- Training cards -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 stagger-children">
        <router-link
          v-for="training in filtered"
          :key="training.sheetName"
          :to="{ name: 'DetailPelatihan', params: { sheetName: training.sheetName } }"
          class="group relative p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5"
        >
          <!-- Top color bar -->
          <div class="absolute top-0 left-6 right-6 h-0.5 rounded-b bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <!-- Icon -->
          <div class="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/40 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
            <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <!-- Title -->
          <h3 class="text-base font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2">
            {{ training.trainingName }}
          </h3>

          <!-- Meta -->
          <div class="flex items-center gap-1.5 text-xs text-surface-500 dark:text-surface-500">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Diperbarui: {{ formatDate(training.scrapeTime) }}</span>
          </div>

          <!-- Arrow -->
          <div class="absolute bottom-6 right-6 w-8 h-8 rounded-lg bg-surface-100 dark:bg-surface-700/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
