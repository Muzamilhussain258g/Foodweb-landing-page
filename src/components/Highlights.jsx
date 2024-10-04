import React from 'react'
import { bikeImg, burgerImg, pizzaSliceImg, sushiImg, vectorOrangeImg } from '../utils/webImages'
import { highlightsCard } from '../constants'

const Highlights = () => {
    return (
        <section className='w-full common-padding'>
            <div className='screen-max-width flex flex-col items-center'>
                <h2 className='capitalize text-[40px] font-bold'>More than <span className='text-[#e94339]'>10000</span> dishes to order!</h2>
                <p className='capitalize text-[16px] mt-3'>Welcome to the biggest network of food ordering & deliver</p>
            </div>
            <div className='screen-max-width flex flex-wrap justify-between items-center gap-y-10 gap-5 mt-16'>
                {
                    highlightsCard.map((item) => (
                        <div className='bg-[#f6f6f6] p-2 rounded-xl w-[10rem] flex flex-col items-center' key={item.title}>
                            <img src={item.img} alt="" className='p-4 bg-white rounded-full' />
                            <h4 className='font-medium mt-3'>{item.title}</h4>
                        </div>
                    ))
                }
                <div className='p-2 bg-[#f6f6f6] rounded-xl text-[20px] w-[30rem] relative h-[9rem]' >
                    Find <span className='text-[#e94339] '>deals</span>,<span className='text-green-500'>free delivery</span> and more from our reataurants partners.
                    <div className='absolute right-10'>
                        <img src={bikeImg} alt="" width={100} />
                    </div>
                </div>
            </div>

            <div className='screen-max-width flex flex-wrap mt-24 gap-y-5'>
                <div className='w-100 md:w-1/2 px-5'>
                    <img src={vectorOrangeImg} alt="" className='mb-5 w-[4rem]' />
                    <p className='text-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit nam ducimus, unde autem veniam numquam non, mollitia labore earum iste explicabo quo facere quas culpa itaque, obcaecati exercitationem velit!</p>
                </div>
                <div className='w-100 md:w-1/2 flex gap-2 justify-between flex-wrap sm:flex-nowrap'>
                    {highlightsCard.map((item) => (
                        <div className='bg-[#f6f6f6] p-2 rounded-xl w-[10rem] flex flex-col items-center' key={item.title}>
                            <img src={item.img} alt="" className='p-4 bg-white rounded-full' />
                            <h4 className='font-medium mt-3'>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Highlights