// Store -> State of App

// state = null
// state = categoriesReducer(state, { type: 'some-random' }); => { loadError: null, isLoading: false, list: [] }
// state = categoriesReducer(state, { type: 'ADD_CATEGORIES', payload: ['electronics', 'clothes'] } )
//   => => { loadError: null, isLoading: false, list: ['electronics', 'clothes'] }

const GET_CATEGORIES_INIT = "GET_CATEGORIES_INIT";
const GET_CATEGORIES_DONE = "GET_CATEGORIES_DONE";
const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

export function getCategoriesInit() {
  return { type: GET_CATEGORIES_INIT };
}

export function getCategoriesDone(categories) {
  return { type: GET_CATEGORIES_DONE, payload: categories };
}

export function getCategoriesError(error) {
  return { type: GET_CATEGORIES_ERROR, payload: error };
}

export function categoriesReducer(
  state = { loadError: null, isLoading: false, list: [] },
  action // { type, payload }
) {
  switch (action.type) {
    case GET_CATEGORIES_INIT:
      // state.isLoading = true;
      // state.loadError = null;
      // return state;
      return { ...state, isLoading: true, loadError: null };
    case GET_CATEGORIES_DONE:
      // state.isLoading = false;
      // state.list = action.payload;
      // return state;
      return { ...state, isLoading: false, list: action.payload };
    case GET_CATEGORIES_ERROR:
      return { ...state, isLoading: false, loadError: action.payload };
    default:
      return state;
  }
}
