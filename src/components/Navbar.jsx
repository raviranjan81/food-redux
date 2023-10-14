import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'
function Navbar() {
  const dispatch=useDispatch();
  return (
    <>
        <div className="flex-col md:flex-row flex gap-3  md:justify-between px-6 py-3">
            <div className="">
                <h2 className='text-xl font-bold text-slate-600'>{new Date().toUTCString().slice(0,16)}</h2>
                <h2 className='text-2xl font-bold'>Food Point</h2>
            </div>
            <div className="">
                <input onChange={(e)=>{dispatch(setSearch(e.target.value))}} type="text" placeholder='Search here . . .' className='rounded-md focus:border-indigo-400 md:w-[350px] w-full outline-none border px-3 py-2' />
            </div>
        </div>
    </>
  )
}

export default Navbar