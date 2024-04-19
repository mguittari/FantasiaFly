import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/login-page/LoginPage";

import TravelsPage from "./pages/TravelsPage";
import Travel from "./pages/Travel";

import { UserProvider } from "./context/userContext";
import InscriptionPage from "./pages/inscription-page/InscriptionPage";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/connexion", element: <LoginPage /> },
      { path: "/travels", element: <TravelsPage /> },
      { path: "/travel/:id", element: <Travel /> },
      { path: "/inscription", element: <InscriptionPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
