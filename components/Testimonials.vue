<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- Imagen de fondo con overlay -->
    <div class="absolute inset-0">
      <Transition
        enter-active-class="transition-all duration-2000 ease-out"
        enter-from-class="scale-110 opacity-0"
        enter-to-class="scale-100 opacity-100"
      >
        <NuxtImg v-if="isVisible" src="/imagenes/I7.webp" alt="Fondo testimonios" class="w-full h-full object-cover" format="webp,avif" sizes="sm:600px md:1200px lg:1400px" priority />
      </Transition>
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Contenido -->
    <div class="relative min-h-screen flex items-center">
      <div class="container mx-auto px-4 py-16">
        <Transition
          enter-active-class="transition-all duration-1200 ease-out"
          enter-from-class="opacity-0 -translate-y-16"
          enter-to-class="opacity-1 translate-y-0"
        >
          <h2 v-if="isVisible" class="text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
            {{ t('home.testimonials.title') }}
          </h2>
        </Transition>

        <!-- Carrusel de testimonios -->
        <div class="max-w-3xl mx-auto">
          <div v-if="isVisible" class="relative">
            <!-- Botones de navegación -->
            <button 
              @click="prevTestimonial" 
              class="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 transform hover:scale-110 transition-transform duration-300"
              aria-label="Testimonio anterior"
            >
              <i class="fas fa-chevron-left text-2xl md:text-3xl"></i>
            </button>

            <button 
              @click="nextTestimonial" 
              class="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 transform hover:scale-110 transition-transform duration-300"
              aria-label="Siguiente testimonio"
            >
              <i class="fas fa-chevron-right text-2xl md:text-3xl"></i>
            </button>

            <!-- Testimonios -->
            <div class="relative overflow-hidden h-[300px]">
              <TransitionGroup 
                name="carousel"
                tag="div"
                class="relative h-full"
              >
                <div 
                  v-for="(testimonial, index) in testimonials" 
                  :key="index"
                  v-show="currentIndex === index"
                  class="absolute inset-0 flex flex-col justify-center items-center px-4"
                >
                  <blockquote class="text-xl md:text-2xl text-white font-light italic mb-8 max-w-2xl text-center">
                    "{{ testimonial.text }}"
                  </blockquote>
                  <div class="text-white text-center">
                    <p class="font-medium text-lg mb-2">{{ testimonial.name }}</p>
                    <p class="text-white/80 text-sm">{{ testimonial.location }}</p>
                  </div>
                  <div class="flex justify-center gap-1 mt-4">
                    <i 
                      v-for="star in 5" 
                      :key="star" 
                      class="fas fa-star text-terracota-400"
                    ></i>
                  </div>
                </div>
              </TransitionGroup>
              </div>

            <!-- Indicadores -->
            <div class="flex justify-center gap-3 mt-12">
              <button 
                v-for="(_, index) in testimonials" 
                :key="index"
                @click="setTestimonial(index)"
                class="w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-150"
                :class="currentIndex === index ? 'bg-terracota-400 scale-125' : 'bg-white/30 hover:bg-white/50'"
                :aria-label="'Ver testimonio ' + (index + 1)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const testimonials = computed<any[]>(() => t('home.testimonials.items') as any[])

const currentIndex = ref(0)
const isVisible = ref(false)
const direction = ref('right')

const nextTestimonial = () => {
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  direction.value = 'left'
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}

const setTestimonial = (index: number) => {
  direction.value = index > currentIndex.value ? 'right' : 'left'
  currentIndex.value = index
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

  const section = document.querySelector('section')
  if (section) {
    observer.observe(section)
  }
})
</script> 

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.5s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.carousel-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.carousel-enter-to,
.carousel-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Ajuste para la dirección izquierda */
.carousel-enter-from[data-direction="left"] {
  transform: translateX(-100%);
}

.carousel-leave-to[data-direction="left"] {
  transform: translateX(100%);
}
</style> 