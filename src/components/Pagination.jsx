const Pagination = ({next, prev, current, data, limit}) => {
  return (
    <>
    <div className='flex justify-between'>
      <button onClick={prev} className={`btn ${current === 0 ? 'btn-disabled' : 'btn-primary'}`}>Previous</button>
      <p>Page {current + 1}</p>
      <button onClick={next} className={`btn ${data.length < limit ? 'btn-disabled' : 'btn-primary'}`}>Next</button>
    </div>
    </>
  )
}

export default Pagination