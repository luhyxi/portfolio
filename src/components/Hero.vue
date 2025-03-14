<template>
    <main
        class="flex flex-col items-center justify-around min-h-screen bg-[url(../assets/img/stacked-peaks-haikei.svg)] bg-cover bg-center h-screen">
        <div
            class="flex flex-col text-shadow shadow-gray-800 justify-around items-start text-slate-200 animate-in fade-in duration-1000 tracking-wider p-10 pb-64 sm:p-0 sm:pb-0">
            <!-- Add delays to each element using data-aos-delay -->
            <h2 data-aos="fade-up" data-aos-delay="100" class="text-lg py-2 text-sky-300/70 sm:text-xl"> Hello, I am</h2>
            <h2 data-aos="fade-up" data-aos-delay="200" class="text-4xl py-2 font-Baskerville sm:text-6xl md:text-8xl">Luana <span class="font-BaskerItal">Ritter</span> </h2>
            <h2 data-aos="fade-up" data-aos-delay="300" class="text-2xl py-2 text-slate-300/75 sm:text-3xl md:text-4xl">
                <span class="italic text-sky-300/70">Fullstack Developer</span> and stuff aficionado
            </h2>
            <p data-aos="fade-up" data-aos-delay="400" class="text-xs text-slate-100 sm:text-sm md:text-base">I'm a passionate developer with one year of experience in the tech
                field, experienced in fullstack development, optimization and administration of databases.</p>
            <div data-aos="fade-up" data-aos-delay="700" class="flex justify-between mt-4 flex-row space-y-0 space-x-4">
                <a href="https://www.linkedin.com/in/luana-moreira-ritter" target="_blank" rel="noopener noreferrer">
                    <Button class="p-4 sm:p-6">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-2" /> LinkedIn
                    </Button>
                </a>
                <a href="https://github.com/luhyxi" target="_blank" rel="noopener noreferrer">
                    <Button class="p-4 sm:p-6">
                        <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /> Github
                    </Button>
                </a>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icons to the library
library.add(faLinkedin, faGithub);
</script>

<script lang="ts">
export default {
    components: {
        FontAwesomeIcon,
    },
};
</script>