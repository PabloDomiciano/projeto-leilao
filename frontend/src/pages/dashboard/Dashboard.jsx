import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ContentArea from "../../components/content/ContentArea";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <ContentArea />
      </div>
    </div>
  );
};

export default Dashboard;
