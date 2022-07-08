const FormInput = ({ label = 'Label', inputType = 'text', placeholder, refData }) => {
  return (
    <div className='flex flex-col grow gap-1'>
      <label className="prm-text prm-hover text-sm  transition-1" htmlFor="">{label}</label>
      <input ref={refData} className="prm-text border-focus px-2 py-2 rounded-lg border-[1px] border-sky-300"
        type={inputType} placeholder={placeholder} />
    </div>
  )
}

export default FormInput