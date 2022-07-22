import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
import {ContextProvider} from "./context/Context"

const root = createRoot(container);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    
  </StrictMode>
);