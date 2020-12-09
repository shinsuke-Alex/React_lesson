import React from 'react';
import CartItem from './CartItem';

function Cart({ initialItems }) {
  return (
    <div>
      <ul>
        {initialItems.map(item => (
            <CartItem {...item} />
        ))}
      </ul>
    </div>
  )
}

export default Cart;