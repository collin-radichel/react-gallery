import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CardColumns from "react-bootstrap/CardColumns";
import axios from "axios";

function GalleryItem({ item, getGallery }) {

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImage = () => {
    console.log("isDescriptionVisible is:", !isDescriptionVisible);
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleEnlargeImage = () => {
    console.log("isImageEnlarged is:", !isImageEnlarged);
    setIsImageEnlarged(!isImageEnlarged);
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
            <Card.Text className="card">Click the image to enlarge</Card.Text>
            {isImageEnlarged ? 
            <Card.Img
            variant="top enlargedCardImage"
            src={item.path}
            onClick={() => toggleEnlargeImage(item.id)}
          />
            :
            <Card.Img
              variant="top cardImage"
              src={item.path}
              onClick={() => toggleEnlargeImage(item.id)}
            />
            }
            
            <Card.Body className="cardBody">
              <Card.Title className="card">{item.title}</Card.Title>
              <Card.Text className="reactions">👍 {item.likes}</Card.Text>
              <Card.Text className="reactions">❤️ {item.loves}</Card.Text>
              <Button className="loveBtn">❤️</Button>
              <Button className="likeBtn" onClick={() => addLike(item.id)}>👍</Button>
            </Card.Body>
            <Card.Footer className="footer">
              <div>
                <Button className="seeDescriptionBtn" onClick={() => toggleImage(item.id)}>
                  See Description
                </Button>
              </div>
              <small className="text-muted">
                Click the button to see more info!
              </small>
            </Card.Footer>
          </Card>
        </CardColumns>
      )}
    </CardColumns>
  );
}

export default GalleryItem;