import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import ShopContext from "./context/shop-context";
import NavBar from "./components/NavBar/navBar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";

function App() {
  const authCtx = useContext(ShopContext);

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
