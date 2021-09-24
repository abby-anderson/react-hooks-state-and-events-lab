import React, { useState } from "react";




function Item({ name, category }) {
  //we'll start with false aka item is not in cart, so we want 'add to cart' in our button text.
  //when item IS in cart, we want button text to be 'remove from cart'

  const [isInCart, setIsInCart] = useState(false)
  
  
  function handleAddOrRemove () {
    console.log(name);
    // isInCart ? ()=>setIsInCart((isInCart)=>!isInCart) : null;
      setIsInCart( (isInCart) => !isInCart );

  }



  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddOrRemove} > {isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
