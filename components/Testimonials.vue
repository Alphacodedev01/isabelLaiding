<template>
  <section class="py-16 bg-white dark:bg-neutral-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-500">Lo que dicen nuestros huéspedes</h2>
      
      <div class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 px-4">
              <div class="max-w-2xl mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 shadow-lg">
                <div class="flex items-center mb-6">
                  <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full object-cover mr-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">{{ testimonial.name }}</h3>
                    <p class="text-gray-600 dark:text-gray-300">{{ testimonial.location }}</p>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-300 italic">"{{ testimonial.comment }}"</p>
                <div class="flex items-center mt-4">
                  <div class="flex text-yellow-400">
                    <svg v-for="star in 5" :key="star" class="w-5 h-5" :class="{ 'text-gray-300': star > testimonial.rating }" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Controles -->
        <button @click="prevSlide" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testimonials = [
  {
    name: 'Ana García',
    location: 'Madrid, España',
    comment: 'Una experiencia increíble. Las habitaciones son espaciosas y el servicio es excepcional. Definitivamente volveré.',
    rating: 5,
    image: '/images/624117202.jpg'
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Buenos Aires, Argentina',
    comment: 'La ubicación es perfecta y el personal muy atento. La relación calidad-precio es excelente.',
    rating: 4,
    image: '/images/624117212.jpg'
  },
  {
    name: 'María López',
    location: 'Ciudad de México',
    comment: 'Me encantó la decoración y el ambiente del hotel. El desayuno es delicioso y variado.',
    rating: 5,
    image: '/images/624117161.jpg'
  }
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
}
</script> 