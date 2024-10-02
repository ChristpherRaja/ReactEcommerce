import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAllProducts, setSelectedProduct } from '../Slices/HomeSlice'

const Home = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                dispatch(setAllProducts(json));
            }
            )

    }, [])


    const clickHandle = (prod) => {
        dispatch(setSelectedProduct(prod))
        navigate('/product')
    }


    return (
        <div className='container d-flex flex-wrap justify-content-center'>
            {products.map((prod, i) => <div key={i} onClick={() => clickHandle(prod)} className="m-2 col-5 col-md-3 shadow card text-start">
                <img className="card-img-top w-25 mt-2 mx-auto" src={prod.image} alt="Title" />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{prod.title}</h5>
                    <p className="card-text text-truncate">{prod.description}</p>
                    <p>Price: {prod.price}</p>
                    <div className="buttons">

                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Home