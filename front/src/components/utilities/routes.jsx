import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Loading";
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const About = lazy(() => import("../pages/About"));
const Blog = lazy(() => import("../pages/Blog"));
const routes = [
  {
    path: "/",
    protect: false,

    component: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    protect: false,
    component: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    protect: false,
    component: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    protect: false,
    component: (
      <Suspense fallback={<Loading />}>
        <Blog />
      </Suspense>
    ),
  },

  {
    path: "/about",
    protect: false,
    component: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
];
export const authLinks = [
  {
    path: "/login",
    title: "Login",
    protect: false,
  },
  {
    path: "/register",
    title: "Register",
    protect: false,
  },
];
export const navRoutes = [
  {
    path: "/",
    protect: false,
    title: "Home",
  },

  {
    path: "/blog",
    title: "Blog",
    protect: false,
  },

  {
    path: "/about",
    title: "About",
    protect: false,
  },
];
export default routes;
