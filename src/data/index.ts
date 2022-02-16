import { usePaginate } from "~/utils/"
import type { RelatedArticles, PaginateData } from "~/types"

// Get data frontmatter using function getRoutes from useRouter
const getDataRoutes = () => {
  const router = useRouter()
  const routes = router.getRoutes()
  return routes
}

// Get params's value from url
export const getParams = (value: string) => {
  const router = useRouter()
  return router.currentRoute.value.params[value]
}

// Filter data routes to get the writings data and limit as needed
export const getPosts = (limit?: number) => {
  const isPosts = getDataRoutes()
    .filter((data) => Object.keys(data.meta).length !== 0)
    .slice(0, limit)
    .sort(
      (a, b) =>
        +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date),
    )
  return isPosts
}

export const getWritings = () => getPosts().filter((data) => data.meta.frontmatter.writing)

export const getProjects = () => getPosts().filter((data) => !data.meta.frontmatter.writing)

export const latestWriting = () => getWritings()[0].meta.frontmatter

export const latestProject = () => getProjects()[0].meta.frontmatter

// Filter data to get specific articles based on tags
export const getTags = (tags: Array<string>) => {
  const filter = getPosts().filter((tag: any) =>
    tags.every((filter) => tag.meta.frontmatter.tags.includes(filter)),
  )
  return filter
}

// Filter paginate data
export const paginateData = ({
  posts,
  currentPage,
  pageSize,
}: PaginateData) => {
  const { startPage, endPage, startIndex, endIndex } = usePaginate({
    totalItems: posts.length,
    currentPage: currentPage,
    pageSize: pageSize,
  })

  const prev: number = currentPage - 1 >= startPage ? currentPage - 1 : 0
  const next: number = currentPage + 1 <= endPage ? currentPage + 1 : 0
  const mid = Array(prev, currentPage, next).filter(
    (value) => value > startPage && value < endPage,
  )

  const listPosts = posts.slice(startIndex, endIndex + 1)
  return {
    startPage,
    mid,
    endPage,
    listPosts,
  }
}
