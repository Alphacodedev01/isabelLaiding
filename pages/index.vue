<template>
  <main>
    <!-- Hero Section -->
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <img src="/images/home.jpg" alt="Hotel Isabel" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center text-white">
        <div class="max-w-4xl px-4">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 font-display">Bienvenido a Hotel Isabel</h1>
          <p class="text-xl md:text-2xl mb-8 font-light">Descubre el lujo y el confort en cada detalle</p>
          <a href="#habitaciones" class="bg-primary-500 text-white px-8 py-3 rounded-full text-lg hover:bg-primary-600 transition-colors">
            Ver Habitaciones
          </a>
        </div>
      </div>
    </section>

    <!-- Habitaciones -->
    <section id="habitaciones" class="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-500 font-display">Nuestras Habitaciones</h2>
        <RoomCarousel />
      </div>
    </section>

    <!-- Servicios -->
    <Services id="servicios" />

    <!-- Testimonios -->
    <Testimonials />

    <!-- Ubicación y Contacto -->
    <section id="contacto" class="py-16 bg-white dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary-500">Ubicación y Contacto</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-xl shadow-lg">
            <h3 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contáctanos</h3>
            <form @submit.prevent="handleContact" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  v-model="contactForm.name"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:border-primary-500"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  v-model="contactForm.email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:border-primary-500"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                <textarea 
                  v-model="contactForm.message"
                  rows="4"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:border-primary-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div class="h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6893831874123!2d-76.52830182473946!3d3.4239999519692247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f3f71b1bed%3A0x4b4b5faf40f2b794!2sCra.%2019%20%234a-20%2C%20Los%20Libertadores%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1710897045099!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contactForm = ref({
  name: '',
  email: '',
  message: ''
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