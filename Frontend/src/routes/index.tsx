import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginPage from "../pages/Login";
import CreateAccountPage from "../pages/CreateAccount";
import NotFoundPage from "../pages/NotFound";
import MyProfilePage from "../pages/MyProfile";
import Grower from "../components/Grower";
import CreateSectionPage from "../pages/CreateSection";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Grower>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/criar-conta" element={<CreateAccountPage />} />
          <Route path="/meu-perfil" element={<MyProfilePage />} />
          <Route path="/agendar-secao" element={<CreateSectionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Grower>
      <Footer />
    </>
  );
};

export default MainRoutes;
