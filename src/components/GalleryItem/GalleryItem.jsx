import {useState} from 'react';
import '../GalleryItem/GalleryItem.css'

function GalleryItem({
    item
}) {
    return (
        <div>
           
            <p>{item.id}</p>
            <p>{item.path}</p>
            <p>{item.likes}</p>
            
        </div>
    )
}

export default GalleryItem;