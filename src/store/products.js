const GET_PRODUCTS_INIT = "GET_PRODUCTS_INIT";
const GET_PRODUCTS_DONE = "GET_PRODUCTS_DONE";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export function getProductsInit() {
  return {
    type: GET_PRODUCTS_INIT
  };
}

export function getProductsDone(categoryName, products) {
  return {
    type: GET_PRODUCTS_DONE,
    payload: { categoryName, products }
  };
}

export function getProductsError(error) {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error
  };
}

export function productsReducer(
  state = {
    data: {
      // cat: products
    },
    isLoading: false,
    loadError: null
  },
  action
) {
  switch (action.type) {
    case GET_PRODUCTS_INIT:
      return { ...state, isLoading: true, loadError: null };
    case GET_PRODUCTS_DONE:
      return {
        ...state,
        isLoading: false,
        // list: action.payload,
        data: {
          ...state.data, // { jew: [....], electronics: [...] }
          [action.payload.categoryName]: action.payload.products
        }
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, isLoading: false, loadError: action.payload };
    default:
      return state;
  }
}
