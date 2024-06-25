import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { OnboardingDataProvider } from "./context/onboarding-data-context";

import {
  LoginWrapper,
  OnboardingWrapper,
  DashboardWrapper,
} from "./components/wrappers/wrappers";

import ProtectedRoute from "./components/ProtectedRoutes";

import HomePage from "./pages/home-page/home-page/home-page";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import RegisterVerification from "./pages/register-verification/register-verification";
import { Onboarding } from "./pages/onboarding/onboarding";
import {
  CapitalStartup,
  ExpertiseStartup,
  ImpactStartup,
  IndustryStartup,
  MatchingStartup,
  NameStartup,
  ResultsStartup,
  SdgStartup,
  StageStartup,
  StrategyStartup,
  ValuesStartup,
  CompanyCode,
} from "./pages/onboarding/onboarding-startup/onboarding-startup";

import {
  CapitalInvestor,
  ExpertiseInvestor,
  ImpactInvestor,
  IndustryInvestor,
  MatchingInvestor,
  NameInvestor,
  ResultsInvestor,
  SdgInvestor,
  StageInvestor,
  StrategyInvestor,
  ValuesInvestor,
} from "./pages/onboarding/onboarding-investor/onboarding-investor";

import NotFound from "./pages/not-found/not-found";
import Dashboard from "./pages/home-page/dashboard/dashboard";
import { Home } from "./pages/home-page/home/home";

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
    children: [
      {
        path: "",
        element: <DashboardWrapper />,
        children: [{ path: "", element: <Home /> }],
      },
      {
        path: "login",
        element: <LoginWrapper />,
        children: [{ path: "", element: <Login /> }],
      },
      {
        path: "logout",
        element: <LoginWrapper />,
        children: [{ path: "", element: Logout() }],
      },
      {
        path: "register",
        element: <LoginWrapper />,
        children: [{ path: "", element: RegisterAndLogout() }],
      },
      {
        path: "register/verification",
        element: <LoginWrapper />,
        children: [{ path: "", element: <RegisterVerification /> }],
      },

      {
        path: "/onboarding",
        element: <OnboardingWrapper />,
        children: [
          { path: "role", element: <Onboarding /> },
          { path: "startup/name", element: <NameStartup /> },
          { path: "startup/company-code", element: <CompanyCode /> },
          { path: "startup/stage", element: <StageStartup /> },
          {
            path: "startup/industry",
            element: <IndustryStartup />,
          },
          {
            path: "startup/capital",
            element: <CapitalStartup />,
          },
          {
            path: "startup/impact",
            element: <ImpactStartup />,
          },
          {
            path: "startup/sdg",
            element: <SdgStartup />,
          },
          {
            path: "startup/values",
            element: <ValuesStartup />,
          },
          {
            path: "startup/expertise",
            element: <ExpertiseStartup />,
          },
          {
            path: "startup/matching",
            element: <MatchingStartup />,
          },
          {
            path: "startup/strategy",
            element: <StrategyStartup />,
          },
          {
            path: "startup/results",
            element: <ResultsStartup />,
          },
          { path: "investor/name", element: <NameInvestor /> },
          {
            path: "investor/stage",
            element: <StageInvestor />,
          },
          {
            path: "investor/industry",
            element: <IndustryInvestor />,
          },
          {
            path: "investor/capital",
            element: <CapitalInvestor />,
          },
          {
            path: "investor/impact",
            element: <ImpactInvestor />,
          },
          {
            path: "investor/sdg",
            element: <SdgInvestor />,
          },
          {
            path: "investor/values",
            element: <ValuesInvestor />,
          },
          {
            path: "investor/expertise",
            element: <ExpertiseInvestor />,
          },
          {
            path: "investor/matching",
            element: <MatchingInvestor />,
          },
          {
            path: "investor/strategy",
            element: <StrategyInvestor />,
          },
          {
            path: "investor/results",
            element: <ResultsInvestor />,
          },
        ],
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
