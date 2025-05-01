<template>
  <div>
    <!-- Hero Section con Parallax -->
    <section id="inicio" class="relative h-screen overflow-hidden">
      <div class="absolute inset-0 transform scale-110" :style="{ transform: `translateY(${scrollY * 0.5}px) scale(1.1)` }">
        <img src="/images/624117161.jpg" alt="Hotel Isabel" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
      </div>
      <div class="relative h-full flex items-center justify-center text-center text-white">
        <div class="max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 class="text-6xl font-bold mb-6 animate-slide-up">Bienvenidos a Hotel Isabel</h1>
          <p class="text-xl mb-8 animate-slide-up-delay">Descubre el lujo y el confort en el corazón de la ciudad</p>
          <a href="#habitaciones" class="bg-primary-50 text-primary-800 px-8 py-3 rounded-full hover:bg-primary-100 transition-all duration-300 hover:scale-105 animate-slide-up-delay-2">
            Ver Habitaciones
          </a>
        </div>
      </div>
    </section>

    <!-- Servicios Section con Hover Effects -->
    <section id="servicios" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Disfruta de una experiencia única con nuestras comodidades premium</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
              <i class="fas fa-home text-2xl text-primary-600"></i>
            </div>
            <h3 class="font-semibold mb-2 text-center">Apartamentos</h3>
            <p class="text-gray-600 text-center">Espaciosos y completamente equipados</p>
          </div>
          <div class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
              <i class="fas fa-wifi text-2xl text-primary-600"></i>
            </div>
            <h3 class="font-semibold mb-2 text-center">WiFi Gratis</h3>
            <p class="text-gray-600 text-center">Conexión de alta velocidad</p>
          </div>
          <div class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
              <i class="fas fa-shower text-2xl text-primary-600"></i>
            </div>
            <h3 class="font-semibold mb-2 text-center">Baño Privado</h3>
            <p class="text-gray-600 text-center">Comodidad y privacidad</p>
          </div>
          <div class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
              <i class="fas fa-tv text-2xl text-primary-600"></i>
            </div>
            <h3 class="font-semibold mb-2 text-center">TV de Pantalla Plana</h3>
            <p class="text-gray-600 text-center">Entretenimiento de calidad</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Habitaciones Section con Carrusel -->
    <section id="habitaciones" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">Nuestras Habitaciones</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Encuentra el espacio perfecto para tu estadía</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Habitación Familiar -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <ImageCarousel :images="[
              '/images/Familiar confort/595884928.jpg',
              '/images/Familiar confort/595884937.jpg',
              '/images/Familiar confort/595884915.jpg'
            ]" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Habitación Familiar Confort</h3>
              <p class="text-gray-600 mb-4">Perfecta para familias, espaciosa y acogedora</p>
              <div class="space-y-2">
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-users w-6"></i>
                  <span>Hasta 4 personas</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-bed w-6"></i>
                  <span>2 camas dobles</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-bath w-6"></i>
                  <span>Baño privado</span>
                </div>
              </div>
              <button class="w-full mt-6 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 hover:scale-105">
                Reservar Ahora
              </button>
            </div>
          </div>

          <!-- Habitación Gran Familiar -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <ImageCarousel :images="[
              '/images/595884921.jpg',
              '/images/595884957.jpg',
              '/images/595884964.jpg'
            ]" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Suite Gran Familiar</h3>
              <p class="text-gray-600 mb-4">Amplia suite con todas las comodidades</p>
              <div class="space-y-2">
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-users w-6"></i>
                  <span>Hasta 6 personas</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-bed w-6"></i>
                  <span>3 camas dobles</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-couch w-6"></i>
                  <span>Sala de estar</span>
                </div>
              </div>
              <button class="w-full mt-6 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 hover:scale-105">
                Reservar Ahora
              </button>
            </div>
          </div>

          <!-- Habitación Clásica Doble -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <ImageCarousel :images="[
              '/images/596949494.jpg',
              '/images/596950341.jpg',
              '/images/597981232.jpg'
            ]" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Habitación Clásica Doble</h3>
              <p class="text-gray-600 mb-4">Confortable y elegante para dos personas</p>
              <div class="space-y-2">
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-user-friends w-6"></i>
                  <span>2 personas</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-bed w-6"></i>
                  <span>1 cama doble</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <i class="fas fa-tv w-6"></i>
                  <span>TV de pantalla plana</span>
                </div>
              </div>
              <button class="w-full mt-6 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 hover:scale-105">
                Reservar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ubicación Section con animación -->
    <section id="ubicacion" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">Nuestra Ubicación</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Ubicados estratégicamente para tu comodidad</p>
        <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8561218552635!2d-74.07215468523784!3d4.598905496654647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7eccfe58f%3A0x2e780dd5c9b5c2eb!2sHotel%20Isabel!5e0!3m2!1ses!2sco!4v1647887642834!5m2!1ses!2sco"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Contacto Section con animaciones -->
    <section id="contacto" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">Contáctanos</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
        <div class="max-w-2xl mx-auto">
          <form class="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div class="group">
              <label class="block text-gray-700 mb-2" for="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div class="group">
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div class="group">
              <label class="block text-gray-700 mb-2" for="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                rows="4"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer con hover effects -->
    <footer class="bg-primary-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-bold mb-4 text-primary-100">Hotel Isabel</h3>
            <p class="text-primary-200">Tu hogar lejos de casa</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-4 text-primary-100">Contacto</h3>
            <p class="text-primary-300 hover:text-white transition-colors duration-300">
              <i class="fas fa-phone mr-2"></i>+57 123 456 7890
            </p>
            <p class="text-primary-300 hover:text-white transition-colors duration-300">
              <i class="fas fa-envelope mr-2"></i>info@hotelisabel.com
            </p>
          </div>
          <div class="text-center md:text-right">
            <h3 class="text-xl font-bold mb-4 text-primary-100">Síguenos</h3>
            <div class="flex justify-center md:justify-end space-x-4">
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

.animate-slide-up-delay {
  animation: slideUp 1s ease-out 0.3s both;
}

.animate-slide-up-delay-2 {
  animation: slideUp 1s ease-out 0.6s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 