import React, { useState, useEffect } from 'react'
import FoodData from './FoodData';
import { useDispatch,useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategoriesSlice';

function Listitem() {
  const [categories, setCategories] = useState([]);
  const listCategory = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category )),];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  }
  useEffect(() => {
    listCategory();
  }, []);




  const dispatch=useDispatch();
  const selectedCategory=useSelector((state)=> state.category.category);

  return (
    <>
      <div className="px-6 mt-3 mb-20">
        <h3 className='text-2xl font-semibold'>Find the best food</h3>

        <div className="flex overflow-x-scroll mt-1 md:overflow-x-hidden  gap-3">
          <button onClick={()=>{dispatch(setCategory('All'))}} className={`bg-gray-300 shadow cursor-pointer duration-200 ease-in hover:text-white font-semibold hover:bg-blue-600 px-4 py-1 rounded text-black ${selectedCategory==="All" && "bg-blue-600 text-white"}`}>All</button>

          {
            categories.map((cate,index)=>{
              return(
                  <button
                  key={index}
                  onClick={() => dispatch(setCategory(cate))}
                  className={`bg-gray-300 shadow cursor-pointer duration-200 ease-in hover:text-white font-semibold hover:bg-blue-600 px-4 py-1 rounded text-black ${
                    selectedCategory === cate ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {cate}
                </button>
             
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Listitem