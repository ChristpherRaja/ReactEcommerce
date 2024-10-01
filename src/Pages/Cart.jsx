import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartCount, reduceProductCount,reduceCartCount, setProductCount, removeCartProducts } from '../Slices/CartSlice'
import { useNavigate,Link } from 'react-router-dom'

const Cart = () => {

  // const [count, setCount] = useState(1)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const cartProduct = useSelector((state)=>state.cartInfo.cartProducts)  
  const cartCount = useSelector((state)=>state.cartInfo.cartCount)  

  const handleCount = (msg) =>{

    if(msg=='sub' && cartCount!=1){
      // setCount(count-1)
      dispatch(reduceCartCount(1))
      dispatch(reduceProductCount(1))

    }
    if(msg=='add'){
      // setCount(count+1)
      dispatch(addCartCount(1))
      dispatch(setProductCount(1))

    }
  }  


  const handleBuynow = ()=>{
    navigate('/checkout')
  }

  const handleremove =(prod)=>{
    const updatedCart = cartProduct.product.filter((item)=>item!=prod)
    
    dispatch(removeCartProducts(updatedCart))
    dispatch(reduceCartCount(cartProduct.productCount))
    dispatch(reduceProductCount(1))
  }

  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      {cartProduct.product.map((prod, i) => <div key={i} className="m-2 col-5 col-md-3 shadow card text-start">
        <img className="card-img-top w-25 mt-2 mx-auto" src={prod.image} alt="Title" />
        <div className="card-body">
          <h5 className="card-title text-truncate">{prod.title}</h5>
          <p className="card-text text-truncate">{prod.description}</p>
          <p>Price: {prod.price}</p>
          <Link to='/product' className="cursor link-underline-light">view details...</Link>
          <div className="btn-group border m-2 ms-4 align-items-center">
            {cartProduct.productCount===1?<i onClick={() => handleremove(prod)} className="btn bi-trash3 text-danger border-end"></i>:<button onClick={() => handleCount('sub')} className="btn border-end">-</button>}
            <span className='mx-3 text-center'>{cartProduct.productCount}</span>
            <button onClick={() => handleCount('add')} className="btn border-start">+</button>
          </div>
          <button onClick={handleBuynow} className=" my-2 col-12 btn btn-warning mb-2">Buy now</button>
          <button onClick={() => handleremove(prod)} className=" my-2 col-12 btn btn-danger mb-2">Delete</button>
       
        </div>
      </div>)}
    </div>
  )
}

export default Cart