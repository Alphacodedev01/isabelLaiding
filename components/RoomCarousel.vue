<template>
  <div class="container mx-auto px-4 py-12">
    <div class="space-y-24">
      <!-- Habitación Familiar Confort -->
      <div class="flex flex-col md:flex-row gap-8 items-center opacity-0 transition-all duration-1000 transform translate-y-8"
           :class="{ 'opacity-100 translate-y-0': isVisible.room1 }"
           id="room1">
        <div class="w-full md:w-1/2 relative">
          <div class="relative overflow-hidden rounded-lg shadow-lg">
            <div class="flex transition-transform duration-500 ease-in-out" 
                 :style="{ transform: 'translateX(-' + (currentSlideRoom1 * 100) + '%)' }">
              <div v-for="(image, index) in familiarConfortImages" :key="index" class="w-full flex-shrink-0">
                <div class="relative w-full">
                  <div class="pb-[75%] relative">
                    <img :src="image" :alt="'Habitación Familiar Confort'" class="absolute inset-0 w-full h-full object-cover">
                  </div>
                </div>
              </div>
            </div>
            <!-- Controles -->
            <button @click="prevSlide('room1')" 
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button @click="nextSlide('room1')" 
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="text-3xl font-bold text-primary-500 mb-4 font-display">Habitación Familiar Confort</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Espaciosa habitación diseñada para familias, con todas las comodidades necesarias para una estancia placentera.
            Perfecta para grupos de hasta 4 personas.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Capacidad máxima: 4 personas</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Baño privado completo</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>TV de pantalla plana</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>WiFi gratuito</span>
            </li>
          </ul>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-primary-500">Desde $150/noche</span>
            <button class="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>

      <!-- Suite Gran Familiar -->
      <div class="flex flex-col md:flex-row-reverse gap-8 items-center opacity-0 transition-all duration-1000 transform translate-y-8"
           :class="{ 'opacity-100 translate-y-0': isVisible.room2 }"
           id="room2">
        <div class="w-full md:w-1/2 relative">
          <div class="relative overflow-hidden rounded-lg shadow-lg">
            <div class="flex transition-transform duration-500 ease-in-out" 
                 :style="{ transform: 'translateX(-' + (currentSlideRoom2 * 100) + '%)' }">
              <div v-for="(image, index) in granFamiliarImages" :key="index" class="w-full flex-shrink-0">
                <div class="relative w-full">
                  <div class="pb-[75%] relative">
                    <img :src="image" :alt="'Suite Gran Familiar'" class="absolute inset-0 w-full h-full object-cover">
                  </div>
                </div>
              </div>
            </div>
            <!-- Controles -->
            <button @click="prevSlide('room2')" 
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button @click="nextSlide('room2')" 
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="text-3xl font-bold text-primary-500 mb-4 font-display">Suite Gran Familiar</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Amplia suite con sala de estar separada y vistas panorámicas. El espacio perfecto para familias grandes
            o grupos que buscan más comodidad y privacidad.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Capacidad máxima: 6 personas</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Sala de estar separada</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Cocina equipada</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Vistas panorámicas</span>
            </li>
          </ul>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-primary-500">Desde $200/noche</span>
            <button class="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>

      <!-- Habitación Clásica Doble -->
      <div class="flex flex-col md:flex-row gap-8 items-center opacity-0 transition-all duration-1000 transform translate-y-8"
           :class="{ 'opacity-100 translate-y-0': isVisible.room3 }"
           id="room3">
        <div class="w-full md:w-1/2 relative">
          <div class="relative overflow-hidden rounded-lg shadow-lg">
            <div class="flex transition-transform duration-500 ease-in-out" 
                 :style="{ transform: 'translateX(-' + (currentSlideRoom3 * 100) + '%)' }">
              <div v-for="(image, index) in clasicoDobleImages" :key="index" class="w-full flex-shrink-0">
                <div class="relative w-full">
                  <div class="pb-[75%] relative">
                    <img :src="image" :alt="'Habitación Clásica Doble'" class="absolute inset-0 w-full h-full object-cover">
                  </div>
                </div>
              </div>
            </div>
            <!-- Controles -->
            <button @click="prevSlide('room3')" 
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button @click="nextSlide('room3')" 
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="text-3xl font-bold text-primary-500 mb-4 font-display">Habitación Clásica Doble</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Elegante y confortable habitación con dos camas. Perfecta para viajeros de negocios o amigos
            que buscan comodidad y funcionalidad.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Capacidad máxima: 2 personas</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Dos camas individuales</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Escritorio de trabajo</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-check text-primary-500 mr-2"></i>
              <span>Baño privado</span>
            </li>
          </ul>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-primary-500">Desde $120/noche</span>
            <button class="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Imágenes para cada tipo de habitación
const familiarConfortImages = [
  '/images/Familiar confort/595884928.jpg',
  '/images/Familiar confort/595884937.jpg',
  '/images/Familiar confort/595884915.jpg',
  '/images/Familiar confort/595884933.jpg'
]

const granFamiliarImages = [
  '/images/Gran Familiar/595884921.jpg',
  '/images/Gran Familiar/595884866.jpg',
  '/images/Gran Familiar/595884962.jpg',
  '/images/Gran Familiar/595884933.jpg'
]

const clasicoDobleImages = [
  '/images/Clasico doble/624138578.jpg',
  '/images/Clasico doble/624141835.jpg',
  '/images/Clasico doble/624138642.jpg',
  '/images/Clasico doble/624138623.jpg'
]

// Estados para cada carrusel
const currentSlideRoom1 = ref(0)
const currentSlideRoom2 = ref(0)
const currentSlideRoom3 = ref(0)

// Estado de visibilidad para cada habitación
const isVisible = ref({
  room1: false,
  room2: false,
  room3: false
})

onMounted(() => {
  // Configurar el Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const roomId = entry.target.id as 'room1' | 'room2' | 'room3'
      if (roomId && roomId in isVisible.value) {
        isVisible.value[roomId] = entry.isIntersecting
      }
    })
  }, options)

  // Observar cada elemento usando getElementById
  const room1El = document.getElementById('room1')
  const room2El = document.getElementById('room2')
  const room3El = document.getElementById('room3')

  if (room1El) observer.observe(room1El)
  if (room2El) observer.observe(room2El)
  if (room3El) observer.observe(room3El)
})

const getImagesLength = (room: string) => {
  switch (room) {
    case 'room1':
      return familiarConfortImages.length
    case 'room2':
      return granFamiliarImages.length
    case 'room3':
      return clasicoDobleImages.length
    default:
      return 0
  }
}

const getCurrentSlide = (room: string) => {
  switch (room) {
    case 'room1':
      return currentSlideRoom1
    case 'room2':
      return currentSlideRoom2
    case 'room3':
      return currentSlideRoom3
    default:
      return ref(0)
  }
}

const nextSlide = (room: string) => {
  const currentSlide = getCurrentSlide(room)
  const length = getImagesLength(room)
  currentSlide.value = (currentSlide.value + 1) % length
}

const prevSlide = (room: string) => {
  const currentSlide = getCurrentSlide(room)
  const length = getImagesLength(room)
  currentSlide.value = (currentSlide.value - 1 + length) % length
}
</script>

<style scoped>
/* Aseguramos que las transiciones sean suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 