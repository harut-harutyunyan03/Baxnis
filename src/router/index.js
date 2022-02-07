import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const Routing = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
