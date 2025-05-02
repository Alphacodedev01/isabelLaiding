<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300 font-sans">
    <header class="fixed w-full top-0 z-50">
      <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-md">
        <nav class="container mx-auto px-6 h-20 flex justify-between items-center">
          <div class="flex items-center h-16">
            <img src="/logo.png" alt="Hotel Isabel" class="h-full w-auto">
          </div>
          <div class="flex space-x-8">
            <a href="#inicio" 
               class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Inicio
            </a>
            <a href="#habitaciones" 
               class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Habitaciones
            </a>
            <a href="#servicios" 
               class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Servicios
            </a>
            <a href="#contacto" 
               class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm uppercase tracking-wider font-medium">
              Ubicación y Contacto
            </a>
          </div>
        </nav>
      </div>
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
