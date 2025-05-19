<template>
  <main class="relative min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[500px]">
      <div class="absolute inset-0">
        <NuxtImg src="/imagenes/Cafeteria/panaderia.webp" 
               alt="Isabel Café y Pastel" 
               class="w-full h-full object-cover"
               format="webp,avif"
               loading="lazy" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      <div class="relative h-full flex flex-col justify-center items-center px-4">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-white">
          {{ t('services.title') }}
        </h1>
      </div>
    </section>

    <!-- Sección Cafetería -->
    <section class="relative py-16 px-4">
      <div class="absolute inset-0">
        <NuxtImg src="/imagenes/Cafeteria/fondo.webp" 
               alt="Fondo Cafetería" 
               class="w-full h-full object-cover"
               format="webp,avif"
               loading="lazy" />
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <!-- Contenedor principal con efecto glassmorphism -->
        <div class="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {{ t('services.cafe.title') }}
            </h2>
            <p class="text-lg text-white/90 max-w-3xl mx-auto">
              {{ t('services.cafe.description') }}
            </p>
          </div>

          <!-- Galería de imágenes en grid con hover effects -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 bg-black/20 backdrop-blur-sm">
              <NuxtImg src="/imagenes/Cafeteria/1.webp" 
                     alt="Café y Pastel" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 bg-black/20 backdrop-blur-sm">
              <NuxtImg src="/imagenes/Cafeteria/2.webp" 
                     alt="Café y Pastel" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 bg-black/20 backdrop-blur-sm">
              <NuxtImg src="/imagenes/Cafeteria/3.webp" 
                     alt="Café y Pastel" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 bg-black/20 backdrop-blur-sm">
              <NuxtImg src="/imagenes/Cafeteria/4.webp" 
                     alt="Café y Pastel" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 bg-black/20 backdrop-blur-sm">
              <NuxtImg src="/imagenes/Cafeteria/5.webp" 
                     alt="Café y Pastel" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 bg-black/20 backdrop-blur-sm">
              <NuxtImg src="/imagenes/Cafeteria/6.webp" 
                     alt="Café y Pastel" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Características en cards con glassmorphism -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 text-center">
              <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-terracota-500/20">
                <i class="fas fa-coffee text-2xl text-terracota-500"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-white">{{ t('services.cafe.specialCoffee') }}</h3>
              <p class="text-white/80">{{ t('services.cafe.coffeeDesc') }}</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 text-center">
              <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-terracota-500/20">
                <i class="fas fa-birthday-cake text-2xl text-terracota-500"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-white">{{ t('services.cafe.bakery') }}</h3>
              <p class="text-white/80">{{ t('services.cafe.bakeryDesc') }}</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 text-center">
              <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-terracota-500/20">
                <i class="fas fa-clock text-2xl text-terracota-500"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-white">{{ t('services.cafe.schedule') }}</h3>
              <p class="text-white/80 whitespace-pre-line">{{ t('services.cafe.scheduleHours') }}</p>
            </div>
          </div>

          <!-- Botón de Instagram con nuevo estilo -->
          <div class="text-center">
            <a 
              href="https://www.instagram.com/isabelcafeypastel/" 
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <i class="fab fa-instagram text-2xl"></i>
              <span class="text-lg font-medium">{{ t('services.cafe.followUs') }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Otros Servicios -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12">
          {{ t('services.otherServices.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Lavandería -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div class="relative h-64">
              <NuxtImg src="/imagenes/lavanderia.webp" 
                     alt="Lavandería" 
                     class="w-full h-full object-cover"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">{{ t('services.otherServices.laundry.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.laundry.service1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.laundry.service2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.laundry.service3') }}
                </li>
              </ul>
              <a href="#" class="mt-4 inline-block text-terracota-500 hover:text-terracota-600 font-medium">
                {{ t('services.otherServices.checkAvailability') }} →
              </a>
            </div>
          </div>

          <!-- Parqueadero -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div class="relative h-64">
              <NuxtImg src="/imagenes/parqueadero.webp" 
                     alt="Parqueadero de motos" 
                     class="w-full h-full object-cover"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">{{ t('services.otherServices.parking.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.parking.service1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.parking.service2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.parking.service3') }}
                </li>
              </ul>
              <a href="#" class="mt-4 inline-block text-terracota-500 hover:text-terracota-600 font-medium">
                {{ t('services.otherServices.checkAvailability') }} →
              </a>
            </div>
          </div>

          <!-- Transporte -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div class="relative h-64">
              <NuxtImg src="/imagenes/transporte.webp" 
                     alt="Transporte" 
                     class="w-full h-full object-cover"
                     format="webp,avif"
                     loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">{{ t('services.otherServices.transport.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.transport.service1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.transport.service2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <i class="fas fa-check text-terracota-500 mr-2"></i>
                  {{ t('services.otherServices.transport.service3') }}
                </li>
              </ul>
              <a href="#" class="mt-4 inline-block text-terracota-500 hover:text-terracota-600 font-medium">
                {{ t('services.otherServices.checkAvailability') }} →
              </a>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center">
          <a 
            href="https://wa.me/573015409480?text=Hola,%20me%20gustaría%20información%20sobre%20los%20servicios"
            target="_blank"
            class="inline-flex items-center gap-2 bg-terracota-500 text-white px-8 py-3 rounded-lg hover:bg-terracota-600 transition-colors text-lg font-medium"
          >
            <i class="fab fa-whatsapp"></i>
            <span>{{ t('services.otherServices.checkAvailability') }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import Footer from '~/components/Footer.vue'

const { t } = useLanguage()
</script> 