<template>
  <footer class="bg-gradient text-white py-6 border-t-2 custom-shadow" role="contentinfo" aria-labelledby="footer-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Columna 1 -->
        <div>
          <h3 id="footer-heading" class="text-[32px] text-[#bc168d] neonText3 font-semibold mb-2 md:mb-4 tracking-wider">GSL <span class="neonText2">developers</span></h3>
          <div class="space-y-1 md:space-y-4 text-md">
            <p>. Gerard Macias</p>
            <p>. Sebastien Léger</p>
            <p>. Lenin Ruiz</p>
          </div>
        </div>

        <!-- Columna 2 -->
        <div>
          <h3 class="text-[32px] font-semibold mb-2 md:mb-4 neonText2 tracking-wider" aria-label="Follow Us">Siguenos</h3>
          <div class="space-y-2 text-md flex gap-8">
            <img src="../assets/github-icon.svg" alt="GitHub Icon" class="w-[48px] h-[52px]" />
            <img src="../assets/linkedin-icon.svg" alt="LinkedIn Icon" class="w-[48px] h-[38px]">
            <img src="../assets/instagram-logo.svg" alt="Instagram Icon" class="w-[35px] h-[37px]">
          </div>
        </div>

        <!-- Columna 3 -->
        <div>
          <h3 class="text-[32px] font-semibold mb-2 md:mb-4 neonText2 tracking-wider">Contáctanos</h3>
          <div class="space-y-1 md:space-y-4 text-md">
            <p><b class="neonText">Dirección: </b><span>Carrer d'en Grassot, 101, Barcelona</span></p>
            <p><b class="neonText">Teléfono: </b><span>648 49 15 91</span></p>
            <p><b class="neonText">Email: </b><span>gsldevelopers@gameapp.com</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- columna final -->
    <div class="neonText mt-6 md:mt-12 md:mb-3 text-center text-white text-md">
      <p>Project from: GSL developers CODEOP - FEPT07 - 2024</p>
    </div>
  </footer>
</template>

<script>


export default {
  name: "FooterSection",
};
</script>

<style scoped></style>
