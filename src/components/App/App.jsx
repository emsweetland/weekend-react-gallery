import React, { useState, useEffect } from 'react';
import './App.css'; //for style
import axios from 'axios'; //for routing
import GalleryList from '../GalleryList/GalleryList'



function App() {
  
  // starting with empty array, passed to GalleryList.jsx
  let [galleryList, setGalleryList] = useState([]);

  // run when component is first put on DOM
    useEffect(() => {
    getGallery();
  }, []); //square brackets keep away endless loop

  //GET via axios... ty getGallery
  const getGallery = () => {
    axios.get('/gallery') //via /gallery
    .then((response) => {
      console.log(response.data); // receive data from server
      setGalleryList(response.data); // image objects sent to GalleryList array
    }).catch((err) => {
      alert('couldn\'t get gallery, sorry');
      console.log('error', err);
    });
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList
          galleryList={galleryList}/>
      </div>
    );
}

export default App;
