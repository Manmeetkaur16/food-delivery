import { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)
const StoreContextProvider = props => {
  const [cartItem, setCartItem] = useState({})

  const addToCart = itemId => {
    //user add item for first time in cart
    if (!cartItem[itemId]) {
      setCartItem(prev => ({ ...prev, [itemId]: 1 }))
    }
    //if that item already exists
    else {
      setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = itemId => {
    //user add item for first time in cart
    if (!cartItem[itemId]) {
      setCartItem(prev => ({ ...prev, [itemId]: 1 }))
    }
    //if that item already exists
    else {
      setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
  }
  useEffect(() => {
    console.log(cartItem)
  }, [cartItem])

  const contextValue = {
    //any value or function inside contextvalue variable (object) which can be used in any component

    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider

//any elemnet inside this functoon can be accessed in any component usng context
//context r mainly used for sharing or consuming data across differemt components
//  you're using React's createContext function to create a new context called StoreContext, which will be used to manage and share state or data across different components in your application
//  createContext(null):

// createContext() is a function provided by React to create a Context object.
// A context allows you to pass data (like state) deeply through the component tree without needing to pass props down manually at every level.
// The argument passed to createContext(null) (in this case, null) is the default value for the context. This value is used when a component consumes the context but isn't wrapped in a provider that sets a different value.
// In this case, the default value is null.

// export const StoreContext:

// The StoreContext is created as a constant using createContext.
// The export keyword means you're making StoreContext available for use in other files. Other components can import this context to either provide or consume shared data.
// How It’s Used in React:
// Provider: You would wrap components with StoreContext.Provider to provide the context value, which can be shared by all children components.

// Consumer: Components can consume this context using useContext(StoreContext) or the StoreContext.Consumer component.
// }
