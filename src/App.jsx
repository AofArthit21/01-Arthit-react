import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="owner" element={<Owner />} />
      </Routes>
    </div>
  );
};

export default App;