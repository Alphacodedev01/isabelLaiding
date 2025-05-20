<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300 font-sans">
    <header class="fixed w-full top-0 z-50">
      <!-- Navbar normal -->
      <div v-if="!isMenuOpen" class="transition-all duration-500 ease-in-out" 
           :class="{ 'bg-white/95 backdrop-blur-sm shadow-lg': isScrolled }">
        <nav class="container mx-auto px-6 h-20 flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/">
              <NuxtImg :src="isScrolled ? '/imagenes/logo.webp' : '/imagenes/logo2.webp'" 
                   alt="Hotel Isabel" 
                   class="h-40 md:h-48 w-auto transition-all duration-500 ease-in-out"
                   format="webp,avif"
                   loading="lazy" />
            </NuxtLink>
          </div>
          <!-- Menú de escritorio -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/habitaciones" 
               :class="isScrolled ? 'text-gray-800' : 'text-white'"
               class="hover:text-terracota-400 transition-all duration-500 ease-in-out text-sm font-medium">
              {{ t('nav.rooms') }}
            </NuxtLink>
            <NuxtLink to="/services" 
               :class="isScrolled ? 'text-gray-800' : 'text-white'"
               class="hover:text-terracota-400 transition-all duration-500 ease-in-out text-sm font-medium">
              {{ t('nav.services') }}
            </NuxtLink>
            <NuxtLink to="/contacto" 
               :class="isScrolled ? 'text-gray-800' : 'text-white'"
               class="hover:text-terracota-400 transition-all duration-500 ease-in-out text-sm font-medium">
              {{ t('nav.contact') }}
            </NuxtLink>
            <a href="https://sys.hosroom.com/booking/259-apartasuite-isabel"
               target="_blank"
               class="bg-terracota-500 text-white px-6 py-2 rounded hover:bg-terracota-600 transition-all duration-300 ease-in-out text-sm font-medium">
              {{ t('nav.bookNow') }}
            </a>
            <button 
              @click="toggleLanguage"
              :class="isScrolled ? 'text-gray-800 border-gray-300' : 'text-white border-white/30'"
              class="border rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              {{ currentLang === 'es' ? 'EN' : 'ES' }}
            </button>
          </div>
          <!-- Botón de menú móvil -->
          <button @click="toggleMenu" 
                  class="md:hidden transition-all duration-500 ease-in-out"
                  :class="isScrolled ? 'text-gray-800' : 'text-white'">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </nav>
      </div>

      <!-- Menú móvil -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white">
          <div class="container mx-auto px-4">
            <nav class="h-20 flex justify-between items-center border-b border-gray-100">
              <div class="flex items-center">
                <NuxtLink to="/" @click="closeMenu">
                  <NuxtImg src="/imagenes/logo.webp" 
                       alt="Hotel Isabel" 
                       class="h-40 w-auto"
                       format="webp,avif"
                       loading="lazy" />
                </NuxtLink>
              </div>
              <div class="flex items-center gap-4">
                <button 
                  @click="toggleLanguage"
                  class="border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-all duration-300"
                >
                  {{ currentLang === 'es' ? 'EN' : 'ES' }}
                </button>
                <button @click="toggleMenu" class="text-gray-800 p-2 hover:text-terracota-500 transition-colors">
                  <i class="fas fa-times text-2xl"></i>
                </button>
              </div>
            </nav>
            <div class="min-h-[calc(100vh-80px)] flex flex-col">
              <nav class="flex-1 flex flex-col justify-center space-y-8 py-8">
                <NuxtLink to="/habitaciones" 
                   class="text-center text-xl font-medium text-gray-800 hover:text-terracota-500 transition-colors"
                   @click="closeMenu">
                  {{ t('nav.rooms') }}
                </NuxtLink>
                <NuxtLink to="/services" 
                   class="text-center text-xl font-medium text-gray-800 hover:text-terracota-500 transition-colors"
                   @click="closeMenu">
                  {{ t('nav.services') }}
                </NuxtLink>
                <NuxtLink to="/contacto" 
                   class="text-center text-xl font-medium text-gray-800 hover:text-terracota-500 transition-colors"
                   @click="closeMenu">
                  {{ t('nav.contact') }}
                </NuxtLink>
              </nav>
              <div class="py-8 border-t border-gray-100">
                <a href="https://sys.hosroom.com/booking/259-apartasuite-isabel"
                   target="_blank"
                   class="block w-full bg-terracota-500 text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-terracota-600 transition-colors text-center">
                  {{ t('nav.bookNow') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <Transition
      name="page"
      mode="out-in"
    >
    <NuxtPage />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const { currentLang, t, toggleLanguage } = useLanguage()

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  document.body.style.overflow = ''
})
</script>

<style>
/* Transiciones de página */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Transiciones para elementos dentro de las páginas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
