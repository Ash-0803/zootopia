import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";

import About from "./Pages/About.jsx";
import Blogs from "./Pages/Blog/Blogs.jsx";
import FunFacts from "./Pages/FunFacts.jsx";
import Learn from "./Pages/Learn/Learn.jsx";
import Login from "./Pages/Login.jsx";
import "./index.css";

import { ContextProvider } from "./Context.jsx";
import Blog from "./Pages/Blog/Blog.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />}>
        <Route path="blog/:blogid" element={<Blog />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="fun-facts" element={<FunFacts />} />
      <Route path="learn" element={<Learn />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
