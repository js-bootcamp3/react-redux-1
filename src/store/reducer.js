import * as actions from './actionTypes';

const initialState = {
  products: [],
  data: [],
  dataLoading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_STATE:
      return initialState
    
    case actions.ADD_PRODUCT: 
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case actions.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.productId)
      }
    case actions.CHECK_PRODUCT:

      return {
        ...state,
        products: state.products.map(product => {
          const newProduct = {...product}
          if (newProduct.id === action.productId) {
            newProduct.checked = !newProduct.checked
          }
          return newProduct
        })
      } 

    case actions.FETCH_DATA: 
      return {
        ...state,
        dataLoading: true
      }

    case actions.RECEIVE_DATA: 
      return {
        ...state,
        data: action.payload,
        dataLoading: false
      }

    default:
      return state;
  }
}