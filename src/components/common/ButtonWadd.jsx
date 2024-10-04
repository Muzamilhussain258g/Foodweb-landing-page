import React from 'react'

const ButtonWadd = ({btnName,btnText,btnImg ,color,bg}) => {
  return (
    <button className='flex items-center p-1 rounded-lg
      bg-[#f6f6f6] gap-1'>
        <img src={btnImg} alt={btnName} width={24}/>
        <div>
            <p className='text-left text-[12px] font-medium' style={{color:color,backgroundColor:bg}}>{btnText}</p>
            <h3 className='text-left text-[16px] font-medium tracking-[1.5px]'style={{color:color,backgroundColor:bg}}>{btnName}</h3>
        </div>
    </button>
  )
}

export default ButtonWadd