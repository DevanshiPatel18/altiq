import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createNews } from "../actions/news";
import fileUploadService from "../service/fileUploadService";

const AddNews = () => {
  const initialNewsState = {
    id: null,
    title: "",
    content: "",
    publishedBy: "",
    createdAt: "",
    imageURL: ""
  };
  const [news, setNews] = useState(initialNewsState);
  const [submitted, setSubmitted] = useState(false);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [imageInfos, setImageInfos] = useState([]);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNews({ ...news, [name]: value });
  };

  useEffect(() => {
    fileUploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  const upload = () => {
    

    fileUploadService.upload(currentFile, (event) => {
     setPreviewImage(currentFile)
    })
      .then((response) => {
       
        return fileUploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setCurrentFile(undefined);
      });
  };

  useEffect(() => {
    fileUploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  const saveNew = () => {
    const { title, content, imageURL, publishedBy } = news;

    dispatch(createNews(title, content, imageURL, publishedBy))
      .then(data => {
        console.log(data);
        setNews({
          id: data.id,
          title: data.title,
          content: data.content,
          publishedBy: data.publishedBy,
          imageURL: data.imageURL,
          createdAt: Date.now()

        });
        setSubmitted(true);
        
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newNew = () => {
    setNews(initialNewsState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form d-flex justify-content-center">
        <div className="m-4 col-md-5">
         
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={news.title}
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
              value={news.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageURL">Upload Image</label>
            <input className="form-control" type="file" name="imageURL" id="imageURL" required value={news.imageURL} onChange={handleInputChange} accept=".jpg,.jpeg,.png"/>
            {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}
          </div>

          
          <div className="form-group">
            <label htmlFor="publishedBy">Published By</label>
            <input className="form-control" type="text" name="publishedBy" id="publishedBy" value={news.publishedBy} onChange={handleInputChange} required/>
          </div>

          <button onClick={saveNew} className="btn btn-success">
            Submit
          </button>
        
        </div>
    
    </div>
  );
};

export default AddNews;
