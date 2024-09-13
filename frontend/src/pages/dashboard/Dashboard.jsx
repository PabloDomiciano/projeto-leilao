import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";
import ProductCard from "../../components/productCard/ProductCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <ProductCard />
      </div>
    </div>
  );
};

export default Dashboard;
