import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "../navi/Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}/>
        <Route path="/product" element={<Dashboard></Dashboard>}/>
        <Route path="/cart" element={<CartDetail></CartDetail>}/>
      </Routes>
    </Container>
  );
}

export default App;
