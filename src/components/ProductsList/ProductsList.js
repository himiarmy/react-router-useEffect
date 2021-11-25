import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import Filters from "../Filters/Filters";

const ProductsList = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  let products = [
    {
      title:
        "Speedracer multifunction watch with Ferrari FXX K 1:43 scale model",
      image:
        "https://store.ferrari.com/product_image/560971904581424/F/w640.jpg",
      price: "175",
      id: 1,
    },
    {
      title: "Matt black Aspire chronograph watch with steel strap",
      image:
        "https://store.ferrari.com/product_image/31840166392133301/F/w640.jpg",
      price: "295",
      id: 2,
    },
    {
      title: "Matt grey Aspire chronograph watch with steel strap",
      image:
        "https://store.ferrari.com/product_image/31840166392179447/F/w640.jpg",
      price: "150",
      id: 3,
    },
    {
      title: "Matt black Aspire chronograph watch with rose gold details",
      image:
        "https://store.ferrari.com/product_image/31840166392384740/F/w640.jpg",
      price: "200",
      id: 4,
    },
  ];

  return (
    <>
      <Filters />
      <div className="d-flex justify-content-between container">
        {products.map((item) => (
          <Card
            key={item.id}
            onClick={() => setSelectedProduct(item.id)}
            style={{
              width: "18rem",
              border: selectedProduct === item.id ? "1px solid blue" : "",
            }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
