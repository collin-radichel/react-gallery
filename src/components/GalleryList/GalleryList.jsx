import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryList/GalleryList.css'

function GalleryList ({
    gallery
}){

    console.log('should be gallery:',gallery);
    return (
        <div>
            {gallery.map(item => 
                (
                <GalleryItem
                key = {item.id}
                item = {item}
                />
                )
            )}
        </div>
    )
}

export default GalleryList;
