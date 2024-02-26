import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { OrderOnline } from "./pages/OrderOnline";
import { Reservations } from "./pages/Reservations";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "about",
        element: <About />
      },
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "reservatioins",
        element: <Reservations />
      },
      {
        path: "order",
        element: <OrderOnline />
      }
  ]);