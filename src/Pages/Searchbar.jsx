import React from 'react'
import {useDispatch, useSelector,} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { setSelectedProduct } from '../Slices/HomeSlice'

const Searchbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const prod = useSelector(state=>state.homeInfo.allProducts);
  const search = useSelector(state=>state.homeInfo.search);
  
  const filtered = prod.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
  
  const handleSearch = (item)=>{
    dispatch(setSelectedProduct(item))
  }
  
  return (
    <div>
      {filtered.map((item,i)=><ul className='list-group' key={i}>
        <Link to='/product' onClick={()=>handleSearch(item)}  className=' list-group-item border-end-0 border-start-0 text-truncate mx-2'>{item.title}</Link>
        </ul>)}
    </div>
  )
}

export default Searchbar