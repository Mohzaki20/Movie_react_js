import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import { LangProvider } from "./contexts/context";
import { useState } from "react";

function App() {
  const [lang,setLang] = useState("en")
  return (
    <>
    <LangProvider value={{lang,setLang}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
    </>
  );
}

export default App;
