<script setup lang="ts">
import { isDark, toggleDark, slug } from '~/utils'
import type { NavbarMenu } from '~/types'

// https://vueuse.org/shared/useToggle/
const [open, setOpen] = useToggle()

// https://vueuse.org/core/onKeyStroke/
onKeyStroke('Escape', () => {
  open.value = false
})

const navbottom = ref(null)
onClickOutside(navbottom, (e) => {
  open.value = false
})

const router = useRouter()

// Hide navbottom after page has been changed
router.afterEach(() => {
  open.value = false
})

// Navbar list
const dataNavbar: NavbarMenu[] = [
  {
    name: 'Writings',
    to: '/writings'
  },
  {
    name: 'Projects',
    to: '/projects'
  },
  {
    name: 'Dashboard',
    to: '/dashboard'
  },
  {
    name: 'Resumé',
    to: '/resume'
  },
  {
    name: 'Contact',
    to: '/contact'
  }
]
</script>

<template>
  <nav
    class="z-20 bg-white dark:bg-orient-900 text-bittersweet-700 dark:text-orient-400 h-20 px-4 border-b-4 border-bittersweet-500 dark:border-orient-500 fixed w-full"
    role="navigation"
    aria-label="navbar"
  >
    <div class="max-w-screen-lg mx-auto h-full flex flex-row items-center space-x-4">
      <div class="logo flex-1">
        <router-link to="/" class="font-bold lg:tracking-wide text-3xl daydream">
          Je
        </router-link>
      </div>
      <div class="flex flex-wrap items-center">
        <router-link
          v-for="(data,i) in dataNavbar"
          :key="i"
          class="mr-5 py-1.5 px-3 rounded-md text-bittersweet-700 dark:text-orient-400 dark:hover:text-orient-300 hover:text-bittersweet-900 hidden lg:block"
          :to="data.to"
          active-class="bg-bittersweet-200 dark:bg-orient-500 dark:text-orient-200"
        >{{ data.name }}</router-link>
        <carbon-sun
          v-if="isDark"
          class="mr-5 cursor-pointer text-bittersweet-700 dark:text-orient-400"
          tabindex="0"
          @click="toggleDark"
          title="Toggle light mode"
        />
        <carbon-moon
          v-else
          class="mr-5 cursor-pointer text-bittersweet-700 dark:text-orient-400"
          tabindex="0"
          @click="toggleDark"
          title="Toggle dark mode"
        />
        <carbon-menu
          class="cursor-pointer text-bittersweet-700 dark:text-orient-400 ml-5 sm:block lg:hidden"
          tabindex="0"
          @click="setOpen"
        />
      </div>
    </div>
  </nav>

  <!-- Nav bottom -->
  <nav
    v-if="open"
    ref="navbottom"
    class="py-4 px-8 bg-bittersweet-400 dark:bg-orient-500 fixed bottom-0 z-99 inset-x-0 rounded-t-lg shadow-lg overflow-x-hidden overflow-y-hidden lg:hidden"
    :class="open ? 'block translate-y-0' : 'hidden translate-y-full'"
  >
    <ul class="flex flex-col">
      <router-link
        v-for="(data,i) in dataNavbar"
        :key="i"
        class="bg-bittersweet-50 dark:bg-orient-700 p-2 mb-2 rounded-md"
        :to="data.to"
        active-class="bg-bittersweet-300 dark:bg-orient-300"
      >
        <li class="flex flex-row flex-wrap items-center dark:text-bittersweet-100">
          {{ data.name }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss">
@import url('http://fonts.cdnfonts.com/css/daydream');

.active-class {
  @apply p-2 mb-2 rounded-md bg-bittersweet-200 dark:bg-bittersweet-700;
}

.daydream {
  font-family: 'Daydream';
}
</style>
