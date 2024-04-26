import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescripcionPrueba from "./Pages/DescripcionPrueba";
import Login from "./Pages/Login";
import { useEffect } from "react";
import { auth } from "./features/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const user = null

  useEffect(() => {
    const user = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        console.log('nada');
      }
    })
    return user;
  },[])

  return (
    <>
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route path="/descripcionprueba" element={<DescripcionPrueba/>} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
