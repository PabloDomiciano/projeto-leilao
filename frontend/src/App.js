import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaulLayout from "./components/defaultLayout/DefaultLayout.jsx";
import SimpleLayout from "./components/SimpleLayout.jsx";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
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
                <Home />
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
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DefaulLayout>
                  <Dashboard />
                </DefaulLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/cadastro"
            element={
              <SimpleLayout>
                <Cadastro />
              </SimpleLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
