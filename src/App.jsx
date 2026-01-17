import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { CountryDetails } from "./components/Layout/CountryDetails";

import { Headers } from "./components/UI/Headers";
import { Footers } from "./components/UI/footer";

function App() {
  return (
    <BrowserRouter>
  
      <Headers />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <Footers />
    </BrowserRouter>
  );
}

export default App;
