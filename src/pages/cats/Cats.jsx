import Cat from './Cat'

const Cats = ({cats, loading}) => {
  const pStyle = {
    display: 'flex',
    justifyContent: 'center'
  }
  if(loading) return <p style={pStyle}>Loading cats...</p>

  return (
    <>
      {cats.length > 0
        ? cats.map((cat, index) => (
          <Cat
            key={index}
            cat={cat}
          />
        ))
      
        : <p style={pStyle}>No cats found.</p>
      }
      
    </>
  )
}

export default Cats