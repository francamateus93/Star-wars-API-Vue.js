<template>
  <div>
    <Navbar />

    <RouterView />

  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue';


export default {
  name: "App",
  components: {Navbar},
  data() {
  },
};
</script>
