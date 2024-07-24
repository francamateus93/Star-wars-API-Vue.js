<template>
  <div class="flex items-center justify-center py-10">
  <div class="max-w-md mx-auto text-center text-yellow-500 bg-transparent shadowBox rounded-xl p-20 hover:shadow-[0px_0px_40px_8px_rgba(253,224,0,0.3)] hover:scale-105">
    <div class="text-9xl font-bold text-yellow-500 mb-4">404</div>
    <h1 class="text-4xl font-bold text-white mb-6">Oops! Page Not Found</h1>
    <p class="text-lg text-white mb-8">The page you're looking for seems to have gone on a little adventure. Don't
      worry, we'll help you find your way back home.</p>
      <RouterLink to="/" class="border-yellow-500 border text-sm bg-yellow-500 bg-opacity-10 font-semibold text-yellow-500 rounded-lg p-4 hover:text-black hover:bg-yellow-500">
      Go Back Home
      </RouterLink>
  </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {};
</script>
