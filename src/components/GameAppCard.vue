<template>
    <section class="bg-color-thirty mt-32" role="region" aria-labelledby="game-app-heading">
        <div
            class="grid sm:grid-cols-1 md:grid-cols-2 border-solid border-4 rounded-lg custom-shadow my-12 mx-auto max-w-[95%] md:max-w-[800px] lg:max-w-[1000px] p-4 items-center gap-6 text-white">
            <!-- Columna izquierda -->
            <div class="text-center md:text-left px-4">
                <h1 id="game-app-heading"
                    class="font-jaro font-bold text-shadow text-center md:text-left text-[40px] lg:text-[60px] pt-2">
                    Game App
                </h1>
                <p class="font-urbanist text-justify pt-4 text-sm md:text-base">
                    En esta App, los usuarios podrán explorar una amplia selección de videojuegos con información
                    detallada, incluyendo descripciones, especificaciones y características clave. Antes de comenzar el
                    desarrollo, elaboramos prototipos y diagramas de flujo para garantizar una experiencia de usuario
                    intuitiva y sólida.
                </p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-6 pb-6">
                    <router-link to="/team-dev">
                        <button class="font-jaro border-2 border-[#5271ff] px-4 py-2 rounded hover:bg-[#ff00ff]"
                            aria-label="Go to Team Dev">
                            Team Dev
                        </button>
                    </router-link>
                    <a href="https://github.com/FEPT07/GSL_Team_App" target="_blank">
                        <button class="font-jaro border-2 border-[#5271ff] px-4 py-2 rounded hover:bg-[#ff00ff]"
                            aria-label="Go to GitHub repository">
                            GitHub
                        </button>
                    </a>
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="flex justify-center items-center">
                <img src="../assets/logo.png" alt="Logo of the Game App"
                    class="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "GameAppCard",
};
</script>

<style scoped></style>
