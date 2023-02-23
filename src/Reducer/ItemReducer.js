let initialData = {
  products: [],
};
const ItemReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADDITEM":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      case "FILTERITEM":
        return{
          ...state,
          products: action.payload
        }
  }
  return state;
};
export default ItemReducer;
