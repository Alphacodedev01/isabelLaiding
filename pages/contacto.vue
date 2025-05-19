<template>
  <main class="relative min-h-screen flex flex-col">
    <!-- Imagen de fondo -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0">
        <NuxtImg src="/Imagenes/I7.webp" 
               alt="Hotel Isabel" 
               class="w-full h-full object-cover"
               format="webp,avif"
               priority />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 flex-grow">
      <!-- Hero Section -->
      <section class="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 font-display">{{ t('contact.title') }}</h1>
          <p class="text-lg md:text-xl">{{ t('contact.subtitle') }}</p>
        </div>
      </section>

      <!-- Lugares de interés y Mapa -->
      <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Lugares de interés -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <h2 class="text-2xl font-bold mb-8">{{ t('contact.nearbyPlaces.title') }}</h2>
              <div class="space-y-4">
                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-cross text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.cristoRey') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-mountain text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.lomaCruz') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-music text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.topaTolondra') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-church text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.sanAntonio') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-monument text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.jairoVarela') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-cat text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.gatos') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-water text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.boulevard') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-store text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.alameda') }}</span>
                </div>

                <div class="flex items-center gap-3 text-white/80 hover:text-terracota-400 transition-colors group">
                  <i class="fas fa-tree text-terracota-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>{{ t('contact.nearbyPlaces.penon') }}</span>
                </div>
              </div>
            </div>

            <!-- Mapa -->
            <div class="relative">
              <div class="w-full max-w-xl mx-auto">
                <div class="relative w-full pb-[100%]">
                  <div class="absolute inset-0">
                    <div class="w-full h-full rounded-full overflow-hidden shadow-xl">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6893831874123!2d-76.52830182473946!3d3.4239999519692247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a787df4a3ee5%3A0x8c817635c6903bd!2sApartasuites%20Isabel!5e0!3m2!1ses!2sco!4v1710897045099!5m2!1ses!2sco"
                        style="border:0; width: 100%; height: 100%;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <div class="bg-white/10 backdrop-blur-sm px-12 py-4 rounded-full shadow-2xl flex items-center gap-4">
                  <i class="fas fa-map-marker-alt text-terracota-400 text-2xl"></i>
                  <span class="text-white font-medium whitespace-nowrap text-lg">
                    {{ t('contact.info.addressText') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Información de Contacto y Formulario -->
      <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Formulario de Contacto -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <h2 class="text-2xl font-bold mb-6">{{ t('contact.form.title') }}</h2>
              <form @submit.prevent="handleContact" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium mb-2">{{ t('contact.form.name') }}</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="contactForm.name"
                    class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracota-400"
                    :placeholder="t('contact.form.namePlaceholder')"
                    required
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-2">{{ t('contact.form.email') }}</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="contactForm.email"
                    class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracota-400"
                    :placeholder="t('contact.form.emailPlaceholder')"
                    required
                  >
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium mb-2">{{ t('contact.form.message') }}</label>
                  <textarea 
                    id="message" 
                    v-model="contactForm.message"
                    rows="4"
                    class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracota-400"
                    :placeholder="t('contact.form.messagePlaceholder')"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  class="w-full bg-terracota-500 text-white py-3 rounded-lg hover:bg-terracota-600 transition-colors"
                >
                  {{ t('contact.form.send') }}
                </button>
              </form>
            </div>

            <!-- Información de Contacto -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <h2 class="text-2xl font-bold mb-6">{{ t('contact.info.title') }}</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <i class="fas fa-map-marker-alt text-terracota-400 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('contact.info.address') }}</h3>
                    <p class="text-white/80">{{ t('contact.info.addressText') }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <i class="fas fa-phone text-terracota-400 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('contact.info.phone') }}</h3>
                    <a href="tel:+573015409480" class="text-white/80 hover:text-terracota-400 transition-colors">
                      301 540 9480
                    </a>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <i class="fas fa-envelope text-terracota-400 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-semibold mb-1">Email</h3>
                    <a href="mailto:Edificioisabel1920@gmail.com" class="text-white/80 hover:text-terracota-400 transition-colors">
                      Edificioisabel1920@gmail.com
                    </a>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <i class="fas fa-clock text-terracota-400 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('contact.info.schedule') }}</h3>
                    <p class="text-white/80">{{ t('contact.info.scheduleText') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <div class="relative z-10">
      <Footer />
    </div>

    <!-- Botón flotante de WhatsApp -->
    <a 
      href="https://api.whatsapp.com/send?phone=3015409480" 
      target="_blank"
      class="fixed bottom-8 right-8 z-50 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-transparent"
    >
      <i class="fab fa-whatsapp text-white text-4xl"></i>
    </a>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import Footer from '~/components/Footer.vue'

const { t } = useLanguage()

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