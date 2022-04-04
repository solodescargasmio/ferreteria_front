
import React, { useReducer, useState } from 'react'
import productReducer, { initialProductState } from '../reducer/productReducer';
import types from '../helpers/types';



const ProductApp = () => {
    const [productState,dispatch] = useReducer(productReducer,initialProductState);
    const {products, cart} = productState;
  return (
    <div>
       <h2>ProductApp</h2> 
            <ul>
                {products.map(
                    product => (<li key={product.id}>{product.producto}   
                    <button onClick={()=> dispatch({
                        type:types.PRODUCT_SHOW,
                        payload:product.id
                    })}>Show¦</button>
                    <button onClick={()=>dispatch({
                        type:types.PRODUCT_ADD,
                        payload:product.id
                    })}>
                        Add+</button></li>)
                )}
            </ul>
            <h2>Cart</h2> 
            <ul>
                {cart.map(product=>(<li key={product.id}>{product.producto} - Cantidad: {product.cantidad}  
                <button onClick={()=>dispatch({
                    type:types.PRODUCT_REMOVE_ONE,
                    payload:product.id
                })}>RemoveOne-</button>
                <button onClick={()=>dispatch({
                    type:types.PRODUCT_REMOVE_ALL,
                    payload:product.id
                })}>RemoveAll«</button></li>))}
                
            </ul>
    </div> 
  )
}

export default ProductApp