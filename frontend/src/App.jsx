import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify'
import Topbar from './components/Topbar'
import Support from './pages/support'
import TrackOrder from './pages/TrackOrder'
import Returns from './pages/Return'
import Shipping from './pages/shipping'
import AccountHelp from './pages/AccountHelp'
import Profile from './pages/Myprofile'
import Addresses from './pages/Addresses'
import FAQs from './pages/FAQs'
import Wishlist from './pages/Wishlist'

const App = () => {
  return (
    <>
      {/* Toast should be global */}
      <ToastContainer />

      {/* TOPBAR – full width */}
      <Topbar />

      {/* EVERYTHING ELSE – padded */}
      <div className="px-4 sm:px-6 lg:px-8">
        <Navbar />
        <SearchBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/verify' element={<Verify />} />
          <Route path="/support" element={<Support/>} />
          <Route path="/track-order" element={<TrackOrder/>}/>
          <Route path="/returns" element={<Returns/>}/>
          <Route path="/shipping" element={<Shipping/>}/>
          <Route path="/account-help" element={<AccountHelp />} />
          <Route path='/myProfile' element={<Profile/>}/>
          <Route path='/addresses' element={<Addresses/>}></Route>
          <Route path='/faqs' element={<FAQs/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
