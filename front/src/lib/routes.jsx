import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Cancel from "../components/Checkout/Cancel";
import Success from "../components/Checkout/Success";
import Home from "../components/Home";
import About from "../components/Misc/About";
import Deals from "../components/Misc/Deals";
import Help from "../components/Misc/Help";
const routes = [
  {
    path: "/",
    protected: false,
    component: <Home />,
  },

  {
    path: "/about",
    protected: false,
    component: <About />,
  },

  {
    path: "/help",
    protected: false,
    component: <Help />,
  },
  {
    path: "/deals",
    protected: false,
    component: <Deals />,
  },

  {
    path: "/register",
    protected: false,
    component: <Register />,
  },
  {
    path: "/login",
    protected: false,
    component: <Login />,
  },
  {
    path: "/cart",
    protected: false,
    component: <Cart />,
  },
  {
    path: "/checkout",
    protected: false,
    component: <Checkout />,
  },
  {
    path: "/success",
    protected: false,
    component: <Success />,
  },
  {
    path: "/cancel",
    protected: false,
    component: <Cancel />,
  },
];
export default routes;
