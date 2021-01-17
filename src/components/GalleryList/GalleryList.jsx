import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import Container from 'react-bootstrap/Container'


function GalleryList ({
    gallery,
    getGallery
}){

    console.log('should be gallery:',gallery);
    return (
        <div>
            {gallery.map(item => 
                (
                <GalleryItem
                key = {item.id}
                item = {item}
                getGallery = {getGallery}
                />
                )
            )}
        </div>
    )
}

export default GalleryList;
