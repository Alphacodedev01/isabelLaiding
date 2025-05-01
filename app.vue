<template>
  <div class="min-h-screen bg-white">
    <header class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Isabel Hotel</h1>
        <div class="space-x-6">
          <a href="#inicio" class="text-gray-600 hover:text-gray-900">Inicio</a>
          <a href="#habitaciones" class="text-gray-600 hover:text-gray-900">Habitaciones</a>
          <a href="#servicios" class="text-gray-600 hover:text-gray-900">Servicios</a>
          <a href="#ubicacion" class="text-gray-600 hover:text-gray-900">Ubicación</a>
          <a href="#contacto" class="text-gray-600 hover:text-gray-900">Contacto</a>
        </div>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
