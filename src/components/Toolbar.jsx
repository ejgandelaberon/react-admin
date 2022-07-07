const Toolbar = ({ pageTitle, children }) => {
  return (
    <div className="flex justify-between mb-8">
      <p>{pageTitle}</p>
      <div className="">
        {children}
      </div>
    </div>
  )
}

export default Toolbar