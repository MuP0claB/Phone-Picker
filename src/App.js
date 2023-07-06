import { Navigate, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import SuccessfullRegPage from "./pages/SuccessfullRegPage";
import PhonesPage from "./pages/PhonesPage";

import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="welcome" />} />
          <Route path="/welcome/*" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/successfull" element={<SuccessfullRegPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
