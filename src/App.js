
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollTopComponent from "./subComponents/ScrollTopComponent";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route   path="/" element={<Home />} />       
    </Routes>
  </BrowserRouter>

  );
}

export default App;
