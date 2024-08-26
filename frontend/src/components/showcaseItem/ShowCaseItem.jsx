import React from "react";
import "./ShowCaseItem.css";

const ShowCaseItem = ({ image, name, currentBid, visits, bids }) => {
  return (
    <div className="showcase-item">
      <img src={image} alt={name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <p className="item-info">Lance atual: {currentBid}</p>
        <p className="item-info">
          Visitas: {visits} / Lances: {bids}
        </p>
      </div>
      <hr className="separator" />
      <div className="item-actions">
        <button className="action-button">Auditório</button>
        <button className="action-button">Participar</button>
        <button className="like-button">❤️</button>
      </div>
    </div>
  );
};

export default ShowCaseItem;
