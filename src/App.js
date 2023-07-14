import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import AuthContext from "./context/auth-context";
import NavBar from "./components/Layout/NavBar/NavBar";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
