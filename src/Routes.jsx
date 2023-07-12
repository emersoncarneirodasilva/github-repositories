import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Main from "./pages/Main";
import Repository from "./pages/Repository";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repository/:repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
