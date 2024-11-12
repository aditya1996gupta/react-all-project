// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, updateQuantity }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            />
                        </div>
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;
