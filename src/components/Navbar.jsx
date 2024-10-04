import React from 'react'
import { navLinks } from '../constants'
import { pizzaSliceImg, pastaImg, sushiImg, deliveryManImg, houseImg, vectorImg } from '../utils/webImages'
import Button from './common/Button'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    return (
        <header className='w-full px-5 sm:px-10 py-3'>
            <nav className='screen-max-width flex justify-between items-center'>

                <div>
                    <img src={pizzaSliceImg} alt="pizzaSliceImgLogo" />
                </div>

                <div className='sm:flex gap-[25px] font-medium hidden'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/order'>
                        Order
                    </NavLink>
                    <NavLink to='/about'>
                            About
                    </NavLink>
                    <NavLink to='/foods'>
                        Foods
                    </NavLink>
                </div>

                <div>
                    <Button btnText="Login" />
                    <Button color="#e94339" btnText="Sign Up" />
                </div>

            </nav>
        </header>
    )
}

export default Navbar