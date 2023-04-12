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
      console.log(data)
    }
    fetchData()
  }, [])

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}