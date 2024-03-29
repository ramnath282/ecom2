import {Actiontypes} from "../Actions/types"
let initialData = {
    products : []
}
const ItemReducer = (state = initialData, action) => {
  switch (action.type) {
    case Actiontypes.FETCHPRODUCTS:
      return {
        ...state,
        products: action.payload
      };
  }
  return state;
};
export default ItemReducer;
