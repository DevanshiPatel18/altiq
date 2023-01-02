import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteNews,
  retrieveNews,findNewsByTitle
} from "../actions/news";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [searchTitle, setSearchTitle] = useState("");

  const news = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveNews());
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    news = dispatch(retrieveNews())
    
  };

  const deleteNewsWithID = (newsId) =>{
    dispatch(deleteNews(newsId))
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  }

  const findByTitle = () => {
    refreshData();
    dispatch(findNewsByTitle(searchTitle));
  };
  
  return (
    <div className="row m-3 col-md-8 m-auto">
      <div className="d-flex justify-content-center">
        <div className="input-group m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Id"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append m-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={(e) => {findByTitle(searchTitle)}}
            >
              Search
            </button>
          </div>
        </div>
        
      </div>
      <div className="">
        <h4 className="m-2">News List</h4>
        <div className="">
        <table class="table">
            <thead>
                <tr className="text-center align-middle">
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Published By</th>
                <th scope="col">Date Created</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                {news &&
                        news.map((news, index) => (
                        <tr className="text-center align-middle" key={news.id}>
                        <td>{news.id}</td>
                        <td>{news.title}</td>
                        <td>{news.publishedBy}</td>
                        <td>{news.createdAt}</td>
                        <td><button className="m-3 btn btn-sm btn-danger" id={news.id} onClick={(e)=>{deleteNewsWithID(news.id)}} key = {news.id} >Delete</button></td>
                        </tr>
                        ))}
            
            </tbody>
        </table>
        </div>
       
      </div>
      
    </div>
  );
};

export default NewsList;