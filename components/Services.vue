<template>
  <section class="py-8 bg-neutral-50 dark:bg-neutral-800 overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 text-primary-500 font-display">Nuestros Servicios</h2>
      
      <!-- Carrusel de servicios -->
      <div class="relative service-carousel">
        <!-- Botón anterior -->
        <button 
          @click="prevSlide" 
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
          :class="{'opacity-50 cursor-not-allowed': currentSlide === 0}"
        >
          <i class="fas fa-chevron-left text-primary-500 text-xl"></i>
        </button>

        <!-- Contenedor del carrusel -->
        <div class="overflow-hidden mx-4 md:mx-8">
          <div 
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: 'translateX(-' + (currentSlide * (100 / itemsPerView)) + '%)' }"
          >
            <div v-for="(service, index) in services" 
                 :key="index"
                 :class="[
                   'flex-shrink-0 px-2',
                   {
                     'w-full': isMobile,
                     'w-1/2': isTablet,
                     'w-1/3': isDesktop,
                     'w-1/4': isLargeDesktop
                   }
                 ]"
            >
              <div class="bg-white dark:bg-neutral-900 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 duration-300 h-full">
                <div class="w-12 h-12 mx-auto mb-3 text-primary-500 flex items-center justify-center">
                  <i :class="service.icon" class="text-2xl"></i>
                </div>
                <h3 class="text-lg font-semibold text-center mb-2 text-gray-800 dark:text-white font-display">{{ service.name }}</h3>
                <p class="text-sm text-center text-gray-600 dark:text-gray-300 font-light">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Botón siguiente -->
        <button 
          @click="nextSlide" 
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
          :class="{'opacity-50 cursor-not-allowed': currentSlide === maxSlides - 1}"
        >
          <i class="fas fa-chevron-right text-primary-500 text-xl"></i>
        </button>

        <!-- Indicadores -->
        <div class="flex justify-center mt-6 space-x-2">
          <button 
            v-for="index in maxSlides" 
            :key="index - 1"
            @click="goToSlide(index - 1)"
            class="w-2 h-2 rounded-full transition-colors"
            :class="currentSlide === index - 1 ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const services = [
  {
    name: 'Apartamentos',
    description: 'Apartamentos amueblados',
    icon: 'fas fa-building'
  },
  {
    name: 'Baño privado',
    description: 'Baño privado incluido',
    icon: 'fas fa-bath'
  },
  {
    name: 'Vistas',
    description: 'Vistas a la ciudad',
    icon: 'fas fa-eye'
  },
  {
    name: 'Traslado aeropuerto',
    description: 'Servicio de traslado',
    icon: 'fas fa-plane'
  },
  {
    name: 'WiFi gratis',
    description: 'Internet de alta velocidad',
    icon: 'fas fa-wifi'
  },
  {
    name: 'Ducha',
    description: 'Ducha con agua caliente',
    icon: 'fas fa-shower'
  },
  {
    name: 'Habitaciones familiares',
    description: 'Ideal para familias',
    icon: 'fas fa-users'
  },
  {
    name: 'Habitaciones sin humo',
    description: 'Ambiente libre de humo',
    icon: 'fas fa-smoking-ban'
  },
  {
    name: 'Cocina',
    description: 'Cocina equipada',
    icon: 'fas fa-utensils'
  },
  {
    name: 'TV de pantalla plana',
    description: 'TV con cable incluido',
    icon: 'fas fa-tv'
  }
]

const currentSlide = ref(0)
const windowWidth = ref(0)

// Responsive breakpoints
const isMobile = computed(() => windowWidth.value < 640)
const isTablet = computed(() => windowWidth.value >= 640 && windowWidth.value < 1024)
const isDesktop = computed(() => windowWidth.value >= 1024 && windowWidth.value < 1280)
const isLargeDesktop = computed(() => windowWidth.value >= 1280)

// Número de items por vista según el tamaño de la pantalla
const itemsPerView = computed(() => {
  if (isMobile.value) return 1
  if (isTablet.value) return 2
  if (isDesktop.value) return 3
  return 4 // Large desktop
})

// Calcular el número máximo de slides
const maxSlides = computed(() => {
  return Math.ceil(services.length / itemsPerView.value)
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
  // Asegurarse de que el slide actual sea válido después del cambio de tamaño
  if (currentSlide.value >= maxSlides.value) {
    currentSlide.value = maxSlides.value - 1
  }
}

onMounted(() => {
  // Inicializamos el ancho de la ventana una vez que estemos en el cliente
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const nextSlide = () => {
  if (currentSlide.value < maxSlides.value - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>

<style scoped>
.service-carousel {
  position: relative;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
}

/* Asegurar que los botones de navegación estén siempre visibles */
.service-carousel button {
  opacity: 0.8;
  @media (max-width: 640px) {
    padding: 0.5rem;
  }
}

.service-carousel button:hover {
  opacity: 1;
}
</style> 