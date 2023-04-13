import { createContext, useEffect, useState } from 'react'

export const DataContext = createContext({
  data: {},
  setData: () => {},
})

export function DataProvider({ children }) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/sheets')
      const data = await result.json()
      setData(data)
      setInterval(async () => {
        const result = await fetch('/api/sheets')
        const res = await result.json()
        if (res.data && res.data.length !== data.data.length) {
          setData(data)
        }
      }, 5000)
    }
    fetchData()
  }, [])

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}
