import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import initFacebookSDK from "./utils/InitFacebookSDK";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);

const renderApp = () => {
  root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

initFacebookSDK().then(() => {
  renderApp();
});