import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'
import Navbar from './Navbar'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'
import Searchbar from './Pages/Searchbar'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/cart' Component={Cart}/>
      <Route path='/product' Component={Product}/>
      <Route path='/searchbar' Component={Searchbar}/>
      <Route path='/checkout' Component={Checkout}/>
      <Route path='/settings' Component={Settings}/>
      <Route path='/profile' Component={Profile}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
