import { useState } from "react"

const usePaginator = (initalState, totalPages) => {
  const [page, setPage] = useState(initalState)

  const changePage = (input) => {
    if (input === "-" && page > 0) setPage(page - 1)
    if (input === "+" && page < totalPages - 1) setPage(page + 1)
    if (typeof input === "number" && !Number.isNaN(input)) setPage(input)
  }
  return [page, changePage]
}

export default usePaginator
