//GalleryList is like the table of the database
    //via App.jsx //galleryList is the array, countLikes contains axios PUT function

import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({ galleryList, countLikes}) {
//GalleryList will map out each image in the array by id along with it's like count
    return(
        <div>
        <h2>my gallery</h2>
        <table>
            <thead>
                <tr>
                    <th>a photo :)</th>
                </tr>
            </thead>
            <tbody> 
                {galleryList.map((image) => (
                    <GalleryItem
                        key={image.id}
                        image={image}
                        countLikes={countLikes}/>
                ))} 
            </tbody>
        </table>
        </div>
    );
}

export default GalleryList; 
//now other components may reference this one once it's been imported to App.jsx