<template>
  <footer class="bg-neutral-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo y descripción -->
        <div>
          <h3 class="text-xl font-bold mb-4">Hotel Isabel</h3>
          <p class="text-gray-400 mb-4">Tu hogar lejos de casa en el corazón de Cali.</p>
          <div class="flex space-x-4">
            <a href="https://linktr.ee/apartasuitesisabel" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <i class="fas fa-link w-6 h-6"></i>
            </a>
            <a href="https://wa.me/573015409480" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-whatsapp w-6 h-6"></i>
            </a>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3 class="text-xl font-bold mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li><a href="#inicio" class="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#habitaciones" class="text-gray-400 hover:text-white transition-colors">Habitaciones</a></li>
            <li><a href="#servicios" class="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#contacto" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        <!-- Botón de reserva -->
        <div class="flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">¿Listo para reservar?</h3>
            <p class="text-gray-400 mb-4">Haz tu reserva ahora y disfruta de una estancia inolvidable.</p>
          </div>
          <a 
            href="https://wa.me/573015409480?text=Hola,%20me%20gustaría%20hacer%20una%20reserva"
            target="_blank"
            class="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors text-center font-medium"
          >
            Reservar Ahora
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-gray-400 border-t border-neutral-800 mt-8 pt-8">
        <p>&copy; {{ new Date().getFullYear() }} Hotel Isabel. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script> 