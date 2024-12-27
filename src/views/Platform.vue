<template>
  <div v-if="loading">
    <Spinner />
  </div>
  <div v-else>
    <section class="bg-color-thirty" role="region" aria-labelledby="platform-page-heading">
      <Navbar />
      <Carrusel :platform="associatedRelation" />
      <GameList :platform="associatedRelation" />
      <CategoryList :isCategory="false" />
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
  name: "Platform",
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
      loading: true
    }
  },
  computed: {
    ...mapStores(useApiStore),

    platform() {
      return this.$route.params.platform;
    },
    associatedRelation() {
      return this.getRelation(this.platform);
    },
    filteredGames() {
      const relatedPlatforms = this.associatedRelation.split(", ");
      return (
        this.apiStore?.games?.filter((game) =>
          relatedPlatforms.includes(game.platform)
        ) || []
      );
    },
  },
  methods: {
    getRelation(platform) {
      const associations = {
        "pc-windows": "PC (Windows)",
        "web-browser": "Web Browser",
        "pc-windows-web-browser": "PC (Windows), Web Browser",
      };

      return associations[platform] || platform;
    },
    async fetchGamesByPlatform() {
      if (!this.apiStore) {
        console.error("El store no está inicializado.");
        return;
      }

      if (!this.apiStore.games.length) {
        try {
          await this.apiStore.fetchGames("games");
        } catch (error) {
          console.error("Error al obtener los juegos:", error);
        }
      }
    },
  },
  mounted() {
    this.fetchGamesByPlatform();
    setTimeout(() => { 
      this.loading = false;
    }, 500);
  },
  watch: {
    "$route.params.platform": {
      immediate: true,
      handler() {
        this.fetchGamesByPlatform();
      },
    },
  },
};
</script>

<style></style>
