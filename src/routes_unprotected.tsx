import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SiteWrapper } from "./components/site-wrapper/site-wrapper";
import { UserDataProvider } from "./context/user-data-context";
import ProtectedRoute from "./components/ProtectedRoutes";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import RegisterVerification from "./pages/register-verification/register-verification";
import { Onboarding } from "./pages/onboarding/onboarding";
import NotFound from "./pages/not-found/not-found";

import {
  CapitalStartup,
  ExpertiseStartup,
  ImpactStartup,
  IndustryStartup,
  MatchingStartup,
  ResultsStartup,
  SdgStartup,
  StageStartup,
  StrategyStartup,
  ValuesStartup,
} from "./pages/onboarding/onboarding-startup/onboarding-startup";

import {
  CapitalInvestor,
  ExpertiseInvestor,
  ImpactInvestor,
  IndustryInvestor,
  MatchingInvestor,
  ResultsInvestor,
  SdgInvestor,
  StageInvestor,
  StrategyInvestor,
  ValuesInvestor,
} from "./pages/onboarding/onboarding-investor/onboarding-investor";
import HomePage from "./pages/dashboard/home-page/home-page";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

export const routes_unprotected: RouteObject[] = [
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
        element: <HomePage />,
      },
      { path: "login", element: <Login /> },
      { path: "logout", element: Logout() },
      { path: "register", element: RegisterAndLogout() },
      { path: "register/verification", element: <RegisterVerification /> },

      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "onboarding-startup/stage",
        element: <StageStartup />,
      },
      {
        path: "onboarding-startup/industry",
        element: <IndustryStartup />,
      },
      {
        path: "onboarding-startup/capital",
        element: <CapitalStartup />,
      },
      {
        path: "onboarding-startup/impact",
        element: <ImpactStartup />,
      },
      {
        path: "onboarding-startup/sdg",
        element: <SdgStartup />,
      },
      {
        path: "onboarding-startup/values",
        element: <ValuesStartup />,
      },
      {
        path: "onboarding-startup/expertise",
        element: <ExpertiseStartup />,
      },
      {
        path: "onboarding-startup/matching",
        element: <MatchingStartup />,
      },
      {
        path: "onboarding-startup/strategy",
        element: <StrategyStartup />,
      },
      {
        path: "onboarding-startup/results",
        element: <ResultsStartup />,
      },

      // Investor

      {
        path: "onboarding-investor/stage",
        element: <StageInvestor />,
      },
      {
        path: "onboarding-investor/industry",
        element: <IndustryInvestor />,
      },
      {
        path: "onboarding-investor/capital",
        element: <CapitalInvestor />,
      },
      {
        path: "onboarding-investor/impact",
        element: <ImpactInvestor />,
      },
      {
        path: "onboarding-investor/sdg",
        element: <SdgInvestor />,
      },
      {
        path: "onboarding-investor/values",
        element: <ValuesInvestor />,
      },
      {
        path: "onboarding-investor/expertise",
        element: <ExpertiseInvestor />,
      },
      {
        path: "onboarding-investor/matching",
        element: <MatchingInvestor />,
      },
      {
        path: "onboarding-investor/strategy",
        element: <StrategyInvestor />,
      },
      {
        path: "onboarding-investor/results",
        element: <ResultsInvestor />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
