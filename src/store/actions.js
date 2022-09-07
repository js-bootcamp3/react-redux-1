import * as actions from './actionTypes';
import axios from 'axios';
const baseURL = 'https://api.sampleapis.com/codingresources/codingResources';
const reqresAPI = 'https://reqres.in/'

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

export const setUsers = (data) => ({
  type: actions.RECEIVE_USERS,
  payload: data
})

export const getUsers = () => ({
  type: actions.FETCH_USERS
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

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${reqresAPI}api/users`);
      dispatch(setUsers(response.data.data))
    } catch (error) {
      console.error(error);
    }
  }
}

export const saveUser = (payload) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${reqresAPI}api/users`, payload);
      console.log('post response', response)
    } catch (error) {
      console.error(error);
    }
  }
}
