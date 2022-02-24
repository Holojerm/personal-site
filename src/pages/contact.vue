<template>
  <div class="px-10 text-bittersweet-700 dark:text-orient-400 max-w-180 m-auto">
    <h1 class="font-bold">Contact Me!</h1>
    <form class="my-4 md:flex flex-col md:justify-between">
      <div class="flex flex-col">
        <label class="field-label" for="name">Name</label>
        <input v-model="form.name" class="field" type="text" name="name" id="name">
      </div>
      <div class="flex flex-col">
        <label class="field-label" for="email">Email</label>
        <input v-model="form.email" class="field" type="email" name="email" id="email">
      </div>
      <div class="flex flex-col mg-4">
        <label class="field-label" for="message">Message</label>
        <textarea v-model="form.message" class="field" name="message" id="message" />
      </div>
      <button class="w-20 mt-4 rounded p-2 bg-bittersweet-100 hover:bg-bittersweet-200 dark:bg-orient-600 dark:hover:bg-orient-500 dark:text-orient-100" @click="onSubmit">
        Submit
      </button>
    </form>
    <div class="flex flex-auto w-full my-10">
      <a class="link" href="https://twitter.com/holojerm">
        <carbon-logo-twitter class="icon" />
      </a>
      <a class="link" href="https://linkedin.com/in/jeremy-ettlinger">
        <carbon-logo-linkedin class="icon" />
      </a>
      <a class="link" href="mailto:jeremy.ettlinger@gmail.com">
        <carbon-email class="icon" />
      </a>
      <a class="link" href="https://github.com/holojerm">
        <carbon-logo-github class="icon" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const onSubmit = () => {
  window.open(`mailto:jeremy.ettlinger@gmail.com?subject=${form.name + ' (' + form.email + ') reaching out via website'}&body=${form.message}`)
}
</script>

<style lang="scss">
.field {
  @apply border py-2 px-3 md:mr-2 rounded dark:bg-orient-300 text-bittersweet-900 dark:text-orient-900 focus:border-bittersweet-300;
}

.field-label {
  @apply text-lg font-bold py-3;
}

.icon {
  @apply flex-auto w-10 h-10;
}

.link {
  @apply flex w-full hover:text-bittersweet-500 hover:dark:text-orient-300;
}
</style>