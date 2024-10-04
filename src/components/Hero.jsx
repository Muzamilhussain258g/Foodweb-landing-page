import React from 'react'
import { appleLogoImg, deliveryManImg, googlePlayImg } from '../utils/webImages'
import { banner } from '../constants'
import Button from './common/Button'
import ButtonWadd from './common/ButtonWadd'

const Hero = () => {
    let { bannerTitle, bannerDiscription } = banner;
    return (
        <section className='common-padding'>
            <div className='screen-max-width lg:flex lg:flex-row gap-4 flex flex-col-reverse'>
                <div className='w-100 xl:w-1/2 px-3'>
                    <h1 className='font-bold text-[40px] sm:text-[50px] capitalize'>
                        {bannerTitle}
                    </h1>
                    <p className='text-[18px] mt-[10px]'>
                        {bannerDiscription}
                    </p>
                    <div className='mt-6 rounded-full bg-[#f6f6f6] px-1 py-1 flex justify-between sm:w-[80%]'>
                        <input type="text" placeholder='Enter your delivery location' className='outline-none rounded-full px-3  bg-[#f6f6f6]' />
                        <Button btnText="Order Now" color='#e94339' />
                    </div>
                    <div className='flex gap-5 flex-wrap mt-5'>
                        <ButtonWadd btnText='Download on the' btnName="App Store" btnImg={appleLogoImg} />
                        <ButtonWadd btnText='Get it on' btnName="Play Store" btnImg={googlePlayImg} />
                    </div>
                </div>
                <div className='w-100  xl:w-1/2 bg-[#f2ebda] pt-5 flex justify-center rounded-3xl'>
                    <img src={deliveryManImg} alt="deliveryManImg" className='' />
                </div>

            </div>
        </section>
    )
}

export default Hero