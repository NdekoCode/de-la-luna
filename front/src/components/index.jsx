import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../lib/routes";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, protect, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </Layout>
  );
};
export default App;
