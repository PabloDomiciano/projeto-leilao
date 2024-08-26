import React from "react";
import ShowCaseItem from "./../showcaseItem/ShowCaseItem";
import "./ProductCard.css";

const ProductCard = () => {
  const items = [
    {
      image: "https://via.placeholder.com/277x252",
      name: "Item 1",
      currentBid: "$100",
      visits: 200,
      bids: 10,
    },
    {
      image: "https://via.placeholder.com/277x252",
      name: "Item 2",
      currentBid: "$150",
      visits: 300,
      bids: 15,
    },
    {
      image: "https://via.placeholder.com/277x252",
      name: "Item 3",
      currentBid: "$200",
      visits: 250,
      bids: 20,
    },
    {
      image: "https://via.placeholder.com/277x252",
      name: "Item 4",
      currentBid: "$250",
      visits: 350,
      bids: 25,
    },
    {
      image: "https://via.placeholder.com/277x252",
      name: "Item 5",
      currentBid: "$300",
      visits: 400,
      bids: 30,
    },
    {
      image: "https://via.placeholder.com/277x252",
      name: "Item 6",
      currentBid: "$350",
      visits: 450,
      bids: 35,
    },
  ];

  return (
    <div className="product-container">
      {items.map((item, index) => (
        <ShowCaseItem
          key={index}
          image={item.image}
          name={item.name}
          currentBid={item.currentBid}
          visits={item.visits}
          bids={item.bids}
        />
      ))}
    </div>
  );
};

export default ProductCard;
