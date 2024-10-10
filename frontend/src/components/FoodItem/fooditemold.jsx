import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    const[itemCount,setItemCount]=useState(0)
 const{cartItem,addToCart,removeFromCart}=useContext(StoreContext)
    return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt='' />
        {!itemCount
              //if count of fooditem is 0
              ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}alt=""/>
              //   if greater than 0 ,make counter
              :<div className='food-item-counter' >
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=""/>
                <p>{itemCount}</p>
                <img  onClick={()=>setItemCount(prev=>prev+1)}src={assets.add_icon_green} alt=""/>
                </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
//navbar,header component,menu selection component,food display component