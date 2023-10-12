import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginPage from "../../pages/LoginPage";
import HistoryPage from "../../pages/HistoryPage";
import { DetailPage } from "../DetailPage";
import NoticePage from "../../pages/NoticePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/notice" element={<NoticePage />} />
    </Routes>
  );
};

export default Router;
