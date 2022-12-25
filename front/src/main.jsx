import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components";
import "./index.css";
import FormProvider from "./lib/hooks/useFormValidation";
import configureStore from "./lib/state/store";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FormProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FormProvider>
    </Provider>
    ,
  </React.StrictMode>
);
reportWebVitals();
