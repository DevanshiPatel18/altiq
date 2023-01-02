import {
    CREATE_NEWS,
    RETRIEVE_NEWS,
    UPDATE_NEWS,
    DELETE_NEWS,
  } from "./types";
  
  import NewsService from "../service/NewsService";
  
  export const createNews = (title, description) => async (dispatch) => {
    try {
      const res = await NewsService.create({ title, description });
      console.log(res);
      dispatch({
        type: CREATE_NEWS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveNews = () => async (dispatch) => {
    try {
      const res = await NewsService.getAll();
      console.log(res);
      dispatch({
        type: RETRIEVE_NEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const findNewsByTitle = (title) => async (dispatch) => {
    try {
      const res = await NewsService.get(title);
  
      dispatch({
        type: RETRIEVE_NEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateNews = (id, data) => async (dispatch) => {
    try {
      const res = await NewsService.update(id, data);
  
      dispatch({
        type: UPDATE_NEWS,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteNews = (id) => async (dispatch) => {
    try {
      await NewsService.delete(id);
  
      dispatch({
        type: DELETE_NEWS,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getNewsWithId = (id) => async (dispatch) => {
    try {
      await NewsService.get(id);
  
      dispatch({
        type: RETRIEVE_NEWS,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  