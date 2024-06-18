<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex items-center min-w-[320px] min-h-screen">
    <div class="max-w-7xl my-0 mx-auto p-8 text-center">
      <div class="flex gap-4 flex-wrap justify-center">
        <a href="https://nitro.unjs.io/" target="_blank">
          <img src="./assets/nitro.svg" class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#e580ec]" alt="Nitro logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 vue hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src="./assets/tailwindcss.svg" class="h-32 w-32 p-6 will-change-[filter] transition-[filter] duration-300 vue hover:drop-shadow-[0_0_2em_#38bdf8]" alt="TailwindCSS logo" />
        </a>
      </div>
      <HelloWorld msg="Nitro + Vite + Vue + TailwindCSS" />
    </div>
  </div>
</template>

<style scoped>
</style>
