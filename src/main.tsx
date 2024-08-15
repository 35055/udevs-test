import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "arial",
        spacing: {
          xs: "1rem",
          sm: "1.2rem",
          md: "1.8rem",
          lg: "2.2rem",
          xl: "2.8rem",
        },
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
