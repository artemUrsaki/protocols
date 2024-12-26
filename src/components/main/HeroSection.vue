<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection',
})
</script>

<template>
  <section
    class="pt-[100px] relative overflow-hidden bg-gradient-to-b from-dark-blue to-lighter-blue lg:grid grid-cols-2 gap-y-8 gap-x-10 items-center"
  >
    <div class="flex flex-col gap-y-8 items-center lg:items-start">
      <h1 class="uppercase text-wrap text-center lg:text-left">
        Http vs mqtt <br />
        <span class="text-wrap capitalize text-accent-purple">Internet protocols</span>
      </h1>
      <p class="text-center text-pretty lg:text-left font-medium">
        Understanding the difference, advantages and disadvantages of each protocol. Comparison of
        performance, security, and flexibility.
      </p>
      <a
        class="mt-2 py-2.5 px-4 max-w-fit bg-accent-blue rounded-lg font-semibold hover:scale-105"
        href="#"
        >Read more</a
      >
    </div>

    <div class="hidden lg:block h-full">
      <img class="rounded-xl shadow-2xl min-w-[1000px]" src="/img/main.png" alt="Main Image" />
    </div>
  </section>
</template>
