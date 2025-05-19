<template>
  <section id="servicios-section" class="py-16 sm:py-20 lg:py-24 relative overflow-visible">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
      <!-- Animaciones de elementos decorativos -->
      <Transition
        enter-active-class="transition-all duration-1000 ease-out"
        enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-1 translate-x-0"
      >
        <svg v-if="isVisible" class="absolute -left-20 top-20 w-72 h-72 text-terracota-400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,3c0,0-45,47-45,47s43-12,43-12L20,80c0,0,58-20,58-20L50,3z"/>
        </svg>
      </Transition>
      <!-- Palma derecha -->
      <svg class="absolute -right-10 bottom-40 w-64 h-64 text-terracota-400 transform rotate-45" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50,90C35,70,20,45,15,20c25,15,50,25,70,30C70,65,55,80,50,90z"/>
      </svg>
      <!-- Ficus pequeño -->
      <svg class="absolute right-1/4 top-1/3 w-40 h-40 text-terracota-400 transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50,10c-15,40-30,60-30,80c20-10,40-10,60,0c0-20-15-40-30-80z"/>
      </svg>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="max-w-7xl mx-auto">
        <!-- Grid container -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Título y descripción -->
          <div class="order-1 lg:order-1 text-center lg:text-left">
            <Transition
              enter-active-class="transition-all duration-1500 ease-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-1 translate-y-0"
            >
              <span v-if="isVisible" class="text-terracota-400 text-sm uppercase tracking-wider font-medium block text-left">{{ t('home.roomsSection.label') }}</span>
            </Transition>
            
            <Transition
              enter-active-class="transition-all duration-2000 delay-500 ease-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-1 translate-y-0"
            >
              <h2 v-if="isVisible" class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mt-4">
                {{ t('home.roomsSection.title') }}
              </h2>
            </Transition>

            <Transition
              enter-active-class="transition-all duration-2000 delay-1000 ease-out"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-1 translate-y-0"
        >
              <p v-if="isVisible" class="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg mt-4 sm:mt-6">
                {{ t('home.roomsSection.description') }}
              </p>
            </Transition>
          </div>

          <!-- Contenedor de imagen y tarjetas -->
          <div class="relative order-2 lg:order-2 min-h-[400px] sm:min-h-[500px] flex items-center">
            <!-- Imagen -->
            <Transition
              enter-active-class="transition-all duration-1200 ease-out"
              enter-from-class="opacity-0 translate-x-full scale-90"
              enter-to-class="opacity-1 translate-x-0 scale-100"
          >
              <div v-if="isVisible" class="w-full max-w-[500px] mx-auto lg:mx-0 relative transform hover:scale-[1.02] transition-transform duration-300">
                <div class="rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div class="relative aspect-[4/3]">
                    <TransitionGroup 
                      enter-active-class="transition-all duration-600 ease-out"
                      enter-from-class="opacity-0 scale-110"
                      enter-to-class="opacity-1 scale-100"
                      leave-active-class="transition-all duration-600 ease-in"
                      leave-from-class="opacity-1 scale-100"
                      leave-to-class="opacity-0 scale-90"
                    >
                      <NuxtImg 
                        v-for="(image, type) in roomImages" 
                        :key="type"
                        v-show="type === selectedRoom"
                        :src="image" 
                        :alt="roomTitles[type]"
                        class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        format="webp,avif" loading="lazy" decoding="async"
                      />
                    </TransitionGroup>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Tarjetas superpuestas -->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 space-y-3 sm:space-y-4 w-[200px] sm:w-[250px] md:w-[280px] translate-x-[5%] z-10 py-2 overflow-visible">
              <TransitionGroup
                enter-active-class="transition-all duration-1000 ease-out"
                enter-from-class="opacity-0 translate-x-full"
                enter-to-class="opacity-1 translate-x-0"
                move-class="transition-transform duration-400"
          >
                <div 
                  v-for="(title, type) in roomTitles"
                  :key="type"
                  v-if="isVisible"
                  @click="selectRoom(type)"
                 :class="[
                    'rounded-lg py-3 sm:py-4 px-4 sm:px-5 shadow-lg cursor-pointer border border-terracota-400 transform hover:scale-105 min-h-[60px] sm:min-h-[70px] flex items-center',
                    {
                      'bg-terracota-400 shadow-terracota-400/20 text-white': selectedRoom === type,
                      'bg-white hover:bg-terracota-50 text-gray-900': selectedRoom !== type
                    }
                  ]"
                  :style="{
                    transitionDelay: `${200 + (Object.keys(roomTitles).indexOf(type) * 200)}ms`,
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '300ms'
                  }"
                >
                  <div class="flex justify-between items-center w-full">
                    <div>
                      <h3 class="font-medium text-sm sm:text-base">{{ title }}</h3>
                    </div>
                    <NuxtLink 
                      :to="`/habitaciones#${type}`"
                      :class="[
                        'text-sm underline hover:no-underline whitespace-nowrap ml-2',
                        selectedRoom === type ? 'text-white' : 'text-terracota-400'
                      ]"
                    >
                      {{ t('home.roomsSection.viewMore') }}
                    </NuxtLink>
                  </div>
                </div>
              </TransitionGroup>
            </div>
          </div>
        </div>

        <!-- Servicios adicionales -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <TransitionGroup
            enter-active-class="transition-all duration-1000 ease-out"
            enter-from-class="opacity-0 translate-y-8"
            enter-to-class="opacity-1 translate-y-0"
            move-class="transition-transform duration-400"
          >
            <!-- Recepción 24/7 -->
            <div 
              v-if="isVisible"
              key="recepcion"
              class="bg-white dark:bg-neutral-800 rounded-lg p-4 flex items-center gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              style="transition-delay: 400ms;"
            >
              <div class="w-16 h-16 shrink-0 overflow-hidden rounded-lg">
                <NuxtImg 
                  src="/imagenes/I14.webp" 
                  alt="Recepción 24/7" 
                  class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  format="webp,avif" loading="lazy" decoding="async"
                />
              </div>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white">{{ t('home.roomsSection.reception.title') }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ t('home.roomsSection.reception.description') }}</p>
              </div>
            </div>

            <!-- Reservación Online -->
            <div 
              v-if="isVisible"
              key="reservacion"
              class="bg-white dark:bg-neutral-800 rounded-lg p-4 flex items-center gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              style="transition-delay: 450ms;"
            >
              <div class="w-16 h-16 shrink-0 overflow-hidden rounded-lg">
                <NuxtImg 
                  src="/imagenes/I15.webp" 
                  alt="Reservación Online" 
                  class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  format="webp,avif" loading="lazy" decoding="async"
                />
              </div>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white">{{ t('home.roomsSection.booking.title') }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ t('home.roomsSection.booking.description') }}</p>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const selectedRoom = ref('family')
const isVisible = ref(false)

const roomImages = {
  family: "/imagenes/Gran Familiar/6.webp",
  confort: "/imagenes/Familiar Confort/1.webp",
  clasico: "/imagenes/Doble Clasico/4.webp"
}

const roomTitles = computed(() => ({
  family: t('home.roomsSection.roomTitles.family'),
  confort: t('home.roomsSection.roomTitles.confort'),
  clasico: t('home.roomsSection.roomTitles.clasico')
}))

const selectRoom = (room) => {
  selectedRoom.value = room
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    })
  }, {
    threshold: 0.1
  })

  const section = document.querySelector('#servicios-section')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  }

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dark .bg-terracota-400\/10 {
  background-color: rgba(230, 126, 81, 0.1);
}
</style> 