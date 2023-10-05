const OPEN_CART = "OPEN_CART";
const CLOSE_CART = "CLOSE_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function openCart() {
  return { type: OPEN_CART };
}

export function closeCart() {
  return { type: CLOSE_CART };
}

export function addItemToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

export function removeItemFromCart(product) {
  return { type: REMOVE_FROM_CART, payload: product };
}

export function cartReducer(
  state = {
    items: {},
    isOpen: false
  },
  action
) {
  switch (action.type) {
    case REMOVE_FROM_CART:
      if (state.items[action.payload.id].quantity === 1) {
        const newItems = { ...state.items };
        delete newItems[action.payload.id];
        return { ...state, items: newItems };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: {
              ...state.items[action.payload.id],
              quantity: state.items[action.payload.id].quantity - 1
            }
          }
        };
      }
    case ADD_TO_CART: {
      if (state.items[action.payload.id]) {
        // Same as below
        // const newItems = { ...newState.items };
        // newItems[action.payload.id] = {
        //   ...newItems[action.payload.id],
        //   quantity: newItems[action.payload.id].quantity + 1
        // };

        // return { ...state, items: newItems };

        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: {
              ...state.items[action.payload.id],
              quantity: state.items[action.payload.id].quantity + 1
            }
          }
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: {
              ...action.payload,
              quantity: 1
            }
          }
        };
      }
    }
    case OPEN_CART:
      return { ...state, isOpen: true };
    case CLOSE_CART:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
