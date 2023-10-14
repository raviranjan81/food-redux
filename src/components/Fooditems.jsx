import React from 'react'
import FoodCard from './FoodCard'
import FoodData from './FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
function Fooditems() {
    const hand=(name)=>{
        toast.success(` Item added ${name} to cart`);
    }

    const category=useSelector((state)=>state.category.category);
    const search=useSelector((state)=>state.search.search);
  return (
    <><Toaster
    position="top-right"
    reverseOrder={false}
  />
        <div className="flex flex-wrap gap-5 mb-[5rem] justify-center lg:justify-start mx-6 items-center">
            {
                FoodData.filter((food)=>{
                    if(category==="All"){
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    }else{
                       return category===food.category && food.name.toLowerCase().includes(search.toLowerCase());
                    }
                }).map((food)=>{
                    return(
                        <FoodCard hand={hand} key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc} cate={food.category} img={food.img} rating={food.rating}/>
                    )
                })
            }
        </div>
    </>
  )
}

export default Fooditems