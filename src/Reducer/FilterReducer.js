import {Actiontypes} from "../Actions/types"
let initialData = {
    products : []
}
const FilterReducer = (state = initialData, action) => {
  switch (action.type) {
      case Actiontypes.FILTERPRODUCTDATA:
      return {
        ...state,
        products: action.payload
      };
  }
  return state;
};
export default FilterReducer;
