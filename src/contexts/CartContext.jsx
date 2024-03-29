import React, {useState, createContext, useEffect} from 'react'


export const CartContext = createContext()


const CartProvider = ({children}) => {
  //Cart State
  const [cart, setCart] = useState([])
  //item amount state
  const [itemAmount, setItemAmount] = useState(0)
  //total price amount
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });



  //update amount cart
  useEffect(() => {
if(cart) {
  const amount = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);
  setItemAmount(amount);
}
  }, [cart])

    //Add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    {/*Check if item already in*/}
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    {/*if item already in*/}
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else{
          return item;
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  //Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart)
  }

  //Increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id);
;  }

  //Decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
     return item.id === id
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } 
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
  }


  //Clear cart
  const clearCart = () => {
    setCart([])
  }

  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>{children}</CartContext.Provider>;
}

export default CartProvider;