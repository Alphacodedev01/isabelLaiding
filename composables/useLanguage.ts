import { ref } from 'vue'
import { translations } from '~/assets/translations'

type Language = 'es' | 'en'

// Usar useState para mantener el estado global
export const useLanguage = () => {
  const currentLang = useState<Language>('currentLang', () => 'es')
  
  const t = (path: string) => {
    const keys = path.split('.').flatMap(segment => {
      // Soporta notación con corchetes, p. ej. features[0]
      return segment.split(/\[|\]/).filter(Boolean)
    })

    let value: any = translations[currentLang.value]

    for (const key of keys) {
      if (value && key in value) {
        value = value[key]
      } else if (Array.isArray(value) && !isNaN(Number(key))) {
        const idx = Number(key)
        value = value[idx]
      } else {
        return path // Fallback: devuelve la clave original si no se encuentra
      }
    }

    return value
  }

  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'es' ? 'en' : 'es'
  }

  return {
    currentLang,
    t,
    toggleLanguage
  }
} 