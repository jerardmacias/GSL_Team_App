<template>
  <RouterView />
</template>

<script>
import {mapStores} from "pinia";
import {useApiStore} from "./stores/apiStore.js";

export default {
  name: "App",
  data() {
    return {

    };
  },
  methods:{

  },
  computed:{
    ...mapStores(useApiStore) 
  },
  mounted(){

  }
};
</script>
