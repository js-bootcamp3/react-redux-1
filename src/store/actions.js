import * as actions from './actionTypes';

export const addProduct = (data) => ({
  type: actions.ADD_PRODUCT,
  payload: data
});

export const removeProduct = (productId) =>({
  type: actions.REMOVE_PRODUCT,
  productId: productId
})


export const checkProduct = (productId) =>({
  type: actions.CHECK_PRODUCT,
  productId: productId
})
