import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsWithId, updateNews,} from "../actions/news";
import NewsService from "../service/NewsService";

export default function EditNews(props){
    console.log(props.match.params.id+"hefhnsdfh")
  const initialTutorialState = {
    id: null,
    title: "",
    content: "",
    publishedBy: "",
    createdAt: "",
    imageURL: ""
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);

  const dispatch = useDispatch();

  const getTutorial = id => {
    NewsService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getNewsWithId(props.match.params.id)
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updateContent = () => {
    dispatch(updateNews(currentTutorial.id, currentTutorial))
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      <form action="PUT">
        <div>
   
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={currentTutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              className="form-control"
              id="content"
              required
              maxLength={500}
              value={currentTutorial.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageURL">Upload Image</label>
            <input className="form-control" type="file" name="imageURL" id="imageURL" required value={currentTutorial.imageURL} onChange={handleInputChange} accept=".jpg,.jpeg,.png"/>
            {currentTutorial.imageURL && (
                <div>
                <img className="preview" src={currentTutorial.imageURL} alt="" />
                </div>
            )}
          </div>

          
          <div className="form-group">
            <label htmlFor="publishedBy">Published By</label>
            <input className="form-control" type="text" name="publishedBy" id="publishedBy" required value={currentTutorial.publishedBy} onChange={handleInputChange} />
          </div>

          <button onSubmit={updateContent} className="btn btn-success">
            Submit
          </button>
        </div>
        </form>
        </div>
  
  );
};

