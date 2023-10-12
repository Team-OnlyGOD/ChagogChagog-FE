import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginPage from "../../pages/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
