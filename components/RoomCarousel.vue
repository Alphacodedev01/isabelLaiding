<template>
  <div class="relative aspect-[4/3] rounded-2xl overflow-hidden group">
    <!-- Imágenes -->
    <div class="relative w-full h-full">
      <TransitionGroup
        tag="div"
        name="carousel"
        class="relative w-full h-full"
      >
        <NuxtImg
          v-for="(image, index) in images"
          :key="image"
          :src="image"
          :alt="roomName"
          class="absolute w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': currentIndex !== index, 'opacity-100': currentIndex === index }"
          format="webp,avif"
          loading="lazy"
          decoding="async"
        />
      </TransitionGroup>
      </div>

            <!-- Controles -->
    <div class="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <button 
        @click="prevImage" 
        class="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
      >
        <i class="fas fa-chevron-left text-lg"></i>
            </button>
      <button 
        @click="nextImage" 
        class="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
      >
        <i class="fas fa-chevron-right text-lg"></i>
            </button>
      </div>

    <!-- Indicadores -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="currentIndex = index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  }
})

const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

let autoplayInterval

onMounted(() => {
  if (props.autoplay) {
    autoplayInterval = setInterval(nextImage, 5000)
  }
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.5s ease;
}

.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
}
</style> 