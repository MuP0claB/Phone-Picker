import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import PhonesPage from "./pages/PhonesPage";

import Header from "./components/Layout/Header/Header";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="welcome" />} />
          <Route path="/welcome/*" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/login"
            element={!authCtx.isLoggedIn && <LoginPage />}
            elements={authCtx.isLoggedIn && <Navigate to="/phones" />}
          />
          <Route path="/phones" element={<PhonesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
