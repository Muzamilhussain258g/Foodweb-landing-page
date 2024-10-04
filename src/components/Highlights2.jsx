import React from 'react'
import { highlights2Card } from '../constants'

const Highlights2 = () => {
    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h2 className='capitalize text-center font-bold text-[40px]'>how to order?</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 mt-4 gap-10'>
                    {
                        highlights2Card.map((el, i) => (
                            <div className='flex flex-col items-center bg-[#f6f6f6] p-4 rounded-xl '>
                                <img src={el.img} alt="" className='p-4 bg-white rounded-full'/>
                                <h3 className='capitalize font-semibold ' >{el.discription}</h3>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Highlights2