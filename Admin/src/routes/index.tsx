import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grower from "../components/Grower";

import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import OptionsPage from "../pages/OptionsPage";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Grower>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/editar-opcoes" element={<OptionsPage />} />
        </Routes>
      </Grower>
      <Footer />
    </>
  );
};

export default MainRoutes;
