import { useState, useEffect, useMemo } from "react"
import Cats from "../pages/cats/Cats"
import Pagination from "../components/pagination/Pagination"

const CatRoute = () => {
  const apiKey = '4f5908f5-5b46-4371-b504-2845925ca306'
  const limit = 6
  const [page, setPage] = useState(0)
  const path = useMemo(() => `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`, [page])
  const [cats, setCats] = useState([])
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
          setCats(data)
          setLoading(false)
          console.log(data)
        }
      } catch (err) {
        throw err
      }
    }

    getCats()

    return () => {
      mounted = false
    }
  }, [path])

  //check next path
  // todo check

  //Set Page
  const gotoNext = () => {
    if(cats.length == limit) setPage((prevPage) => prevPage+1)
  }
  const gotoPrev = () => {
    if(page !== 0) setPage((prevPage) => prevPage-1)
  }

  return (
    <>
      <Pagination next={gotoNext} prev={gotoPrev} current={page} data={cats} limit={limit}/>

      <div className="card-container flex flex-wrap justify-around">
        <Cats
          cats={cats}
          loading={loading}
        />
      </div>
    </>
  )
}

export default CatRoute