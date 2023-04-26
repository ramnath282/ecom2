import { Actiontypes } from './../Actions/types';
let initialData = {
    cartitems : []
}
const CartReducer = (state =initialData , action) =>{
    switch(action.type) {
        case Actiontypes.ADDCARTITEM : return {
            ...state,
            cartitems: action.payload
        }
        case Actiontypes.DELETECARTITEM : return {
            ...state,
            cartitems : action.payload
        }
    }
    return state;
}
export default CartReducer;