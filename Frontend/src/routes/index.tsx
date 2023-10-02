import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default MainRoutes;
