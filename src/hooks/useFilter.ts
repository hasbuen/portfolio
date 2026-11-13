import { useState, useCallback } from 'react'

export function useFilter<T>(items: T[], filterFn: (item: T, filter: string) => boolean) {
  const [filter, setFilter] = useState('')

  const filtered = filter ? items.filter((item) => filterFn(item, filter)) : items

  const handleFilter = useCallback((value: string) => {
    setFilter(value)
  }, [])

  return { filter, filtered, handleFilter }
}
