import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {setSearch} from './Slices/HomeSlice'

const Navbar = () => {

    const count = useSelector((state)=>state.cartInfo.cartCount)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <nav className='navbar bg-secondary d-flex align-items-center'>
            <a href="#" className=" navbar-brand d text-light px-3 fw-bold">Farac</a>
            <input type="text" onChange={(e)=>dispatch(setSearch(e.target.value))} onFocus={()=>navigate('/searchbar')} placeholder='Search' className="form-control  w-25" />
            <div className="d-flex">
                <li className="h3 list-unstyled"><Link to={'/'} className="bi-house-fill me-4 nav-link"></Link></li>
                <li className="h3 list-unstyled"><Link to={'/cart'} className="bi-cart-fill me-4 nav-link"><span className='top-0 position-absolute h6'>{count}</span></Link></li>
                <li className="h3 list-unstyled"><Link to={'/settings'} className="bi-gear-fill me-4 nav-link"></Link></li>
                <li className="h3 list-unstyled"><Link to={'/profile'} className="bi-person-fill me-4 nav-link"></Link></li>
            </div>
        </nav>
    )
}

export default Navbar