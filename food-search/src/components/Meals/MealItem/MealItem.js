import React, {useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props)=>{
     const cartCtx= useContext(CartContext);
    //backtics alt+96
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount:amount,
            price:props.price
        })
    };
  return (
      <div className={classes.meal}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
          <div>
              <MealItemForm onAddToCart={addToCartHandler}/>
          </div>
      </div>
  )
}
export default MealItem; 