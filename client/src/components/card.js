import React from "react";
import Card from "react-bootstrap/Card";

const profileImage = ("./assets/profile.png");

const cardImagesArr = ["./assets/nba1.png", "./assets/nba2.png", "./assets/nba3.png", "./assets/nba4.png","./assets/nba5.png","./assets/nba6.png"];

const getCardImage = () => 
  cardImagesArr[Math.floor(Math.random() * cardImagesArr.length)];


function EventCardRender(props) {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {getCardImage()} />
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
};

function ProfileCardRender(props) {
  return (
  <Card style={{ width: '13rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Img variant="top" src= {profileImage} />
    <Card.Body>
      <Card.Title>Name </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
};


export {
  EventCardRender,
  ProfileCardRender
};