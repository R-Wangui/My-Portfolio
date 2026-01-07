import "tailwindcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductDesign from "./pages/ProductDesign";
import Frontend from "./pages/Frontend";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/productdesign" element={<ProductDesign />} />
          <Route path="/frontend" element={<Frontend />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
