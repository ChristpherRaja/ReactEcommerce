import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartCount, setCartProducts, setProductCount } from '../Slices/CartSlice'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const [count, setCount] = useState(1)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const product = useSelector((state) => state.homeInfo.selectedProduct)
  const cartProducts = useSelector((state) => state.cartInfo.cartProducts.product)

  const handleCount = (msg) => {

    if (msg == 'sub' && count != 1) {
      setCount(count - 1)
    }
    if (msg == 'add') {
      setCount(count + 1)
    }
  }


  const handleAdd = () => {
    if (cartProducts.includes(product) == false) {
      dispatch(setCartProducts(product))
    }
    dispatch(setProductCount(count))
    dispatch(addCartCount(count))
  }

  const handleBuynow = () => {
    navigate('/checkout')
  }

  return (
    <div className='container d-flex flex-wrap align-items-center'>
      <img src={product.image} style={{ maxWidth: '300px' }} className='col-sm-12 col-lg-5 mx-auto w-50 my-2' alt="product" />
      <div className="col-lg-5">
        <h3 className='col-12'>{product.title}</h3>
        <p className='col-12'>{product.description}</p>
        <h4 className='col-12'>price: {product.price}</h4>
        <div className="btn-group border d-flex col-3 justify-content-center align-items-center">
          <button onClick={() => handleCount('sub')} className="btn border-end">-</button>
          <span className='mx-3 text-center'>{count}</span>
          <button onClick={() => handleCount('add')} className="btn border-start">+</button>
        </div>
        <div className="col-12 d-flex justify-content-center flex-wrap">
          <button onClick={handleAdd} className="col-sm-4 col-12 btn btn-warning m-2">Add to cart</button>
          <button onClick={handleBuynow} className="col-sm-4 col-12 btn btn-warning m-2">Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Product