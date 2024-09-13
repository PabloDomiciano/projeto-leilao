import React from "react";
import ShowCaseItem from "./../showcaseItem/ShowCaseItem";
import "./ProductCard.css";
import Car1 from "./../../assets/car/Car1.jpg";
import Car2 from "./../../assets/car/Car2.jpg";
import Car3 from "./../../assets/car/Car3.jpg";
import Car4 from "./../../assets/car/Car4.jpg";
import Car5 from "./../../assets/car/Car5.jpg";
import Car6 from "./../../assets/car/Car6.jpg";


const ProductCard = () => {
  const items = [
    {
      image: Car1,
      name: "Ford SUV",
      currentBid: "R$15.000,00",
      visits: 200,
      bids: 10,
    },
    {
      image: Car2,
      name: "Fusca Branco",
      currentBid: "R$12.500,00",
      visits: 300,
      bids: 15,
    },
    {
      image: Car3,
      name: "Hyundai Tucson",
      currentBid: "R$47.000,00",
      visits: 250,
      bids: 20,
    },
    {
      image: Car4,
      name: "Scott 1975",
      currentBid: "$150.000,00",
      visits: 350,
      bids: 25,
    },
    {
      image: Car5,
      name: "Scort 1890",
      currentBid: "$300.000,00",
      visits: 400,
      bids: 30,
    },
    {
      image: Car6,
      name: "BMW 2020",
      currentBid: "$150.000,00",
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
