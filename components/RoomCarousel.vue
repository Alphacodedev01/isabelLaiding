<template>
  <div class="relative">
    <!-- Carrusel principal -->
    <div class="relative overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(room, index) in rooms" :key="index" class="w-full flex-shrink-0">
          <div class="relative aspect-[16/9] group">
            <img :src="room.image" :alt="room.name" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-2xl font-bold mb-2">{{ room.name }}</h3>
                <p class="mb-4">{{ room.description }}</p>
                <div class="flex items-center space-x-4">
                  <span class="text-xl font-bold">{{ room.price }}</span>
                  <button class="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Controles -->
    <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rooms = [
  {
    name: 'Habitación Familiar Confort',
    description: 'Espaciosa habitación ideal para familias, con todas las comodidades necesarias.',
    price: 'Desde $150/noche',
    image: '/images/595884921.jpg'
  },
  {
    name: 'Suite Gran Familiar',
    description: 'Amplia suite con sala de estar separada y vistas panorámicas.',
    price: 'Desde $200/noche',
    image: '/images/595884957.jpg'
  },
  {
    name: 'Habitación Clásica Doble',
    description: 'Elegante y confortable habitación con dos camas.',
    price: 'Desde $120/noche',
    image: '/images/596949494.jpg'
  }
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % rooms.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + rooms.length) % rooms.length
}
</script> 