<script setup lang="ts">
// In this section, we use @vueuse/head. Check this for more detail
// https://github.com/vueuse/head
useHead({
  title: "Jeremy Ettlinger | Human",
  meta: [
    {
      name: "Jeremy Ettlinger's Personal Site",
      content: "My personal site with my writings, projects, and how to contact me.",
    },
  ],
})
</script>

<template>
  <div class="min-h-100vh overflow-hidden block relative pb-30 mx-auto flex flex-col">
    <Navbar />
    <main class="mx-auto min-h-prose w-full lg:max-w-screen-lg mt-[7rem]">
      <router-view :key="$route.path" />
      <ToTopBtn />
    </main>
    <Footer />
  </div>
</template>
