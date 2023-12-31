import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starchips from "./pages/Starships";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Duvidas from "./pages/Duvidas";
import './assets/css/estilos.css'

function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/people",
      element: login ? <People /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/planets",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/sobre",
      element: login ? <Sobre /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/species",
      element: login ? <Species /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/starchips",
      element: login ? <Starchips /> : <Login verificarLogin={verificarLogin} />,
    }
    
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
