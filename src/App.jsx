import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SearchPage from "./page/SearchPage";
import ReceapPage from "./page/ReceapPage";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme ? "bg-gray-200" : "bg-zinc-900 "}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:i" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<ReceapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
