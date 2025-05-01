<template>
  <div class="relative overflow-hidden group">
    <div class="relative h-64">
      <TransitionGroup name="fade">
        <img
          v-for="(image, index) in images"
          :key="image"
          :src="image"
          :alt="'Imagen ' + (index + 1)"
          v-show="currentIndex === index"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </TransitionGroup>
    </div>
    
    <!-- Controles del carrusel -->
    <button 
      @click="prev" 
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button 
      @click="next" 
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <i class="fas fa-chevron-right"></i>
    </button>

    <!-- Indicadores -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="currentIndex = index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

// Autoplay
let autoplayInterval
onMounted(() => {
  autoplayInterval = setInterval(next, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 