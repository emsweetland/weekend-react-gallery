import {useEffect, useState} from 'react';
import axios from 'axios';

function GalleryItem({image}) {

    function countLikes (image, getGallery){
        image.likes += 1;
        console.log('clicked like')
        console.log(image.likes)
        axios.put('gallery/like/:id', {likes: image.likes})
        .then ((response) => {
            console.log(image.likes);
            getGallery();
        }).catch((err) => {
            alert('couldnt like');
            console.log('uh oh', err);
        });
        };

    //sends appending info to be used in GalleryList
    return (
        <tr key={image.id}>
            <td><img src={image.path}/></td>
            <td><p>{image.title}{image.desc}{image.likes}</p></td>
            <td>
                <button onClick={() => countLikes(image)}>Like!</button>
            </td>
        </tr>
    )
}

export default GalleryItem;
//sent to GalleryList