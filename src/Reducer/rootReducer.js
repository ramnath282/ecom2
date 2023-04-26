import { combineReducers } from "redux";
import ItemReducer from "./ItemReducer";
import CartReducer from "./CartReducer";
import FilterReducer from "./FilterReducer"
const rootReducer = combineReducers({
  ItemReducer: ItemReducer,
  FilterReducer: FilterReducer,
  CartReducer: CartReducer,
});
export default rootReducer;
