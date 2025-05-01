<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300 font-sans">
    <header class="fixed w-full top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-primary-500 font-display">Isabel Hotel</h1>
        <div class="space-x-6">
          <a href="#inicio" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Inicio</a>
          <a href="#habitaciones" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Habitaciones</a>
          <a href="#servicios" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Servicios</a>
          <a href="#ubicacion" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Ubicación</a>
          <a href="#contacto" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contacto</a>
        </div>
      </nav>
    </header>

    <!-- Barra de reservas flotante -->
    <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div class="bg-primary-500 text-white px-6 py-4 rounded-full shadow-lg flex items-center space-x-4">
        <span class="font-semibold">¿Listo para reservar?</span>
        <button class="bg-white text-primary-500 px-4 py-2 rounded-full hover:bg-primary-50 transition-colors">
          Reservar Ahora
        </button>
      </div>
    </div>

    <NuxtPage />
  </div>
</template>
