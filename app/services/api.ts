export interface TrainingListItem {
  sheetName: string
  trainingName: string
  scrapeTime: string
}

export interface Module {
  number: string
  title: string
  description: string
  completed: boolean
  mediaType: string
  videoId: string
  youtubeUrl: string
}

export interface Section {
  title: string
  modules: Module[]
}

export interface TrainingDetail {
  scraped_at: string
  training_title: string
  total_sections: number
  total_modules: number
  total_videos: number
  total_completed: number
  sections: Section[]
}

export interface ApiResponse<T> {
  status: string
  data: T
  message?: string
}

function getApiBaseUrl() {
  try {
    const config = useRuntimeConfig()
    return config.public.apiBaseUrl as string
  } catch {
    return 'https://script.google.com/macros/s/AKfycbxyQv4mPmaLJSO2yKr0R5NdSKzOexxX25hLvm4v0rpKu6tleOAyyeUgOUqXke36csekeA/exec'
  }
}

export async function fetchTrainingList(): Promise<TrainingListItem[]> {
  const baseUrl = getApiBaseUrl()
  const json = await $fetch<ApiResponse<TrainingListItem[]>>(`${baseUrl}?action=list`)
  if (json.status !== 'success') throw new Error(json.message || 'Gagal mengambil data')
  return json.data
}

export async function fetchTrainingDetail(sheetName: string): Promise<TrainingDetail> {
  const baseUrl = getApiBaseUrl()
  const json = await $fetch<ApiResponse<TrainingDetail>>(`${baseUrl}?action=detail&sheetName=${encodeURIComponent(sheetName)}`)
  if (json.status !== 'success') throw new Error(json.message || 'Gagal mengambil detail')
  return json.data
}
