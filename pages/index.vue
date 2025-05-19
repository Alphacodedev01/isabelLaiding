<template>
  <main>
    <!-- Hero Section -->
    <section id="hero-section" class="relative h-screen">
      <div class="absolute inset-0">
        <NuxtImg src="/Imagenes/I6.webp" alt="Hotel Isabel" class="w-full h-full object-cover" format="webp,avif" sizes="sm:600px md:1200px lg:1400px" priority />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      </div>
      <div class="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div class="max-w-4xl">
          <Transition
            enter-active-class="transition-all duration-1000 ease-out"
            enter-from-class="opacity-0 -translate-y-12"
            enter-to-class="opacity-1 translate-y-0"
          >
            <h1 v-if="isHeroVisible" class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 font-display animate-fade-in-down leading-tight">
              {{ t('home.hero.title') }}
            </h1>
          </Transition>
          
          <Transition
            enter-active-class="transition-all duration-1000 delay-300 ease-out"
            enter-from-class="opacity-0 -translate-y-8"
            enter-to-class="opacity-1 translate-y-0"
          >
            <p v-if="isHeroVisible" class="text-lg sm:text-xl md:text-2xl mb-8 font-light animate-fade-in-up">
              {{ t('home.hero.subtitle') }}
            </p>
          </Transition>
        </div>
      </div>
      <!-- Flecha de scroll -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <a href="#habitaciones" class="text-white animate-bounce-slow hover:text-terracota-400 transition-colors duration-300">
          <i class="fas fa-chevron-down text-3xl md:text-4xl"></i>
        </a>
      </div>
    </section>

    <!-- Habitaciones y Servicios -->
    <section id="content-section" class="relative overflow-hidden">
      <!-- Imagen de fondo -->
      <div class="absolute inset-0">
        <NuxtImg src="/imagenes/habitaciones2.webp" alt="Fondo habitaciones" class="w-full h-full object-cover block sm:hidden" format="webp,avif" loading="lazy" />
        <NuxtImg src="/imagenes/habitaciones.webp" alt="Fondo habitaciones" class="w-full h-full object-cover hidden sm:block" format="webp,avif" loading="lazy" />
      </div>

      <!-- Elementos decorativos de fondo -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
        <!-- Hoja de palma izquierda -->
        <svg class="absolute -left-32 top-1/4 w-96 h-96 text-terracota-400 transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M80,90C60,60,40,40,10,30c30,0,50,10,70,20C80,60,80,75,80,90z"/>
        </svg>
        <!-- Monstera derecha -->
        <svg class="absolute -right-20 bottom-1/4 w-80 h-80 text-terracota-400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,10c0,0,30,40,30,40s-20,30-20,30s40-20,40-20L20,10z"/>
        </svg>
        <!-- Hojas pequeñas dispersas -->
        <svg class="absolute left-1/4 top-20 w-32 h-32 text-terracota-400 transform rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,20c-10,20-20,40-20,60c15-10,25-10,40,0c0-20-10-40-20-60z"/>
        </svg>
        <svg class="absolute right-1/3 bottom-32 w-24 h-24 text-terracota-400 transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M60,80C45,60,35,40,30,20c20,10,35,20,50,30C75,60,65,70,60,80z"/>
        </svg>
      </div>

      <div class="max-w-[1400px] mx-auto relative py-12 md:py-20 px-4 md:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Contenido de texto -->
          <div class="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <Transition
              enter-active-class="transition-all duration-700 ease-out"
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-1 translate-y-0"
            >
              <div v-if="isContentVisible" class="space-y-3">
                <p class="text-terracota-500 font-medium text-sm md:text-base text-left">{{ t('home.content.priceFrom') }}</p>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                  {{ t('home.content.title') }}
                </h2>
              </div>
            </Transition>

            <TransitionGroup
              enter-active-class="transition-all duration-1000"
              enter-from-class="opacity-0 translate-y-8"
              enter-to-class="opacity-1 translate-y-0"
              move-class="transition-transform duration-300"
            >
              <p v-if="isContentVisible" key="desc1" class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed" style="transition-delay: 200ms;">
                {{ t('home.content.description1') }}
              </p>
              <p v-if="isContentVisible" key="desc2" class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed" style="transition-delay: 400ms;">
                {{ t('home.content.description2') }}
              </p>
            </TransitionGroup>

            <Transition
              enter-active-class="transition-all duration-1000 delay-600 ease-out"
              enter-from-class="opacity-0 translate-y-8"
              enter-to-class="opacity-1 translate-y-0"
            >
              <div v-if="isContentVisible" class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span class="w-full text-center sm:w-auto mb-2 sm:mb-0">{{ t('home.content.recommendedOn') }}</span>
                <div class="flex flex-wrap gap-6 items-center justify-center sm:justify-start w-full">
                  <a href="#" class="flex items-center gap-2 text-terracota-500 hover:text-terracota-600 transition-colors">
                    <i class="fab fa-booking text-xl"></i>
                    <span class="font-medium">Booking</span>
                  </a>
                  <a href="#" class="flex items-center gap-2 text-terracota-500 hover:text-terracota-600 transition-colors">
                    <i class="fab fa-airbnb text-xl"></i>
                    <span class="font-medium">Airbnb</span>
                  </a>
                  <a href="#" class="flex items-center gap-2 text-terracota-500 hover:text-terracota-600 transition-colors">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.33 9.17v1.96h-3.26V9.17h3.26zm4.67.07v10.14c0 .42-.35.77-.77.77H.77c-.42 0-.77-.35-.77-.77V9.24c0-.42.35-.77.77-.77h22.46c.42 0 .77.35.77.77zm-1.54.77H1.54v8.6h20.92v-8.6zM19.33 3.85v1.96h-3.26V3.85h3.26zm0 2.66v1.96h-3.26V6.51h3.26z"/>
                    </svg>
                    <span class="font-medium">Expedia</span>
                  </a>
              </div>
              </div>
            </Transition>
          </div>
          <!-- Imagen de habitación -->
          <div class="relative order-2 lg:order-1">
            <div class="bg-white dark:bg-neutral-800 p-4 md:p-6 rounded-xl shadow-xl">
              <div class="flex items-center justify-between mb-4">
                <div class="flex gap-0.5 md:gap-1">
                  <i class="fas fa-star text-terracota-400 text-sm md:text-base"></i>
                  <i class="fas fa-star text-terracota-400 text-sm md:text-base"></i>
                  <i class="fas fa-star text-terracota-400 text-sm md:text-base"></i>
                  <i class="fas fa-star text-terracota-400 text-sm md:text-base"></i>
                  <i class="fas fa-star text-terracota-400 text-sm md:text-base"></i>
                </div>
                <span class="text-terracota-500 font-semibold text-sm md:text-base">APARTAMENTOS DE LUJO</span>
              </div>
              <div class="overflow-hidden rounded-lg">
                <div class="aspect-w-4 aspect-h-3">
                  <NuxtImg 
                    src="/Imagenes/I1.webp" 
                    alt="Habitación de lujo"
                    class="w-full h-full object-cover" 
                    format="webp,avif"
              loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mt-4 text-sm leading-relaxed">
                Una maravillosa serenidad se ha apoderado de todo mi ser, como estas dulces mañanas de primavera que disfruto con todo mi corazón.
              </p>
            </div>
          </div>
        </div>

        <!-- Servicios adicionales -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <!-- ... existing code ... -->
        </div>

        <!-- Servicios -->
        <Services />
      </div>
    </section>

    <!-- Testimonios -->
    <Testimonials />

    <!-- Footer -->
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const isHeroVisible = ref(false)
const isContentVisible = ref(false)

onMounted(() => {
  const observerHero = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isHeroVisible.value = true
        observerHero.disconnect()
      }
    })
  }, {
    threshold: 0.1
  })

  const observerContent = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isContentVisible.value = true
        observerContent.disconnect()
      }
    })
  }, {
    threshold: 0.1
  })

  const heroSection = document.querySelector('#hero-section')
  const contentSection = document.querySelector('#content-section')

  if (heroSection) {
    observerHero.observe(heroSection)
  }
  if (contentSection) {
    observerContent.observe(contentSection)
  }
})

const handleContact = () => {
  // Aquí iría la lógica para procesar el formulario de contacto
  console.log('Formulario enviado:', contactForm.value)
  contactForm.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script> 