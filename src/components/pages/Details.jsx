import React from 'react'
import { useParams } from 'react-router-dom'
import { cardPizzasData } from '../../constants';
import { pizzaCardImg } from '../../utils/webImages';

const Details = () => {
  const { id } = useParams();
  let singlePizzaDetail = cardPizzasData.find((el, i) => (
    el.id==id

  ))
  console.log(singlePizzaDetail)


  return (
    <div  className ="w-full h-screen flex justify-center items-center common-padding">

      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={pizzaCardImg} alt=""></img>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{singlePizzaDetail.name}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{singlePizzaDetail.description}</p>
            <div>
              <h3 className='font-semibold text-xl  '>Toppings:</h3>
              <ul className='sm:flex sm:gap-4' >
                {
                  singlePizzaDetail.toppings.map((el)=>(
                    <li>{el}</li>
                  ))
                }
              </ul>
            </div>
            <div className='mt-5 sm:flex gap-5 items-center'>
              <h3 className='font-semibold text-xl'>Price:</h3>
              <p className='text-3xl font-bold'>${singlePizzaDetail.price}</p>
            </div>
          </div>
      </a>

    </div>
  )
}

export default Details