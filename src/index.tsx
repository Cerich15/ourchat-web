import {createRoot} from "react-dom/client";
import App from "App";

const root = document.getElementById("root") as Element;
const container = createRoot(root);

container.render(<App />);
