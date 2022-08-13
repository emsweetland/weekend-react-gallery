import React, { useState, useEffect } from 'react';
import './App.css'; //for style
import axios from 'axios'; //for routing



function App() {

let [galleryItem, setGalleryItem] = useState([])

    // run the component
    useEffect(() => {
    getGallery();
  });


  //GET via axios... ty getGallery
  const getGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log(response.data);
    }).catch((err) => {
      alert('couldn\'t get gallery, sorry');
      console.log('error', err);
    });
  }


  //PUT via axios.. count those likes
  const countLikes = (item, affection) => {
    axios.put(`/gallery/likes/${item.id}`, {likes:item.likes})
    .then((response) => {
      getGallery();
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
      </div>
    );
}

export default App;
