import { useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {

  const [gallery, setGallery] = useState([]);


  // GET function 
  const getGallery = () => {
    axios.get('/gallery').then((response) => {
      setGallery(response.data)
      console.log('response.data: ', response.data);
      
    }).catch(err => {
      console.log(err);
    })
  }

     //on load
     useEffect(() => {
      getGallery();
  }, []);

  console.log('gallery:', gallery);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
        gallery={gallery}
        getGallery={getGallery}
        />
      </div>
    );
}

export default App;
