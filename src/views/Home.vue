<template>
  <div class="bg-color-thirty" role="region" aria-labelledby="home-page-heading">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
      <Navbar />
      <Header />
      <GameAppCard />
      <GameDatabaseOverview />
      <CategoryList :isCategory="true" />
      <FooterSection />
    </div>

  </div>

</template>

<script>
import Spinner from "../components/Spinner.vue";
import Carrusel from "../components/Carrusel.vue";
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import GameAppCard from "../components/GameAppCard.vue";
import GameDatabaseOverview from "../components/GameDatabaseOverview.vue";
import CategoryList from "../components/CategoryList.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Spinner,
    Navbar,
    Carrusel,
    Header,
    GameAppCard,
    GameDatabaseOverview,
    CategoryList,
    FooterSection,
  },
  mounted() {
    // Simuler un délai de chargement avec setTimeout ou attendre que les données soient récupérées
    // Par exemple, si tu fais une requête API, tu attendras que celle-ci soit terminée

    setTimeout(() => {
      this.loading = false;
    }, 700);
  },
};
</script>

<style scoped></style>
