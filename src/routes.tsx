import { RouteObject } from "react-router-dom";
import { SiteWrapper } from "./components/site-wrapper/site-wrapper";
import { UserDataProvider } from "./context/user-data-context";
import ProtectedRoute from "./components/ProtectedRoutes";
import { Stage } from "./pages/onboarding/onboarding-startup/stage/stage";
import { Industry } from "./pages/onboarding/onboarding-startup/industry/industry";
import { Capital } from "./pages/onboarding/onboarding-startup/capital/capital";
import { Impact } from "./pages/onboarding/onboarding-startup/impact/impact";
import { Sdg } from "./pages/onboarding/onboarding-startup/sdg/sdg";
import { Values } from "./pages/onboarding/onboarding-startup/values/values";
import { Expertise } from "./pages/onboarding/onboarding-startup/expertise/expertise";
import { Matching } from "./pages/onboarding/onboarding-startup/matching/matching";
import { Strategy } from "./pages/onboarding/onboarding-startup/strategy/strategy";
import { Results } from "./pages/onboarding/onboarding-startup/results/results";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Onboarding } from "./pages/onboarding/onboarding";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <UserDataProvider>
        <SiteWrapper />
      </UserDataProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },

      { path: "login", element: <Login /> },
      { path: "logout", element: Logout() },
      { path: "register", element: RegisterAndLogout() },
      {
        path: "onboarding-startup/stage",
        element: (
          <ProtectedRoute>
            <Stage />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/industry",
        element: (
          <ProtectedRoute>
            <Industry />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/capital",
        element: (
          <ProtectedRoute>
            <Capital />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/impact",
        element: (
          <ProtectedRoute>
            <Impact />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/sdg",
        element: (
          <ProtectedRoute>
            <Sdg />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/values",
        element: (
          <ProtectedRoute>
            <Values />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/expertise",
        element: (
          <ProtectedRoute>
            <Expertise />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/matching",
        element: (
          <ProtectedRoute>
            <Matching />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/strategy",
        element: (
          <ProtectedRoute>
            <Strategy />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/results",
        element: (
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        ),
      },

      // Investor

      {
        path: "onboarding-investor/stage",
        element: (
          <ProtectedRoute>
            <Stage />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/industry",
        element: (
          <ProtectedRoute>
            <Industry />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/capital",
        element: (
          <ProtectedRoute>
            <Capital />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/impact",
        element: (
          <ProtectedRoute>
            <Impact />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/sdg",
        element: (
          <ProtectedRoute>
            <Sdg />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/values",
        element: (
          <ProtectedRoute>
            <Values />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/expertise",
        element: (
          <ProtectedRoute>
            <Expertise />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/matching",
        element: (
          <ProtectedRoute>
            <Matching />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/strategy",
        element: (
          <ProtectedRoute>
            <Strategy />
          </ProtectedRoute>
        ),
      },
      {
        path: "onboarding-startup/results",
        element: (
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
