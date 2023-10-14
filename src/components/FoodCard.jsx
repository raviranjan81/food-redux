import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'
function FoodCard({id,name,price,rating,desc,cate,img,hand}) {
  const dispatch=useDispatch();

  return (
    <div className=''>
        <div className="w-60 overflow-hidden bg-white rounded-md shadow-lg p-4">
            <img className='hover:scale-105 duration-200 w-full h-[130px]'  src={img} alt="food-img" />
           <div className="flex justify-between my-2">
                <h2 className='font-bold capitalize '>{name.slice(0,15)}...</h2>
                <h3 className='font-bold text-green-600 capitalize '>₹{price}</h3>
           </div>
           <p className='font-semibold line-clamp-2'>{desc.slice(0,30)}...</p>
           <div className="flex justify-between items-center mt-3">
            <h2 className='font-bold' ><span className='text-yellow-400 '>★</span><span className='text-sm'>{rating}</span></h2>
            <button onClick={()=>{
              dispatch(addToCart({id,name,img,rating,price,qty:1}));
              hand(name);
            }} className='font-bold bg-green-500 text-white rounded-full px-2 py-1'  href="">Add to cart</button>
           </div>
        </div>
    </div>
  )
}

export default FoodCard