import {useEffect, useState} from 'react';
import axios from 'axios';
import './GalleryItem.css'

function GalleryItem({image, refreshData}) {

    const [showDescription, setShowDescription] = useState(false)

    function countLikes (image){
        axios.put('gallery/like/:id', {likes: image.likes})
        .then ((response) => {
      
        }).catch((err) => {
            alert('couldnt like');
            console.log('uh oh', err);
        });
        };

    //sends appending info to be used in GalleryList
    return (
        <div onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? (
                <h6>{image.description}</h6>
                ) : (
                <img className="galleryItem" src={image.path}/>
                )} 



            <p>{image.title}{image.likes}</p>
            <button onClick={() => countLikes(image)}>Like!</button>

        </div>
    )
}

export default GalleryItem;
//sent to GalleryList