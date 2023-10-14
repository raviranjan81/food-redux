import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { MoonLoader } from 'react-spinners';


function Success() {
  const navigate = useNavigate();
  const [lod, setLod] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLod(false)
    }, 3000)
  }, []);
  return (
    <div className="">
      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        {lod ? (
          <MoonLoader color='#2c33d8' />
        ) : (
          <>
            <h2 className='font-bold'>Order Success!</h2>
            <p>Your order has been successfully placed</p>
            <button
              onClick={() => navigate('/')}
              className='w-[90vw] lg:w-[21.2vw] my-2 rounded-lg hover:bg-gray-800 duration-200 transition-all shadow-lg py-2 font-bold text-xl text-white bg-green-500'
            >
              Home
            </button>
          </>
        )}
      </div>
    </div>
  );
        }

export default Success