import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./Pages/Error.jsx";
import Home from "./Pages/Home.jsx";

import "./index.css";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Login from "./Pages/Login.jsx";
import FunFacts from "./Pages/FunFacts.jsx";
import Learn from "./Pages/Learn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "fun-facts",
        element: <FunFacts />,
      },
      {
        path: "learn",
        element: <Learn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
