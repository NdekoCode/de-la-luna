import { Route, Routes } from "react-router-dom";
import RedirectAuthenticated from "./components/auth/RedirectAuthenticated";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import routes from "./components/utilities/routes";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map(({ path, protect, component }, index) => {
          if (protect) {
            return (
              <Route
                key={index}
                path={path}
                element={<AuthenticatedRoutes>{component}</AuthenticatedRoutes>}
              ></Route>
            );
          }
          return (
            <Route
              path={path}
              key={index}
              element={
                <RedirectAuthenticated>{component}</RedirectAuthenticated>
              }
            ></Route>
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
