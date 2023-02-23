let initialData = {
    cartitems : []
}
const CartReducer = (state =initialData , action) =>{
    switch(action.type) {
        case "ADDCARTITEM" : return {
            ...state,
            cartitems:[...state.cartitems, action.payload]
        }
        case "DELETEITEM" : return {
            ...state,
            cartitems : action.payload
        }
    }
    return state;
}
export default CartReducer;