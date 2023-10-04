import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginPage from "../pages/login";
import CreateAccountPage from "../pages/createAccount";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criar-conta" element={<CreateAccountPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
