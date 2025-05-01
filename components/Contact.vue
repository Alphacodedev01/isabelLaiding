<template>
  <section id="contacto" class="py-16 bg-neutral-50 dark:bg-neutral-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-500">Contáctanos</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Formulario de contacto -->
        <div class="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre
              </label>
              <input
                id="nombre"
                v-model="formData.nombre"
                type="text"
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label for="mensaje" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                v-model="formData.mensaje"
                rows="4"
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <!-- Información de contacto y mapa -->
        <div class="space-y-8">
          <div class="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Información de Contacto</h3>
            <ul class="space-y-4">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <i class="fas fa-map-marker-alt w-5 h-5 text-primary-500 mr-3"></i>
                <a 
                  href="https://maps.google.com/?q=Cra. 19 #4a - 20, Los Libertadores, Cali, Valle del Cauca"
                  target="_blank"
                  class="hover:text-primary-500 transition-colors"
                >
                  Cra. 19 #4a - 20, Los Libertadores, Cali
                </a>
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <i class="fas fa-phone w-5 h-5 text-primary-500 mr-3"></i>
                <a 
                  href="tel:+573015409480"
                  class="hover:text-primary-500 transition-colors"
                >
                  +57 301 540 9480
                </a>
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <i class="fas fa-envelope w-5 h-5 text-primary-500 mr-3"></i>
                <a 
                  href="mailto:apartasuitesisabel@gmail.com"
                  class="hover:text-primary-500 transition-colors"
                >
                  apartasuitesisabel@gmail.com
                </a>
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <i class="fab fa-whatsapp w-5 h-5 text-primary-500 mr-3"></i>
                <a 
                  href="https://wa.me/573015409480"
                  target="_blank"
                  class="hover:text-primary-500 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <!-- Mapa -->
          <div class="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6893831874123!2d-76.52830182473946!3d3.4239999519692247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f3f71b1bed%3A0x4b4b5faf40f2b794!2sCra.%2019%20%234a-20%2C%20Los%20Libertadores%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1710897045099!5m2!1ses!2sco"
              width="100%"
              height="300"
              style="border:0;"
              :allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

const handleSubmit = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value)
  
  // Limpiar el formulario
  formData.value = {
    nombre: '',
    email: '',
    mensaje: ''
  }
}
</script> 