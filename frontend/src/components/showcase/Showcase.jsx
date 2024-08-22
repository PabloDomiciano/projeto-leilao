import React from "react";
import "./Showcase.css";

const Showcase = () => {

  return (
    <section className="showcase">
      <h2>Mostruário</h2>
      <div className="car-grid">
        <div className="car-item">
          <img src={""} alt="Hyundai Tucson" />
          <p>Hyundai Tucson</p>
          <p>R$ 19.500,00</p>
        </div>
        <div className="car-item">
          <img src={""} alt="Fusca" />
          <p>Fusca</p>
          <p>R$ 5.500,00</p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
