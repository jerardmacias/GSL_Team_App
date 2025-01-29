<template>
  <section class="text-center pb-4 pt-24 bg-color-thirty text-slate-100" role="region" aria-labelledby="game-database-heading">
    <h1 id="game-database-heading" class="text-2xl font-bold mb-4">
      La base de datos más grande de juegos
    </h1>
    <p class="text-gray-300 max-w-4xl mx-auto mb-8">
      Explora una amplia colección de títulos con información detallada sobre descripciones, especificaciones y características clave. Diseñada para ofrecerte una experiencia intuitiva y confiable, nuestra plataforma reúne lo mejor del mundo gamer en un solo lugar.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <!-- Juegos -->
      <div class="flex flex-col items-center shadow-md rounded-lg p-6" role="article" aria-labelledby="total-games">
        <div class="text-4xl text-gray-700 mb-2" role="img" aria-label="Video game controller emoji">🎮</div>
        <p id="total-games" class="text-xl font-bold text-gray-100">{{ totalGames }}</p>
        <p class="text-gray-400">juegos</p>
      </div>
      <!-- Categorías -->
      <div class="flex flex-col items-center shadow-md rounded-lg p-6" role="article" aria-labelledby="total-categories">
        <div class="text-4xl text-gray-700 mb-2" role="img" aria-label="Folder emoji">📂</div>
        <p id="total-categories" class="text-xl font-bold text-gray-100">{{ totalCategories }}</p>
        <p class="text-gray-400">categorías</p>
      </div>
      <!-- Plataformas -->
      <div class="flex flex-col items-center shadow-md rounded-lg p-6" role="article" aria-labelledby="total-platforms">
        <div class="text-4xl text-gray-700 mb-2" role="img" aria-label="Computer emoji">🖥️</div>
        <p id="total-platforms" class="text-xl font-bold text-gray-100">{{ totalPlatforms }}</p>
        <p class="text-gray-400">plataformas</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import { mapStores } from "pinia";

export default {
  name: "GameDatabaseOverview",
  computed: {
    ...mapStores(useApiStore),
    totalGames() {
      return this.apiStore.games.length; // Número total de juegos
    },
    totalCategories() {
      const uniqueCategories = new Set(
        this.apiStore.games.map((game) => game.genre)
      );
      return uniqueCategories.size; // Número de categorías únicas
    },
    totalPlatforms() {
      const uniquePlatforms = new Set(
        this.apiStore.games.map((game) => game.platform)
      );
      return uniquePlatforms.size; // Número de plataformas únicas
    },
  },
  async mounted() {
    try {
      // Carga los juegos si aún no están disponibles
      if (!this.apiStore.games.length) {
        await this.apiStore.fetchGames("games");
      }
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  },
};
</script>

<style scoped></style>
