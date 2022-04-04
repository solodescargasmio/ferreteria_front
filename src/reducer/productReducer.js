import { type } from '@testing-library/user-event/dist/type'
import types from '../helpers/types'

const initialProductState={
     products:[
        {id:"1",precio:"1500",producto:"Pintura Negra 20lts",cedulaProveedor:"1234567" },
        {id:"2",precio:"400",producto:"Barniz 4lts",cedulaProveedor:"1234567" },
        {id:"3",precio:"565",producto:"Lija 30mm 10mts",cedulaProveedor:"1234567" },
        {id:"4",precio:"350",producto:"Pinza Morsa",cedulaProveedor:"1234567" },
        {id:"5",precio:"3650",producto:"Taladro percutor 1500w",cedulaProveedor:"1234567" },
    ],
    
    cart:[{id:"",producto:"",cantidad:0}],

}

const productReducer=(state,action)=>{
    switch(action.type){
        case types.PRODUCT_ADD:{
            const newProduct = state.cart.find(product=>product.id===action.payload);
            return newProduct
            ?{...state,cart:state.cart.map(product=>product.id===newProduct.id
                ?{...product,cantidad:product.cantidad+1}
                :
                product)}
            :{
                ...state, cart:[...state.cart, {...state.products.find(product=>product.id===action.payload),
                cantidad:1}]
            }
        } 

        case types.PRODUCT_REMOVE_ALL:
            return{
                ...state,cart:state.cart.filter(product=>product.id!==action.payload)
            }

        case types.PRODUCT_REMOVE_ONE:{
            const productDelete=state.cart.find(product=>product.id===action.payload)
            return productDelete.cantidad >1
            ?{...state,cart:state.cart.map(product=>product.id===action.payload
                ?{...product,cantidad:product.cantidad-1}
                :
                product
                )}
             :{...state,cart:state.cart.filter(product=>product.id!==action.payload)}   
        }
        default: 
            return state
    }
}

export { initialProductState }

export default productReducer;



