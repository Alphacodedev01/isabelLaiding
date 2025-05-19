<template>
  <footer class="bg-neutral-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Enlaces principales -->
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ t('footer.quickLinks') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:text-terracota-400 transition-colors">
                {{ t('footer.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/habitaciones" class="hover:text-terracota-400 transition-colors">
                {{ t('footer.rooms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="hover:text-terracota-400 transition-colors">
                {{ t('footer.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto" class="hover:text-terracota-400 transition-colors">
                {{ t('footer.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ t('contact.info.title') }}</h3>
          <div class="space-y-2">
            <p>+57 301 540 9480</p>
            <a href="mailto:Edificioisabel1920@gmail.com" class="hover:text-terracota-400 transition-colors">
              Edificioisabel1920@gmail.com
            </a>
          </div>
        </div>

        <!-- Redes Sociales -->
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ t('footer.followUs') }}</h3>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/share/1AeBjWGBRs/?mibextid=wwXIfr" 
               target="_blank" 
               class="text-2xl hover:text-terracota-400 transition-colors">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/apartasuitesisabel/" 
               target="_blank" 
               class="text-2xl hover:text-terracota-400 transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=3015409480" 
               target="_blank" 
               class="text-2xl hover:text-terracota-400 transition-colors">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Hotel Isabel. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
</script> 