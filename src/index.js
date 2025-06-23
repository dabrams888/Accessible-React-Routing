import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cats from "./cats/cats";
import Dogs from "./dogs/dogs";
import Dragons from "./dragons/dragons";
import Default from "./default/default";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Default />,
      },
      {
        path: "/cats",
        element: <Cats />,
      },
      {
        path: "/dogs",
        element: <Dogs />,
      },
      {
        path: "/dragons",
        element: <Dragons />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
