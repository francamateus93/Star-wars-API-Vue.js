
<template>

<header class="lg:px-16 px-4 bg-transparent flex flex-wrap items-center py-4">
    <div class="flex-1 flex justify-between items-center">
      <RouterLink to="/" class="font-bold text-2xl"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="StarWars logo" width="140" ></RouterLink>
    </div>

    <RouterLink to="/">
      <svg class="fill-current text-yellow-500 pointer-cursor lg:hidden block px-3 w-16"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
      <input class="hidden" type="checkbox" id="menu-toggle" />
    </RouterLink>

    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-yellow-500 pt-4 lg:pt-0">
        <RouterLink to="/" class="font-bold text-2xl px-3 uppercase">H o m e</RouterLink>
        </ul>
      </nav>
    </div>
</header>

</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style>
</style>