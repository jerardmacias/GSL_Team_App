<template>
  <section class="bg-gradient relative flex items-center justify-center flex-col pt-14" role="region"
    aria-labelledby="main-logo-heading">
    <div class="image-container relative flex items-center justify-center w-[300px] h-[300px] m-12">
      <img src="../assets/circle-neon.png" alt="Image Logo Circle GSL _ Game App"
        class="image-a absolute w-full h-full z-20" />
      <img src="../assets/logo_gsl.png" alt="Image Logo GSL _ Game App" class="image-b absolute w-[60%] h-[20%] z-10" />
    </div>
    <h1 id="main-logo-heading" class="hidden">Project: GSL _ Game App</h1>
    <p class="mx-10 md:w-[45%] text-center leading-10 text-color-first text-lg md:text-2xl">
      Aplicación web enfocada en videojuegos, utilizando Vue.js y Tailwind CSS, que se integra con un backend a través
      de una API.
    </p>

    <!-- Game Section -->
    <section
      class="text-color-first grid grid-cols-1 md:grid-cols-3 gap-6 relative top-[150px] mx-[5%] md:mx-[20%] mt-15"
      aria-labelledby="game-section-heading">
      <h2 id="game-section-heading" class="sr-only">Game Section</h2>
      <div v-for="(game, index) in limitedGames" :key="index"
        class="w-full md:w-[250px] flex flex-col justify-self-center rounded-2xl" role="article"
        aria-labelledby="game-title-{{ game.id }}">
        <div v-show="game"
          class="rounded-[18px] p-8 md:p-0 order border-solid border-color-secondary bg-color-secondary group overflow-hidden">
          <router-link :to="`/game?id=${game.id}`">
            <img class="rounded-xl md:rounded-t-2xl my-6 md:my-0 m-auto md:m-0" :src="game.thumbnail" :alt="game.title" />
          </router-link>
          <h2 id="game-title-{{ game.id }}" class="text-xl md:text-2xl font-bold mx-2 py-6 md:py-2">{{ game.title }}</h2>
          <p class="text-xs md:text-sm mt-[-6px] mb-3 mx-2">{{ game.genre }}</p>
          <p class="text-sm mx-2 mb-5">{{ game.short_description }}</p>
        </div>
      </div>
    </section>
  </section>
  <section class="h-[10em] w-full bg-color-thirty"></section>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
export default {
  name: "Header",
  data() {
    return {
      limit: 3, // Número máximo de juegos a mostrar
    };
  },
  computed: {
    // Computed que filtra y devuelve los primeros N juegos
    limitedGames() {
      const gameStore = useApiStore();
      return gameStore.orderby?.slice(0, this.limit) || []; // Maneja el caso donde orderby no está definido
    },
  },
};
</script>

<style>
@keyframes spinY {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.image-a {
  animation: spinY 4s linear infinite;
}
</style>
