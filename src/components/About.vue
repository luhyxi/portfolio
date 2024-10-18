<template>
    <main
        class="flex flex-row items-center justify-center min-h-screen bg-[url(../public/img/blob-haikei.svg)] bg-contain bg-center p-96">
        
        <section
            class="flex flex-col text-shadow shadow-gray-800 text-slate-200 animate-in fade-in duration-1000 tracking-wider lg:px-20">

            <div class="flex items-center mb-4">
                <h1 class="text-gray-200 font-bold text-2xl mr-4">About Me</h1>
                <div class="flex-grow border-t border-gray-600"></div>
            </div>

            <p class="text-sm leading-relaxed text-slate-300/70 tracking-widest">
                <br />
                <span class="italic text-sky-300/100">Hello! I'm Luana</span> and I've been creating stuff ever since I
                was a child, starting with simple RPG Maker games and Neopets webpages to small Python applications
                while I was a teenager.

                <br /><br />

                Fast-forward to today, and I am a <span class="italic text-sky-300/100">full-stack developer</span>
                specializing in the
                <span class="italic text-sky-300/100">Dotnet environment, database optimization, and full-cycle web
                    applications.</span>

                <br /><br />

                With <span class="italic text-sky-300/100">over a year of experience in the tech field</span>, I've
                worked on a wide range of projects. I enjoy solving complex problems and continuously
                expanding my skills through new challenges.

                <br /><br />

                Here are a few technologies I’ve been working with recently:
                
                <br /><br />
            </p>

            <ul class="grid grid-cols-2 gap-4 text-slate-300/70 list-disc ml-4">
                <li v-for="tech in technologies" :key="tech" class="text-sm leading-relaxed text-sky-300/100 tracking-widest whitespace-nowrap">{{ tech }}</li>
            </ul>
        </section>

        <div class="relative mt-6 ml-10"> <!-- Adjusted margin for spacing -->
            <img src="../assets/person.jpg" alt="Luana's photo"
                class="w-72 lg:w-72 transition-all transform grayscale-[40%] hover:grayscale-[20%] drop-shadow-md"
                loading="lazy">
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const technologies = ref(["Dotnet", "C#", "Python", "Node.js", "Laravel", "TypeScript", "Vue", "SQL"]);
</script>
