import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="owner" element={<Owner />} />
      </Routes>
    </div>
  );
};

export default App;
