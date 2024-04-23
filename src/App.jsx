import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescripcionPrueba from "./Pages/DescripcionPrueba";
import Login from "./Pages/Login";

function App() {

  const user = null

  return (
    <>
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/descripcionprueba" element={<DescripcionPrueba/>} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
