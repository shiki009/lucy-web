import { ref, computed, watch } from 'vue'
import { translations } from './translations.js'

const currentLang = ref(localStorage.getItem('lucy-lang') || 'en')

const t = computed(() => translations[currentLang.value])

function toggleLang() {
  currentLang.value = currentLang.value === 'en' ? 'ru' : 'en'
  localStorage.setItem('lucy-lang', currentLang.value)
  document.documentElement.lang = currentLang.value
}

export function useI18n() {
  return { currentLang, t, toggleLang }
}
