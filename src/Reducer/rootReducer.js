import { combineReducers } from "redux";
import ItemReducer from "./ItemReducer";
import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
  ItemReducer: ItemReducer,
  CartReducer: CartReducer,
});
export default rootReducer;
