import { useDispatch } from "react-redux"
import {removeFromCart,incrementQty,decrementQty} from "../redux/slices/CartSlice"
import { Toaster, toast } from "react-hot-toast";

function ItemCart({id,img,price,qty,name,}) {   
const dispatch=useDispatch();
<Toaster
  position="top-left"
  reverseOrder={false}
/>
    return (
        <>
            <div className="bg-yellow-200 my-2 p-3 shadow-md border border-blue-500">
                <div className="flex">
                    <img src={img} className='w-[50px] h-[50px] rounded-full shadow' alt="" />
                    <div className="flex justify-between w-full">
                        <div className="ml-3">
                            <h2 className='font-semibold '>{name}</h2>
                            <h3 className='font-bold text-green-600 capitalize '>₹{price}</h3>
                        </div>
                        <div className="">
                         <div className="flex justify-end">
                         <h2 onClick={()=>{dispatch(removeFromCart({id,img,name,price,qty}))
                         toast(`${name} Item Removed`, {
                            icon: '👋',
                            });
                         }
                         } className='border border-red-600  text-center h-8 w-8 hover:rotate-180   hover:scale-105 cursor-pointer duration-200 hover:text-red-500 justify-center flex rounded-full '>x</h2>
                         </div>
                          <div className="flex justify-center items-center gap-3">
                            <button onClick={()=>{
                               qty>1 ? dispatch(decrementQty({id})):(qty=0)}} className='w-5 grid content-center rounded-full transition-all duration-150 font-semibold  hover:bg-red-500 hover:text-white h-5 border'>-</button>
                            <h2 className="font-semibold">{qty}</h2>
                            <button onClick={()=>{dispatch(incrementQty({id}))}} className='w-5 grid content-center rounded-full transition-all duration-150 font-semibold  hover:bg-green-500 hover:text-white h-5 border'>+</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCart