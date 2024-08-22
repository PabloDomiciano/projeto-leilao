import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaulLayout from "./components/DefaultLayout.jsx";
import SimpleLayout from "./components/SimpleLayout.jsx";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DefaulLayout>
                {" "}
                <Home />{" "}
              </DefaulLayout>
            }
          />
          <Route
            path="/login"
            element={
              <SimpleLayout>
                <Login />
              </SimpleLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
