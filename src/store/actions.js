import * as actions from './actionTypes';
import axios from 'axios';
const baseURL = 'https://api.sampleapis.com/codingresources/codingResources';

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

export const setData = (data) => ({
  type: actions.RECEIVE_DATA,
  payload: data
})

export const getData = () => ({
  type: actions.FETCH_DATA
})

export const fetchData = () => {
  return async (dispatch, getState) => {

    if (getState().data.length > 1) return;
    dispatch(getData())

    try {
      const response = await axios.get(baseURL);
      console.log('response', response)

      dispatch(setData(response.data))
    } catch (error) {
      console.error(error);
    }
  }
}
