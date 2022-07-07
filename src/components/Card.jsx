const Card = ({ headerTitle, children }) => {
  return (
    <div className="bg-white min-w-[32rem] h-auto shadow-lg pb-[1px] mb-2">
      <header className='prm-bg sec-text sec-hover pl-3 p-2 text-xl transition-1'>
        { headerTitle }
      </header>
      <div className="bg-white m-2 p-2 border-2 sec-border sec-border-hover rounded-lg transition-1">
        { children }
      </div>
    </div>
  )
}

export default Card