<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-5xl font-bold">{{ msg }}</h1>

  <div class="p-8">
    <button class="border border-transparent py-2 px-4 bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-200 hover:border-[#646cff] focus:outline-4 rounded-lg" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p class="mt-4">Visit <a href="/api/hello-world"><code>/api/hello-world</code></a> to test Nitro</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="text-[#888]">Click on the Nitro, Vite, Vue and TailwindCSS logos to learn more</p>
</template>

<style scoped>
</style>
