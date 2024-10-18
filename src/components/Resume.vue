<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
</script>

<template>
    <main class="flex flex-row relative items-center justify-center min-h-screen bg-[#1F2D4A]">
        <section
            class="flex flex-col text-shadow shadow-gray-800 text-slate-200 animate-in fade-in duration-1000 tracking-wider lg:px-20">
            <div class="flex items-center">
                <h1 class="text-gray-200 font-bold text-2xl mr-4 pb-5">Resume</h1>
                <div class="flex-grow border-t border-gray-600"></div>
            </div>

            <section class="flex flex-row items-start content-center">
                <div class="flex-grow flex flex-col">
                    <Tabs default-value="ME" class="sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] ">
                        <TabsList class="grid w-full grid-cols-2 bg-gray-700">
                            <TabsTrigger value="ME" class="py-2">ME</TabsTrigger>
                            <TabsTrigger value="UFSM" class="py-2">UFSM</TabsTrigger>
                        </TabsList>

                        <TabsContent value="ME">
                            <Card class="bg-[#0e1629]">
                                <CardHeader>
                                    <CardTitle class="py-1">Mercado Eletrônico</CardTitle>
                                    <CardDescription class="text-lg italic">Internship, (2023 - Today)</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul class="grid grid-row-2 gap-4 text-slate-300/70 list-disc ml-4">
                                        <li class="text-sm leading-relaxed text-sky-300 tracking-widest">
                                            Modernization of many backend and frontend systems in a financial platform
                                            with
                                            more than one million users.
                                        </li>
                                        <li class="text-sm leading-relaxed text-sky-300 tracking-widest">
                                            Member of a performance and optimization team, reducing 70%-80% of
                                            processing
                                            time for optimized queries.
                                        </li>
                                        <li class="text-sm leading-relaxed text-sky-300 tracking-widest">
                                            Worked in a team that developed a billing system using microservices, AWS,
                                            and
                                            modern technologies.
                                        </li>
                                        <li class="text-sm leading-relaxed text-sky-300 tracking-widest">
                                            Helped resolve Docker and virtualization issues among other interns and
                                            developers.
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <a href="https://www.me.com.br/" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            class="border border-gray-600 hover:shadow-md hover:shadow-slate-700 transition-transform">Mercado
                                            Eletrônico</Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="UFSM">
                            <Card class="bg-[#0e1629]">
                                <CardHeader>
                                    <CardTitle class="pb-1">Universidade Federal de Santa Maria</CardTitle>
                                    <CardDescription class="text-lg italic">University project, (2023 - 2024)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul class="grid grid-row-2 gap-4 text-slate-300/70 list-disc ml-4">
                                        <li class="text-sm leading-relaxed text-sky-300 tracking-widest">
                                            I participated in a project for the development of a people flow management
                                            system, covering a large part of the Technical Industrial School at UFSM.
                                        </li>
                                        <li class="text-sm leading-relaxed text-sky-300 tracking-widest">
                                            Development of Arduino technologies, updating, and maintaining code in
                                            embedded
                                            systems.
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <a href="https://www.ufsm.br/" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            class="border border-gray-600 hover:shadow-md hover:shadow-slate-700 transition-transform">Universidade
                                            Federal de Santa Maria</Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div class="relative mt-6 ml-6 lg:ml-12 pr-6 flex-shrink-6 w-full h-[200%] overflow-hidden">
                    <!-- Adjust height as needed -->
                    <img src="../assets/me.png" alt="ME's photo" class="object-cover filter drop-shadow-lg shadow-gray-200 w-[200%] h-[200%]"
                        loading="lazy">
                </div>

            </section>
        </section>
    </main>
</template>

