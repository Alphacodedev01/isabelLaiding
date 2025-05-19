import { defineNuxtPlugin } from '#app'
import { useLanguage } from '~/composables/useLanguage'

export default defineNuxtPlugin((nuxtApp) => {
  const { currentLang } = useLanguage()
 
  // Asegurarse de que el idioma inicial sea español
  if (!currentLang.value) {
    currentLang.value = 'es'
  }
}) 