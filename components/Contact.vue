<template>
  <section id="contacto" class="py-16 bg-neutral-50 dark:bg-neutral-800">
    <div class="container mx-auto px-4">
      <Transition
        enter-active-class="transition-all duration-2000 ease-out"
        enter-from-class="opacity-0 -translate-y-16"
        enter-to-class="opacity-1 translate-y-0"
      >
        <h2 v-if="isVisible" class="text-3xl font-bold text-center mb-12 text-primary-500">Contáctanos</h2>
      </Transition>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Formulario de contacto -->
        <Transition
          enter-active-class="transition-all duration-2000 delay-500 ease-out"
          enter-from-class="opacity-0 -translate-x-full"
          enter-to-class="opacity-1 translate-x-0"
        >
          <div v-if="isVisible" class="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-500">
          <form @submit.prevent="handleSubmit" class="space-y-6">
              <TransitionGroup
                enter-active-class="transition-all duration-1000"
                enter-from-class="opacity-0 -translate-y-8"
                enter-to-class="opacity-1 translate-y-0"
                move-class="transition-transform duration-500"
              >
                <div v-if="isVisible" key="nombre" style="transition-delay: 800ms;">
              <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre
              </label>
              <input
                id="nombre"
                v-model="formData.nombre"
                type="text"
                required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 transition-all duration-300 focus:scale-[1.02]"
              />
            </div>
            
                <div v-if="isVisible" key="email" style="transition-delay: 1000ms;">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 transition-all duration-300 focus:scale-[1.02]"
              />
            </div>
            
                <div v-if="isVisible" key="mensaje" style="transition-delay: 1200ms;">
              <label for="mensaje" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                v-model="formData.mensaje"
                rows="4"
                required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 transition-all duration-300 focus:scale-[1.02]"
              ></textarea>
            </div>
            
            <button
                  v-if="isVisible"
                  key="submit"
              type="submit"
                  class="w-full bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                  style="transition-delay: 1400ms;"
            >
              Enviar Mensaje
            </button>
              </TransitionGroup>
          </form>
        </div>
        </Transition>

        <!-- Información de contacto y mapa -->
        <div class="space-y-8">
          <Transition
            enter-active-class="transition-all duration-2000 delay-1000 ease-out"
            enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-1 translate-x-0"
          >
            <div v-if="isVisible" class="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-500">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Información de Contacto</h3>
              <TransitionGroup
                enter-active-class="transition-all duration-1000"
                enter-from-class="opacity-0 translate-x-8"
                enter-to-class="opacity-1 translate-x-0"
                move-class="transition-transform duration-500"
              >
                <ul v-if="isVisible" class="space-y-4">
                  <li v-for="(item, index) in contactItems" 
                      :key="item.icon"
                      class="flex items-center text-gray-600 dark:text-gray-300 transform hover:translate-x-2 transition-all duration-300"
                      :style="{ transitionDelay: `${1500 + (index * 200)}ms` }"
                  >
                    <i :class="[item.icon, 'w-5 h-5 text-primary-500 mr-3']"></i>
                <a 
                      :href="item.href"
                      :target="item.target"
                  class="hover:text-primary-500 transition-colors"
                >
                      {{ item.text }}
                </a>
              </li>
            </ul>
              </TransitionGroup>
          </div>
          </Transition>

          <!-- Mapa -->
          <Transition
            enter-active-class="transition-all duration-2000 delay-1500 ease-out"
            enter-from-class="opacity-0 translate-y-16 scale-95"
            enter-to-class="opacity-1 translate-y-0 scale-100"
          >
            <div v-if="isVisible" class="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-500">
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
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const formData = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

const isVisible = ref(false)

const contactItems = [
  {
    icon: 'fas fa-map-marker-alt',
    text: 'Cra. 19 #4a - 20, Los Libertadores, Cali',
    href: 'https://maps.google.com/?q=Cra. 19 #4a - 20, Los Libertadores, Cali, Valle del Cauca',
    target: '_blank'
  },
  {
    icon: 'fas fa-phone',
    text: '+57 301 540 9480',
    href: 'tel:+573015409480'
  },
  {
    icon: 'fas fa-envelope',
    text: 'Edificioisabel1920@gmail.com',
    href: 'mailto:Edificioisabel1920@gmail.com'
  },
  {
    icon: 'fab fa-whatsapp',
    text: 'WhatsApp',
    href: 'https://wa.me/573015409480',
    target: '_blank'
  }
]

const handleSubmit = () => {
  // Acción deshabilitada: aquí podrías mostrar un aviso o simplemente no hacer nada
  console.log('Envío deshabilitado: ', formData.value)
  // Opcionalmente limpiar
  formData.value = { nombre: '', email: '', mensaje: '' }
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

  const section = document.querySelector('#contacto')
  if (section) {
    observer.observe(section)
  }
})
</script> 