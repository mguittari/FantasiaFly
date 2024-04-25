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

// import ReservationPage from "./pages/reservation-page/ReservationPage";
// import PaymentPage from "./pages/payment-page/PaymentPage";
import ParticipantPage from "./pages/participant-page/ParticipantPage";
import Success from "./pages/afterPayment/Success";
import Cancel from "./pages/afterPayment/Cancel";
import Payment from "./components/reservation/Payment";
import ProfilPage from "./pages/profil-page/ProfilPage";

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
      { path: "/reservations/travel/:id", element: <ParticipantPage /> },
      { path: "/reservations/period/:id", element: <ParticipantPage /> },
      { path: "/pay", element: <Payment /> },
      { path: "/success", element: <Success /> },
      { path: "/cancel", element: <Cancel /> },
      { path: "/myProfile", element: <ProfilPage /> },
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
