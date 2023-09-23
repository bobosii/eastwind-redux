import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "../navi/Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdate from "../products/AddOrUpdate";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/product" element={<Dashboard></Dashboard>} />
        <Route path="/cart" element={<CartDetail></CartDetail>} />
        <Route
          path="/saveproduct/:productId"
          element={<AddOrUpdate></AddOrUpdate>}
        />
        <Route
          path="/saveproduct"
          element={<AddOrUpdate></AddOrUpdate>}
        />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
