import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import AuthContext from "./context/auth-context";
import NavBar from "./components/Layout/NavBar/NavBar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";

function App() {
  const authCtx = useContext(AuthContext);

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
