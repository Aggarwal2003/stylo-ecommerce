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

import { useEffect, useState } from "react";
import { checkBackend } from "./utils/checkBackend";

const App = () => {

  // 🔹 NEW: state to control message
  const [showBackendMsg, setShowBackendMsg] = useState(true);

  // 🔹 NEW: check backend when app loads
  useEffect(() => {
    async function check() {
      const ok = await checkBackend();
      if (ok) {
        setShowBackendMsg(false);
      }
    }
    check();
  }, []);

  return (
    <>
      {/* 🔔 Backend wake-up notification */}
      {showBackendMsg && (
        <div className="bg-yellow-100 text-yellow-800 text-center py-2 text-sm">
          Backend server is waking up. Please wait a few seconds…
        </div>
      )}

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
          <Route path="/support" element={<Support />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/account-help" element={<AccountHelp />} />
          <Route path='/myProfile' element={<Profile />} />
          <Route path='/addresses' element={<Addresses />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
