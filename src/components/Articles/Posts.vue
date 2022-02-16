<template>
  <div class="inline-grid px-4 lg:px-0">
    <h1
      class="mb-5 text-3xl text-bittersweet-700 dark:text-orient-400 font-bold"
    >Latest {{ type.charAt(0).toUpperCase() + type.slice(1, -1) }}</h1>
    <Latest
      :image="latest.thumbnail"
      :alt="`blog-banner-${slug(latest.name)}`"
      :tags="latest.tags"
      :date="`${new Date(latest.date).toDateString()}`"
      :title="latest.name"
      :description="limitString(latest.description, 200)"
      :to="posts.listPosts[0].path"
      :to-tags="`/tags/${latest.tags}`"
    />
  </div>
  <div class="flex flex-col flex-wrap my-2 px-4 lg:px-0">
    <h1 class="text-bittersweet-700 dark:text-orient-400 font-bold">All {{ type.charAt(0).toUpperCase() + type.slice(1) }}</h1>
    <h3
      class="mt-1 text-bittersweet-700 dark:text-orient-400"
    >Total {{ type }}: {{ posts.listPosts.length }}</h3>
    <div class="grid inline-grid gap-4 py-6 mb-2 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
      <Card
        v-for="(data, i) in posts.listPosts"
        :key="i"
        :image="data.meta.frontmatter.thumbnail"
        :alt="`blog-banner-${slug(data.meta.frontmatter.name)}`"
        :tags="data.meta.frontmatter.tags"
        :date="`${new Date(data.meta.frontmatter.date).toDateString()}`"
        :title="data.meta.frontmatter.name"
        :description="limitString(data.meta.frontmatter.description, 100)"
        :to="data.path"
        :to-tags="`/tags/${data.meta.frontmatter.tags}`"
      />
    </div>
    <div class="flex flex-wrap justify-center items-center mb-5">
      <Paginate
        :start-page="posts.startPage"
        :end-page="posts.endPage"
        :mid="posts.mid"
        :current-page="currentPage"
        :click-start-page="clickStartPage"
        :click-paginate="clickPaginate"
        :click-end-page="clickEndPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { latestWriting, getWritings, latestProject, getProjects, paginateData } from '~/data'
import { limitString, slug } from '~/utils'
import { computed } from 'vue'

const props = defineProps<{
  type: string,
}>()

const latest = computed(() => {
  return props.type === 'writings' ? latestWriting() : latestProject()
})

const currentPage = ref<number>(1)
const posts = computed(() => {
  const posts = props.type === 'writings' ? getWritings() : getProjects()
  const paginate = paginateData({
    posts,
    currentPage: currentPage.value,
    pageSize: 3
  })

  return paginate
})

// Pagination
const clickStartPage = () => {
  currentPage.value = posts.value.startPage
}
const clickPaginate = (paginate: number) => {
  currentPage.value = paginate
}
const clickEndPage = () => {
  currentPage.value = posts.value.endPage
}
</script>