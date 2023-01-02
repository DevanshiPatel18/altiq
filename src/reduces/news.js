import {
    CREATE_NEWS,
    RETRIEVE_NEWS,
    UPDATE_NEWS,
    DELETE_NEWS,
  } from "../actions/types";
  
  const initialState = [];
  
  function newsReducer(news = initialState,action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_NEWS:
        return [...news, payload];
  
      case RETRIEVE_NEWS:
        return payload;
  
      case UPDATE_NEWS:
        return news.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
  
      case DELETE_NEWS:
        return news.filter(({ id }) => id !== payload.id);

      default:
        return news;
    }
  };
  
  export default newsReducer;
  