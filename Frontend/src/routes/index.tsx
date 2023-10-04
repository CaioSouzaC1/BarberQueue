import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

const MainRoutes = () => {
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthContext.Provider>
    </>
  );
};

export default MainRoutes;
