import Button from 'react-bootstrap/Button';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css';
import GalleryList from ''

function App() {

  let [gallery, setGallery] = useState([]);

   //on load
   useEffect(() => {
    getGallery()
}, [])


  // GET function 
  const getGallery = () => {
    axios.get('/gallery').then(response => {
      setGallery(response.data)
      console.log(response.data);
    }).catch(err =>{
      console.log(err);
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <Button variant="secondary">Secondary</Button>
      </div>
    );
}

export default App;
