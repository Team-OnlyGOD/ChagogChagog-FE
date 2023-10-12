import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginPage from "../../pages/LoginPage";
import HistoryPage from "../../pages/HistoryPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default Router;
