<template>
  <main>
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[500px]">
      <div class="absolute inset-0">
        <NuxtImg src="/Imagenes/I2.webp" alt="Habitaciones" class="w-full h-full object-cover" format="webp,avif" sizes="sm:600px md:1200px lg:1400px" priority />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative h-full flex flex-col justify-center items-center px-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-white">
          {{ t('rooms.hero.title') }}
        </h1>
        <p class="mt-4 text-lg text-center max-w-3xl mx-auto text-gray-200">
          {{ t('rooms.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Tipos de Habitaciones -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4">
        <!-- Gran Familiar -->
        <div class="max-w-7xl mx-auto mb-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div class="order-2 lg:order-1">
              <span class="text-terracota-400 text-sm uppercase tracking-wider font-medium">{{ t('rooms.label') }}</span>
              <h2 class="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
                {{ t('rooms.details.gran.title') }}
              </h2>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                {{ t('rooms.details.gran.description') }}
              </p>

              <div class="mt-8 space-y-4">
                <h3 class="font-medium text-gray-900 dark:text-white">{{ t('rooms.amenities.title') }}:</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-bed text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.suite.features[0]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-wifi text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.wifi') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-tv text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.tv') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-wind text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.ac') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-bath text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.suite.features[2]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-couch text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.suite.features[1]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-utensils text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.kitchen') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-motorcycle text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.parking') }}
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <a 
                  href="https://sys.hosroom.com/booking/259-apartasuite-isabel"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 bg-terracota-500 text-white rounded-lg hover:bg-terracota-600 transition-colors"
                >
                  <i class="fas fa-calendar-alt mr-2"></i>
                  {{ t('rooms.cta.bookNow') }}
                </a>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <RoomCarousel
                :images="[
                  '/Imagenes/Gran Familiar/1.webp',
                  '/Imagenes/Gran Familiar/2.webp',
                  '/Imagenes/Gran Familiar/3.webp',
                  '/Imagenes/Gran Familiar/4.webp',
                  '/Imagenes/Gran Familiar/5.webp',
                  '/Imagenes/Gran Familiar/6.webp'
                ]"
                room-name="Gran Familiar"
              />
            </div>
          </div>
        </div>

        <!-- Familiar Confort -->
        <div class="max-w-7xl mx-auto mb-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div class="order-2 lg:order-2">
              <span class="text-terracota-400 text-sm uppercase tracking-wider font-medium">{{ t('rooms.label') }}</span>
              <h2 class="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
                {{ t('rooms.details.confort.title') }}
              </h2>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                {{ t('rooms.details.confort.description') }}
              </p>

              <div class="mt-8 space-y-4">
                <h3 class="font-medium text-gray-900 dark:text-white">{{ t('rooms.amenities.title') }}:</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-bed text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.double.features[0]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-wifi text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.wifi') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-tv text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.tv') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-wind text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.ac') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-bath text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.double.features[2]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-couch text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.double.features[1]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-utensils text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.kitchen') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-motorcycle text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.parking') }}
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <a 
                  href="https://sys.hosroom.com/booking/259-apartasuite-isabel"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 bg-terracota-500 text-white rounded-lg hover:bg-terracota-600 transition-colors"
                >
                  <i class="fas fa-calendar-alt mr-2"></i>
                  {{ t('rooms.cta.bookNow') }}
                </a>
              </div>
            </div>

            <div class="order-1 lg:order-1">
              <RoomCarousel
                :images="[
                  '/Imagenes/Familiar Confort/1.webp',
                  '/Imagenes/Familiar Confort/2.webp',
                  '/Imagenes/Familiar Confort/3.webp',
                  '/Imagenes/Familiar Confort/4.webp',
                  '/Imagenes/Familiar Confort/5.webp'
                ]"
                room-name="Familiar Confort"
              />
            </div>
          </div>
        </div>

        <!-- Doble Clásico -->
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div class="order-2 lg:order-1">
              <span class="text-terracota-400 text-sm uppercase tracking-wider font-medium">{{ t('rooms.label') }}</span>
              <h2 class="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
                {{ t('rooms.details.clasico.title') }}
              </h2>
              <p class="mt-4 text-gray-600 dark:text-gray-300">
                {{ t('rooms.details.clasico.description') }}
              </p>

              <div class="mt-8 space-y-4">
                <h3 class="font-medium text-gray-900 dark:text-white">{{ t('rooms.amenities.title') }}:</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-bed text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.double.features[0]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-wifi text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.wifi') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-tv text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.tv') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-wind text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.ac') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-bath text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.double.features[2]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-couch text-terracota-400 mr-2"></i>
                    {{ t('rooms.types.double.features[1]') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-utensils text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.kitchen') }}
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <i class="fas fa-motorcycle text-terracota-400 mr-2"></i>
                    {{ t('rooms.amenities.parking') }}
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <a 
                  href="https://sys.hosroom.com/booking/259-apartasuite-isabel"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 bg-terracota-500 text-white rounded-lg hover:bg-terracota-600 transition-colors"
                >
                  <i class="fas fa-calendar-alt mr-2"></i>
                  {{ t('rooms.cta.bookNow') }}
                </a>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <RoomCarousel
                :images="[
                  '/Imagenes/Doble Clasico/1.webp',
                  '/Imagenes/Doble Clasico/2.webp',
                  '/Imagenes/Doble Clasico/3.webp',
                  '/Imagenes/Doble Clasico/4.webp',
                  '/Imagenes/Doble Clasico/5.webp'
                ]"
                room-name="Doble Clásico"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Políticas de Check-in/Check-out -->
    <section class="relative py-16">
      <!-- Imagen de fondo con overlay -->
      <div class="absolute inset-0">
        <NuxtImg src="/Imagenes/I8.webp" alt="Fondo políticas" class="w-full h-full object-cover" format="webp,avif" loading="lazy" decoding="async" />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-white">
            {{ t('rooms.policy.title') }}
          </h2>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div class="text-terracota-400 text-2xl mb-4">
                <i class="fas fa-door-open"></i>
              </div>
              <h3 class="text-xl font-medium text-white mb-2">{{ t('rooms.policy.checkin.title') }}</h3>
              <p class="text-gray-200">
                {{ t('rooms.policy.checkin.time') }}<br>
                {{ t('rooms.policy.checkin.req') }}
              </p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div class="text-terracota-400 text-2xl mb-4">
                <i class="fas fa-door-closed"></i>
              </div>
              <h3 class="text-xl font-medium text-white mb-2">{{ t('rooms.policy.checkout.title') }}</h3>
              <p class="text-gray-200">
                {{ t('rooms.policy.checkout.time') }}<br>
                {{ t('rooms.policy.checkout.req') }}
              </p>
            </div>
          </div>
          <div class="mt-8 text-gray-300">
            <p class="text-sm">
              {{ t('rooms.policy.note') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import Footer from '~/components/Footer.vue'
import RoomCarousel from '~/components/RoomCarousel.vue'

const { t } = useLanguage()
</script> 