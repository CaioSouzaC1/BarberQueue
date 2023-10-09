import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grower from "../components/Grower";

import LoginPage from "../pages/Login";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Grower>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Grower>
      <Footer />
    </>
  );
};

export default MainRoutes;
