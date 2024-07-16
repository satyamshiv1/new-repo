import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between'>
            <NavLink to="/">
                <div className='ml-5'>
                    <img src="../logo.png" className="h-14"/>
                </div>
            </NavLink>
            <div>
                <NavLink to="/">
                    <div>
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/cart">
                    <div>
                        <FaShoppingCart/>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar