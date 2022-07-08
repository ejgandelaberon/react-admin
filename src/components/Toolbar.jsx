const Toolbar = ({ pageTitle, children }) => {
  return (
    <div className="flex justify-between mb-8">
      <p className="text-2xl font-bold">{pageTitle}</p>
      <div className="flex gap-x-4">
        {children}
      </div>
    </div>
  )
}

export default Toolbar