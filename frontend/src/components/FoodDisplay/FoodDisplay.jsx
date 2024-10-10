import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(category==="All"||category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
    }    
        })}
      </div>
    </div>
  )
}

export default FoodDisplay











// This code snippet is likely part of a filtering logic that displays FoodItem components based on the selected category
//This code conditionally renders a FoodItem component based on whether the selected category is "All" or if the current item's category matches the selected category. If the condition is true, the FoodItem is returned and displayed with its corresponding information (ID, name, price, description, and image).
//category === "All": This allows all items to be shown when the "All" category is selected.
//category === item.category: This checks if the current item's category matches the selected category. If true, this item should be displayed.