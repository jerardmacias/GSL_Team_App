<template>
  <div class="flex justify-center items-center h-screen w-screen" role="region" aria-label="Loading Spinner for GSL Game App">
    <div class="image-container relative flex items-center justify-center w-[300px] h-[300px] animate-grow-shrink">
      <img src="../assets/circle-neon.png" alt="Image Spinner GSL _ Game App"
        class="image-circle absolute w-[60%] h-[60%] z-20" />
      <img src="../assets/logo_gsl.png" alt="Image SpinnerB GSL _ Game App" 
        class=" absolute w-[30%] h-[12%] z-10" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style>

@keyframes spinZ {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

 .image-circle {
  animation: spinZ 1s linear infinite;
}

  @keyframes growShrink {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
  }

  .animate-grow-shrink {
    animation: growShrink 1s ease-in-out infinite;
  }
</style>
