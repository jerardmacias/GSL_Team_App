<template>
  <div class="bg-gradient flex flex-col justify-center items-center h-screen w-screen font-jaro" role="alert" aria-labelledby="error-heading">
    <h5 id="error-heading" class="text-4xl font-semibold neonText4 tracking-wide mb-12">error</h5>
    <h6 class="text-[10em] font-semibold neonText5 leading-[0.7] tracking-wide">404</h6>
    <p class="pt-8 text-color-first text-lg md:text-xl p-4 mt-6 text-center">This page is not found, try another or return to the home.</p>
    <router-link :to="'/'"
      class="mt-4 text-xl text-[#6CDAFB] border-2 border-color-fourth px-2 py-1 rounded hover:bg-color-fifth hover:scale-105 transition-all duration-500 hover:shadow-[0px_2px_45px_5px_rgba(108,218,251,1)]" aria-label="Go to Home">
      Home</router-link>
  </div>
</template>

<script>
import Spinner
 from '../components/Spinner.vue';

export default {
  name: "NotFound",
  data() {
    return {
    }
  }
}
</script>

<style>
h5 {
  animation: flicker 1.2s infinite alternate;
}

h6{
  animation: flicker 1.2s infinite alternate;
}

/* Flickering animation */
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #6CDAFB,
      0 0 80px #6CDAFB,
      0 0 90px #6CDAFB,
      0 0 100px #6CDAFB,
      0 0 150px #6CDAFB;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
  }
}
</style>