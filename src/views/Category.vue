<template>
  <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
  <section class="bg-color-thirty " role="region" aria-labelledby="category-page-heading">
    <Navbar />
    <Carrusel :category="associatedRelation" />
    <GameList :category="associatedRelation" />
    <CategoryList :isCategory="true" />
    <FooterSection />
  </section>
  </div>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import { mapStores } from "pinia";
import Navbar from "../components/Navbar.vue";
import Carrusel from "../components/Carrusel.vue";
import GameList from "../components/GameList.vue";
import CategoryList from "../components/CategoryList.vue";
import FooterSection from "../components/FooterSection.vue";
import Spinner from "../components/Spinner.vue";


export default {
  name: "Category",
  components: {
    Navbar,
    Carrusel,
    GameList,
    CategoryList,
    FooterSection,
    Spinner
  },
  data() {
    return {
      filteredGames: [], // Almacenará los juegos filtrados
      loading: true
    };
  },
  computed: {
    ...mapStores({
      apiStore: useApiStore, // Mapear el store con mapStores
    }),
    category() {
      return this.$route.params.category; // Categoría actual de la URL
    },
    associatedRelation() {
      return this.getRelation(this.category); // Obtener la asociación
    },
  },
  methods: {
    /**
     * Devuelve la relación asociada a una categoría.
     * @param {string} category - La categoría en formato URL.
     * @returns {string} La relación asociada.
     */
    getRelation(category) {
      const associations = {
        mmorpg: "MMORPG",
        shooter: "Shooter",
        strategy: "Strategy",
        "action-rpg": "Action RPG",
        "battle-royale": "Battle Royale",
        arpg: "ARPG",
        mmoarpg: "MMOARPG",
        fighting: "Fighting",
        moba: "MOBA",
        "card-game": "Card Game",
        "action-game": "Action Game",
        action: "Action",
        sports: "Sports",
        mmo: "MMO",
        racing: "Racing",
        social: "Social",
        "-mmorpg": "MMORPG",
        fantasy: "Fantasy",
      };
      return associations[category] || category; // Devolver la relación o la categoría original
    },
    /**
     * Filtra los juegos asociados a la categoría actual.
     */
     async fetchGamesByCategory() {
      // Check if apiStore is ready before accessing its methods
      if (!this.apiStore || !this.apiStore.fetchGames) {
        return;
      }
      await this.apiStore.fetchGames("games");
      this.filteredGames = this.apiStore.games.filter(
        (game) => game.genre.toLowerCase() === this.associatedRelation.toLowerCase()
      );
    },
  },
  mounted() {
    this.fetchGamesByCategory(); // Filtrar los juegos al montar el componente
    setTimeout(() => { // Tiempo Spinner
      this.loading = false;
    }, 500);
  },
  watch: {
    /**
    * Observa los cambios en la categoría de la ruta.
    * Cuando cambia, vuelve a cargar los juegos filtrados.
    */
    "$route.params.category": {
      immediate: true, // Ejecuta inmediatamente al montar el componente
      handler() {
        this.fetchGamesByCategory();
      },
    },
  },
};
</script>
<style></style>