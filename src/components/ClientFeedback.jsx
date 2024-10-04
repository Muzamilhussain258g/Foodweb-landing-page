import React from 'react'
import { clientFeedback } from '../constants'
import { vectorImg } from '../utils/webImages';

const ClientFeedback = () => {
    let {title, slogan, quote, author} = clientFeedback;

    return (
        <section className='common-padding flex justify-center' >
            <div className='w-[70%] flex flex-col items-center'>
                <div>
                <h2 className='capitalize text-center font-bold text-[40px]'>{ title}</h2>
                <p className='text-center'>{slogan}</p>
                </div>
                <img src={vectorImg} alt="" className='my-10'/>
                <p className='font-bold text-center sm:px-36'>"{quote}"</p>
                <div className='mt-6'>
                    <h3 className='font-bold'>{author.name}</h3>
                    <p className='text-slate-500'>{author.title}</p>
                </div>
            </div>
        </section>
    )
}

export default ClientFeedback