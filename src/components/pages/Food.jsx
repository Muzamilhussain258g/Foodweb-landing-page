import React, { useState } from 'react'
import Card from '../common/Card'
import { cardPizzasData } from '../../constants'
import { pizzaCardImg } from '../../utils/webImages'


function Food() {


    return (
        <>
            <section className='common-padding'>
                <div className='screen-max-width grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center'>

                    {
                        cardPizzasData.map((item, index) => (
                            <Card key= {index}  data={item} img={pizzaCardImg} />
                        ))
                    }

                </div>
            </section>
        </>
    )
}

export default Food