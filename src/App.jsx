import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import MyList from "./pages/mylist";
import Shows from "./pages/Shows";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/shows" element={<Shows />} />
        
      </Routes>
    </BrowserRouter>
  );
}