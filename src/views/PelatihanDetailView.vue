<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchTrainingDetail, type TrainingDetail, type Module } from '@/services/api'

const route = useRoute()
const router = useRouter()
const sheetName = computed(() => route.params.sheetName as string)

const data = ref<TrainingDetail | null>(null)
const loading = ref(true)
const error = ref('')
const sidebarOpen = ref(false)

// Flatten all modules with section info for navigation
interface FlatModule extends Module {
  sectionIndex: number
  moduleIndex: number
  sectionTitle: string
}

const allModules = computed<FlatModule[]>(() => {
  if (!data.value) return []
  const list: FlatModule[] = []
  data.value.sections.forEach((sec, si) => {
    sec.modules.forEach((mod, mi) => {
      list.push({ ...mod, sectionIndex: si, moduleIndex: mi, sectionTitle: sec.title })
    })
  })
  return list
})

const activeFlatIndex = ref(0)
const activeModule = computed(() => allModules.value[activeFlatIndex.value] || null)
const canPrev = computed(() => activeFlatIndex.value > 0)
const canNext = computed(() => activeFlatIndex.value < allModules.value.length - 1)

const isPlaying = ref(false)

function goTo(flatIdx: number) {
  if (flatIdx >= 0 && flatIdx < allModules.value.length) {
    activeFlatIndex.value = flatIdx
    sidebarOpen.value = false
    isPlaying.value = false
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function goPrev() { if (canPrev.value) goTo(activeFlatIndex.value - 1) }
function goNext() { if (canNext.value) goTo(activeFlatIndex.value + 1) }

// Reset isPlaying when active module changes via other means if any
watch(activeModule, () => {
  isPlaying.value = false
})

const progressPercent = computed(() => {
  if (!data.value || !data.value.total_modules) return 0
  return Math.round((data.value.total_completed / data.value.total_modules) * 100)
})

// Group flat indices by section for sidebar
const sidebarSections = computed(() => {
  if (!data.value) return []
  let flatIdx = 0
  return data.value.sections.map((sec, si) => {
    const items = sec.modules.map((mod, mi) => {
      const idx = flatIdx++
      return { ...mod, flatIdx: idx, sectionIndex: si, moduleIndex: mi }
    })
    const done = items.filter(m => m.completed).length
    return { title: sec.title, items, done, total: items.length }
  })
})

onMounted(async () => {
  try {
    data.value = await fetchTrainingDetail(sheetName.value)
    // Auto-select first non-locked module
    const idx = allModules.value.findIndex(m => m.mediaType !== 'locked')
    if (idx >= 0) activeFlatIndex.value = idx
  } catch (e: any) {
    error.value = e.message || 'Gagal memuat detail pelatihan'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="pt-16 sm:pt-20 pb-8 sm:pb-12">
    <!-- Mobile sidebar overlay -->
    <teleport to="body">
      <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="sidebarOpen" class="fixed inset-0 z-[80] bg-black/50 lg:hidden" @click="sidebarOpen = false"></div>
      </transition>
    </teleport>

    <div class="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
      <!-- Back -->
      <button @click="router.push('/pelatihan')" class="inline-flex items-center gap-1.5 text-xs sm:text-sm text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 mb-4 sm:mb-5 transition-colors animate-fade-in">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        <span>Kembali</span>
      </button>

      <!-- Loading -->
      <div v-if="loading" class="animate-pulse space-y-4">
        <div class="h-8 bg-surface-200 dark:bg-surface-700 rounded w-2/3"></div>
        <div class="h-64 bg-surface-200 dark:bg-surface-700 rounded-2xl"></div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-20">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
          <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
        </div>
        <p class="text-surface-600 dark:text-surface-400 mb-2">{{ error }}</p>
        <button @click="() => { loading = true; error = ''; fetchTrainingDetail(sheetName).then(d => data = d).catch(e => error = e.message).finally(() => loading = false) }" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">Coba lagi</button>
      </div>

      <!-- Main Content -->
      <template v-else-if="data">
        <!-- Title + mobile sidebar toggle -->
        <div class="flex items-start justify-between gap-4 mb-5 animate-fade-in">
          <div class="min-w-0">
            <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-surface-900 dark:text-white line-clamp-2 sm:truncate">{{ data.training_title }}</h1>
            <p class="text-xs text-surface-500 mt-1">{{ data.total_modules }} modul · {{ data.total_videos }} video · {{ data.total_completed }} selesai</p>
          </div>
          <button @click="sidebarOpen = true" class="lg:hidden shrink-0 p-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors" aria-label="Buka daftar materi">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
          </button>
        </div>

        <!-- Progress bar mini -->
        <div class="mb-6 animate-fade-in" style="animation-delay:.05s">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-medium text-surface-600 dark:text-surface-400">Progress</span>
            <span class="text-xs font-bold" :class="progressPercent===100?'text-emerald-600 dark:text-emerald-400':'text-primary-600 dark:text-primary-400'">{{ progressPercent }}%</span>
          </div>
          <div class="h-1.5 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-700" :class="progressPercent===100?'bg-gradient-to-r from-emerald-500 to-emerald-400':'bg-gradient-to-r from-primary-500 to-primary-400'" :style="{width:progressPercent+'%'}"></div>
          </div>
        </div>

        <!-- Two-column grid -->
        <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 animate-fade-in-up" style="animation-delay:.1s">
          <!-- LEFT: Main Content -->
          <div class="flex-1 min-w-0">
            <template v-if="activeModule">
              <!-- Video / Media area -->
              <div class="rounded-xl sm:rounded-2xl overflow-hidden bg-surface-900 mb-4 sm:mb-5 shadow-xl">
                <div v-if="activeModule.mediaType === 'video' && activeModule.videoId" class="relative w-full" style="padding-bottom:56.25%">
                  <template v-if="isPlaying">
                    <iframe :key="activeModule.videoId" :src="`https://www.youtube.com/embed/${activeModule.videoId}?rel=0&autoplay=1`" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </template>
                  <template v-else>
                    <div @click="isPlaying = true" class="absolute inset-0 w-full h-full cursor-pointer group">
                      <img :src="`https://img.youtube.com/vi/${activeModule.videoId}/maxresdefault.jpg`" class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="Video thumbnail">
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform">
                          <svg class="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div v-else-if="activeModule.mediaType === 'locked'" class="flex flex-col items-center justify-center py-12 sm:py-20 text-surface-500">
                  <svg class="w-12 h-12 mb-3 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <p class="text-sm font-medium">Materi Terkunci</p>
                  <p class="text-xs mt-1 text-surface-600">Selesaikan modul sebelumnya terlebih dahulu</p>
                </div>
                <div v-else class="flex flex-col items-center justify-center py-12 sm:py-20 text-surface-500">
                  <svg class="w-12 h-12 mb-3 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <p class="text-sm font-medium">Dokumen / File</p>
                </div>
              </div>

              <!-- Module info -->
              <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 mb-3 sm:mb-4">
                <div class="flex items-center gap-2 mb-2">
                  <span class="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide" :class="{
                    'bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400': activeModule.mediaType==='video',
                    'bg-surface-200 dark:bg-surface-700 text-surface-500': activeModule.mediaType==='locked',
                    'bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400': activeModule.mediaType==='file/document',
                  }">
                    {{ activeModule.mediaType==='video'?'Video':activeModule.mediaType==='locked'?'Terkunci':'Dokumen' }}
                  </span>
                  <span v-if="activeModule.completed" class="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    <svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Selesai
                  </span>
                </div>
                <p class="text-xs text-surface-500 mb-1">{{ activeModule.sectionTitle }}</p>
                <h2 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white mb-2 sm:mb-3">{{ activeModule.title }}</h2>
                <p v-if="activeModule.description && activeModule.description !== '.'" class="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">{{ activeModule.description }}</p>
              </div>

              <!-- Prev / Next buttons -->
              <div class="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
                <button @click="goPrev" :disabled="!canPrev" class="flex-1 flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-200" :class="canPrev ? 'border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/30 cursor-pointer' : 'border-surface-100 dark:border-surface-800 bg-surface-50 dark:bg-surface-900 opacity-50 cursor-not-allowed'">
                  <svg class="w-4 h-4 shrink-0 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  <div class="min-w-0 text-left">
                    <p class="text-[10px] text-surface-500 uppercase tracking-wide font-medium">Sebelumnya</p>
                    <p v-if="canPrev" class="text-xs font-medium text-surface-700 dark:text-surface-300 truncate">{{ allModules[activeFlatIndex - 1]?.title }}</p>
                  </div>
                </button>
                <button @click="goNext" :disabled="!canNext" class="flex-1 flex items-center justify-end gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-200" :class="canNext ? 'border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/30 cursor-pointer' : 'border-surface-100 dark:border-surface-800 bg-surface-50 dark:bg-surface-900 opacity-50 cursor-not-allowed'">
                  <div class="min-w-0 text-right">
                    <p class="text-[10px] text-surface-500 uppercase tracking-wide font-medium">Selanjutnya</p>
                    <p v-if="canNext" class="text-xs font-medium text-surface-700 dark:text-surface-300 truncate">{{ allModules[activeFlatIndex + 1]?.title }}</p>
                  </div>
                  <svg class="w-4 h-4 shrink-0 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </template>
          </div>

          <!-- RIGHT: Sidebar (Desktop) -->
          <aside class="hidden lg:block w-80 xl:w-96 shrink-0">
            <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700/50 bg-white dark:bg-surface-800/30">
              <div class="p-4 border-b border-surface-100 dark:border-surface-700/50">
                <h3 class="text-sm font-semibold text-surface-900 dark:text-white">Daftar Materi</h3>
                <p class="text-xs text-surface-500 mt-0.5">{{ activeFlatIndex + 1 }} / {{ allModules.length }}</p>
              </div>
              <div class="divide-y divide-surface-100 dark:divide-surface-700/30">
                <div v-for="(sec, si) in sidebarSections" :key="si">
                  <div class="px-4 py-2.5 bg-surface-50 dark:bg-surface-800/50">
                    <p class="text-[11px] font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide truncate">{{ sec.title }}</p>
                    <p class="text-[10px] text-surface-400">{{ sec.done }}/{{ sec.total }} selesai</p>
                  </div>
                  <button v-for="item in sec.items" :key="item.flatIdx" @click="goTo(item.flatIdx)" class="w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-colors" :class="item.flatIdx === activeFlatIndex ? 'bg-primary-50 dark:bg-primary-950/40 border-l-2 border-primary-500' : 'hover:bg-surface-50 dark:hover:bg-surface-800/40 border-l-2 border-transparent'" :disabled="false">
                    <div class="shrink-0">
                      <div v-if="item.completed" class="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                      <div v-else-if="item.mediaType==='locked'" class="w-4 h-4 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div>
                      <div v-else class="w-4 h-4 rounded-full border-2 border-surface-300 dark:border-surface-600"></div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-xs font-medium truncate" :class="item.flatIdx === activeFlatIndex ? 'text-primary-700 dark:text-primary-300' : 'text-surface-700 dark:text-surface-300'">{{ item.title }}</p>
                      <p class="text-[10px] text-surface-400" :class="{'opacity-50': item.mediaType==='locked'}">{{ item.mediaType==='video'?'Video':item.mediaType==='locked'?'Terkunci':'Dokumen' }}</p>
                    </div>
                    <svg v-if="item.mediaType==='video' && item.videoId" class="w-3 h-3 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <!-- Mobile Sidebar Drawer -->
          <teleport to="body">
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-x-full" enter-to-class="translate-x-0" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-x-0" leave-to-class="translate-x-full">
              <aside v-if="sidebarOpen" class="fixed top-0 right-0 bottom-0 w-[85vw] max-w-80 z-[90] bg-white dark:bg-surface-900 shadow-2xl overflow-y-auto lg:hidden">
                <div class="flex items-center justify-between p-4 border-b border-surface-200 dark:border-surface-700">
                  <h3 class="text-sm font-semibold text-surface-900 dark:text-white">Daftar Materi</h3>
                  <button @click="sidebarOpen = false" class="p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"><svg class="w-4 h-4 text-surface-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
                </div>
                <div class="divide-y divide-surface-100 dark:divide-surface-700/30">
                  <div v-for="(sec, si) in sidebarSections" :key="si">
                    <div class="px-4 py-2.5 bg-surface-50 dark:bg-surface-800/50">
                      <p class="text-[11px] font-semibold text-surface-500 uppercase tracking-wide truncate">{{ sec.title }}</p>
                      <p class="text-[10px] text-surface-400">{{ sec.done }}/{{ sec.total }}</p>
                    </div>
                    <button v-for="item in sec.items" :key="item.flatIdx" @click="goTo(item.flatIdx)" class="w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-colors" :class="item.flatIdx === activeFlatIndex ? 'bg-primary-50 dark:bg-primary-950/40 border-l-2 border-primary-500' : 'hover:bg-surface-50 dark:hover:bg-surface-800/40 border-l-2 border-transparent'">
                      <div class="shrink-0">
                        <div v-if="item.completed" class="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                        <div v-else-if="item.mediaType==='locked'" class="w-4 h-4 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div>
                        <div v-else class="w-4 h-4 rounded-full border-2 border-surface-300 dark:border-surface-600"></div>
                      </div>
                      <p class="text-xs font-medium truncate flex-1" :class="item.flatIdx === activeFlatIndex ? 'text-primary-700 dark:text-primary-300' : 'text-surface-700 dark:text-surface-300'">{{ item.title }}</p>
                    </button>
                  </div>
                </div>
              </aside>
            </transition>
          </teleport>
        </div>
      </template>
    </div>
  </div>
</template>
