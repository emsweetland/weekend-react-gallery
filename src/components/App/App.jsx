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
  });


  //GET via axios... ty getGallery
  const getGallery = () => {
    axios.get('/gallery') //via /gallery
    .then((response) => {
      console.log(response.data); // receive data from server
    }).catch((err) => {
      alert('couldn\'t get gallery, sorry');
      console.log('error', err);
    });
  }


  //PUT via axios.. count those likes
  const countLikes = (item, affection) => {
    axios.put(`/gallery/likes/${item.id}`, {likes:item.likes}) //target an items likes via id then change likes
    .then((response) => {
      getGallery(); //get updated data right away!
    }).catch((err) => {
      alert('couldnt like');
      console.log('error updating likes', err);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList
          galleryList={galleryList}
          countLikes={countLikes}/>
      </div>
    );
}

export default App;
