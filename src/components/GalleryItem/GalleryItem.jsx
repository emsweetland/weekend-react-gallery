function countLikes (){
    image.likes += 1}


function GalleryItem({image}) {
    return (
        <tr key={image.id}>
            <td><img src={image.path}/></td>
            <td><p>{image.title}{image.desc}{image.likes}</p></td>
            <td>
                <button onClick={() => (console.log('clicked'))}>Like!</button>
            </td>
        </tr>
    )
}

export default GalleryItem;
//send to GalleryList