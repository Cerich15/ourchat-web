import {createRoot} from "react-dom/client";

import store, {history} from "ducks";

import App from "./App";
import apiConfig from "api";

const root = document.getElementById("root") as Element;
const container = createRoot(root);

apiConfig(store);

if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}

container.render(<App store={store} history={history} />);
