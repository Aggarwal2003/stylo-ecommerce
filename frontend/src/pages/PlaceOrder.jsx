import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import toast from "react-hot-toast";

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const [loading, setLoading] = useState(false);

    const {
        navigate,
        backendUrl,
        token,
        cartItems,
        setCartItems,
        getCartAmount,
        delivery_fee,
        products
    } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    /* ---------------- Razorpay Init ---------------- */
    const initPay = (order) => {
        const toastId = toast.loading("Opening Razorpay...");

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(
                        backendUrl + '/api/order/verifyRazorpay',
                        response,
                        { headers: { token } }
                    );

                    toast.dismiss(toastId);
                    setLoading(false);

                    if (data.success) {
                        setCartItems({});
                        navigate('/orders');
                    } else {
                        toast.error("Payment verification failed");
                    }
                } catch (error) {
                    toast.dismiss(toastId);
                    setLoading(false);
                    toast.error(
                        error.response?.data?.message || "Payment verification failed"
                    );
                }
            }
        };

        toast.dismiss(toastId);
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    /* ---------------- Submit Order ---------------- */
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // 🔐 Login check
        if (!token) {
            toast.error("Please login to place your order");
            navigate("/login");
            return;
        }

        setLoading(true);

        try {
            let orderItems = [];

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(
                            products.find(product => product._id === items)
                        );

                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            const orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            };

            switch (method) {

                case 'cod': {
                    const toastId = toast.loading("Placing order...");

                    const res = await axios.post(
                        backendUrl + '/api/order/place',
                        orderData,
                        { headers: { token } }
                    );

                    toast.dismiss(toastId);
                    setLoading(false);

                    if (res.data.success) {
                        setCartItems({});
                        navigate('/orders');
                    } else {
                        toast.error(res.data.message);
                    }
                    break;
                }

                case 'stripe': {
                    const toastId = toast.loading("Redirecting to Stripe...");

                    const res = await axios.post(
                        backendUrl + '/api/order/stripe',
                        orderData,
                        { headers: { token } }
                    );

                    if (res.data.success && res.data.session_url) {
                        toast.dismiss(toastId);
                        window.location.replace(res.data.session_url);
                    } else {
                        toast.dismiss(toastId);
                        setLoading(false);
                        toast.error("Stripe payment failed");
                    }
                    break;
                }

                case 'razorpay': {
                    const toastId = toast.loading("Preparing Razorpay payment...");

                    const res = await axios.post(
                        backendUrl + '/api/order/razorpay',
                        orderData,
                        { headers: { token } }
                    );

                    toast.dismiss(toastId);

                    if (res.data.success) {
                        initPay(res.data.order);
                    } else {
                        setLoading(false);
                        toast.error(res.data.message || "Razorpay order failed");
                    }
                    break;
                }

                default:
                    setLoading(false);
                    toast.error("Select payment method");
            }

        } catch (error) {
            setLoading(false);
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'
        >
            {/* LEFT */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>

                <div className='flex gap-3'>
                    <input required name='firstName' value={formData.firstName} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='First name' />
                    <input required name='lastName' value={formData.lastName} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='Last name' />
                </div>

                <input required name='email' value={formData.email} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='Email' />
                <input required name='street' value={formData.street} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='Street' />

                <div className='flex gap-3'>
                    <input required name='city' value={formData.city} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='City' />
                    <input name='state' value={formData.state} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='State' />
                </div>

                <div className='flex gap-3'>
                    <input required name='zipcode' value={formData.zipcode} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='Zipcode' />
                    <input required name='country' value={formData.country} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='Country' />
                </div>

                <input required name='phone' value={formData.phone} onChange={onChangeHandler} className='border px-3.5 py-1.5 w-full rounded' placeholder='Phone' />
            </div>

            {/* RIGHT */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>

                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />

                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`h-3.5 w-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} />
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>

                        <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`h-3.5 w-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`} />
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>

                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`h-3.5 w-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`} />
                            <p className='text-gray-500 text-sm mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className='w-full text-end mt-8'>
                        <button
                            type='submit'
                            disabled={!token || loading}
                            className={`bg-black text-white px-16 py-3 text-sm
                              ${loading || !token ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? "PROCESSING..." : "PLACE ORDER"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
