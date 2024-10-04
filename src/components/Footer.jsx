import React from 'react'
import { appleLogoImg, googlePlayImg, pizzaSliceImg } from '../utils/webImages'
import ButtonWadd from './common/ButtonWadd'
import { footerLinks, footerNavigations } from '../constants'


const Footer = () => {
    return (
        <section className='w-full common-padding bg-black text-white'>
            <div className='grid sm:grid-cols-12 gap-10 screen-max-width '>
                <div className=' sm:col-span-4 '>
                    <img src={pizzaSliceImg} alt="pizzaSliceImg" />
                    <div className="flex gap-5 mt-16 n flex-wrap">
                        <ButtonWadd btnText='Download on the' btnName="App Store" btnImg={appleLogoImg} color="black" bg="white" />
                        <ButtonWadd btnText='Get it on' btnName="Play Store" btnImg={googlePlayImg} color="black" bg="white" />
                    </div>

                </div>
                <div className=' sm:col-span-2 '>
                    <h3 className='font-semibold text-xl mb-3'>Quick Links</h3>
                    <ul>
                        {footerNavigations.quickLinks.map((el, i) => (
                            <li><a href="#">{el}</a></li>
                        ))}
                    </ul>
                </div>
                <div className=' sm:col-span-2 '>
                    <h3 className='font-semibold text-xl mb-3'>Get To Know Us</h3>
                    <ul>
                        {footerNavigations.getToKnowUs.map((el, i) => (
                            <li><a href="#">{el}</a></li>
                        ))}
                    </ul>
                </div>
                <div className=' sm:col-span-2 '>
                <h3 className='font-semibold text-xl mb-3'>News</h3>
                    <ul>
                        {footerNavigations.news.map((el, i) => (
                            <li><a href="#">{el}</a></li>
                        ))}
                    </ul>
                </div>
                <div className=' sm:col-span-2 '>
                <h3 className='font-semibold text-xl mb-3'>Contacts</h3>
                    <ul>
                        {footerNavigations.contact.map((el, i) => (
                            <li><a href="#">{el}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='screen-max-width grid gap-10 sm:grid-cols-2 mt-24'>
                <div>
                        <h3 className='font-semibold text-xl'>{footerLinks.copyright}</h3>
                </div>
                <div  className=" flex sm:justify-end">
                    <ul className='flex gap-4'>
                        {
                            footerLinks.legalLinks.map((el, i) => (
                                <li>{el}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer