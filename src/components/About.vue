<template>
    <main class="flex flex-row relative items-center justify-center min-h-screen bg-[url(../public/img/blob-haikei.svg)] bg-contain bg-center p-40">
        <section
            class="flex flex-col text-shadow shadow-gray-800 text-slate-200 animate-in fade-in duration-1000 tracking-wider lg:px-20 pt-12">
            
            <div class="flex items-center">
                <h1 class="text-gray-200 font-bold text-2xl mr-4">About Me </h1> 
                <div class="flex-grow border-t border-gray-600" ></div>
            </div>

            

            <p class="text-sm leading-relaxed text-slate-300/70 tracking-widest">
                <br />
                <span class="italic text-sky-300/100">Hello! I'm Luana </span> and I've been creating stuff ever since I
                was a child, starting with simple RPG Maker games and Neopets webpages to small Python applications
                while I was a teenager. 

                <br /> <br />

                Fast-forward to today, and I am a <span class="italic text-sky-300/100">full-stack developer </span>specializing in the
                Dotnet environment, database optimization, and full-cycle web applications.

                <br /> <br />

                With over a year of experience in the tech field, I've
                worked on a wide range of projects, I enjoy solving complex problems and continuously
                expanding my skills through new challenges.</p>
        </section>
        <div class="relative mt-6 mr-60 ">
            <img src="../assets/person.jpg" alt="Luana's photo" class="w-48 lg:w-64 mt-6 mr-80  transition-all transform hover:translate-y-3 hover:-translate-x-3 skew-y-3 grayscale-[40%] hover:grayscale-[20%] drop-shadow-md  " loading="lazy">
        </div>
    </main>
</template>

<script>
export default {
    name: "About",
};
</script>