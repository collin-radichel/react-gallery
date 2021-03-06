import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import Swal from 'sweetalert2';
import axios from "axios";

function GalleryItem({ item, getGallery }) {

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleImage = () => {
    console.log("isDescriptionVisible is:", !isDescriptionVisible);
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleEnlargeImage = () => {
    Swal.fire({
        imageUrl: item.path,
        imageAlt: 'Custom image',
      })
  };

  const addLike = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log(error);
      });
  }; // end addLike

  const addLove = (id) => {
      console.log('this is id in addLove:', id);
      axios.put(`/gallery/love/${id}`)
      .then((response) => {
          getGallery();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <CardColumns className="cardColumns">
      {isDescriptionVisible ? (
        <CardColumns className="cardColumns">
          <Card
            bg="light"
            style={{ width: "18rem", textAlign: "center" }}
            border="secondary"
            className="p-3 card"
            key={item.id}
          >
            <Card.Title className="card">{item.title}</Card.Title>
            <Card.Text className="card">{item.description}</Card.Text>
            <Card.Body>
              <Button className="backBtn" onClick={() => toggleImage(item.id)}>
                ⬅️
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Click the ⬅️ button to go back!
              </small>
            </Card.Footer>
          </Card>
        </CardColumns>
      ) : (
        <CardColumns className="cardColumns">
          <Card
            bg="light"
            style={{ width: "18rem", textAlign: "center" }}
            border="secondary"
            className="p-3 card"
            key={item.id}
          >
            <Card.Img
              className="image"
              variant="top cardImage"
              src={item.path}
              onClick={() => toggleEnlargeImage(item.id)}
            />
            
            
            <Card.Body className="cardBody">
              <Card.Title className="galleryTitle">{item.title}</Card.Title>
              <Card.Text className="reactions">❤️ {item.loves} 👍 {item.likes}</Card.Text>
              <Button className="loveBtn" onClick = {() => addLove(item.id)}>❤️</Button>
              <Button className="likeBtn" onClick={() => addLike(item.id)}>👍</Button>
            </Card.Body>
            <Card.Footer>
              <div>
                <Button className="seeDescriptionBtn" onClick={() => toggleImage(item.id)}>
                  See Description
                </Button>
              </div>
              <small className="text-muted">
                *Click the photo to enlarge
              </small>
            </Card.Footer>
          </Card>
        </CardColumns>
      )}
    </CardColumns>
  );
}

export default GalleryItem;
