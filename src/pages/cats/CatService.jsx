import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import Cats from './Cats'
import Pagination from '../../components/pagination/Pagination'

const CatService = () => {
  const apiKey = '4f5908f5-5b46-4371-b504-2845925ca306'
  const [page, setPage] = useState(0)
  const path = useMemo(() => `https://api.thecatapi.com/v1/breeds?limit=1&page=${page}`, [page])
  // const [apiUrl, setApiUrl] = useState(path)
  const [cats, setCats] = useState([])
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(false)

  //fetch cats
  useEffect(() => {
    setLoading(true)
    let mounted = true

    const getCats = async () => {
      try {
        const res = await fetch(path)
        if(mounted) {
          const data = await res.json()
          console.log(data)
          setCats(data)
          setLoading(false)
        }
      } catch (err) {
        if(!axios.isCancel(err)) throw err
      }
    }

    getCats()

    return () => {
      mounted = false
    }
  }, [path])

  //Set Page
  const gotoNext = () => {
    setPage((prevPage) => prevPage+1)
  }
  const gotoPrev = () => {
    if(page !== 0) setPage((prevPage) => prevPage-1)
  }

  return (
    <>
      <Cats
        cats={cats}
        loading={loading}
      />
      <Pagination next={gotoNext} prev={gotoPrev} current={page}/>
    </>
  )
}

export default CatService