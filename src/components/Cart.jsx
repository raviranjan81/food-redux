import React, { useState } from 'react'
import ItemCart from './ItemCart'
import cart from "../assets/cart.png";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Cart() {
    const [toggle, setToggle] = useState(false)
    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty=cartItems.reduce((totalQty,item)=>totalQty+item.qty,0)
    const totalPrice=cartItems.reduce((totalPrice,item)=>totalPrice+item.qty*item.price,0)
    const navigate=useNavigate();
    return (
        <>
            <div className="mx-6">
                <div onClick={() => { setToggle(!toggle) }} className={`fixed bottom-2 right-1 bg-yellow-400 border border-blue-500 hover:bg-green-500 duration-300 ease-linear transition-all p-2 box-border rounded-full shadow-lg cursor-pointer ${totalQty > 0 && "animate-bounce delay-400 transition-all"}`}>
                    <img src={cart} alt="cart" className='w-5' />
                </div>
                <div className={`fixed right-0 top-0 w-full lg:w-[25vw] overflow-y-auto  ${toggle ? "translate-x-0" : "translate-x-full"} rounded-lg bg-white h-full transition-all duration-200 p-5 `}>
                    <div className="flex justify-between items-center  ">
                        <h2 className='text-xl font-semibold'>My Order</h2>
                        <h2 onClick={() => { setToggle(!toggle) }} className='text-xl border h-9 w-9 hover:rotate-180 hover:border-black  border-red-600 hover:scale-105 cursor-pointer duration-200 hover:text-red-500 justify-center flex rounded-full '>x</h2>
                    </div>
                    <hr className='mt-2 absolute left-0 right-0' />
                    <div className="pt-[2rem]">
                    
                        {cartItems.length > 0 ? cartItems.map((food) => {
                            return (<ItemCart
                                key={food.id}
                                name={food.name}
                                img={food.img}
                                price={food.price}
                                qty={food.qty}
                                id={food.id}
                            />
                            );
                        }) : <h2 className='text-xl font-bold text-center'>Your Cart is Empty</h2>}

                    </div>

                    {
                        cartItems != 0 ? <div className=" bottom-0 left-5">
                            <h3 className='font-semibold '>Items : <span className='font-bold'>{totalQty}</span> </h3>
                            <h3 className='font-semibold '>Total Amount : <span className='font-bold'>{totalPrice}</span> </h3>
                            <button onClick={()=>{navigate('/success')}} className='w-[90vw] lg:w-[21.2vw] my-2 rounded-lg hover:bg-gray-800 duration-200 transition-all shadow-lg py-2 font-bold text-xl text-white bg-green-500 '>Checkout</button>
                        </div> : ''
                    }

                </div>
            </div>
        </>
    )
}

export default Cart