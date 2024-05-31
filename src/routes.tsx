import { Outlet, RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { OnboardingDataProvider } from "./context/onboarding-data-context";

import {
  LoginWrapper,
  OnboardingWrapper,
  DashboardWrapper,
} from "./components/wrappers/wrappers";

import ProtectedRoute from "./components/ProtectedRoutes";

import HomePage from "./pages/dashboard/home-page/home-page";
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
import Dashboard from "./pages/dashboard/dashboard";
import { Home } from "./pages/dashboard/home/home";
import { USER_TYPE } from "./constants";

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
        path: "onboarding",
        element: <OnboardingWrapper />,
        children: [
          { path: "role", element: <Onboarding /> },
          {
            path: "startup/*",
            children: [
              { path: "name", element: <NameStartup /> },
              { path: "company-code", element: <CompanyCode /> },
              { path: "stage", element: <StageStartup /> },
              { path: "industry", element: <IndustryStartup /> },
              { path: "capital", element: <CapitalStartup /> },
              { path: "impact", element: <ImpactStartup /> },
              { path: "sdg", element: <SdgStartup /> },
              { path: "values", element: <ValuesStartup /> },
              { path: "expertise", element: <ExpertiseStartup /> },
              { path: "matching", element: <MatchingStartup /> },
              { path: "strategy", element: <StrategyStartup /> },
              { path: "results", element: <ResultsStartup /> },
            ],
          },
          {
            path: "investor/*",
            children: [
              { path: "name", element: <NameInvestor /> },
              { path: "stage", element: <StageInvestor /> },
              { path: "industry", element: <IndustryInvestor /> },
              { path: "capital", element: <CapitalInvestor /> },
              { path: "impact", element: <ImpactInvestor /> },
              { path: "sdg", element: <SdgInvestor /> },
              { path: "values", element: <ValuesInvestor /> },
              { path: "expertise", element: <ExpertiseInvestor /> },
              { path: "matching", element: <MatchingInvestor /> },
              { path: "strategy", element: <StrategyInvestor /> },
              { path: "results", element: <ResultsInvestor /> },
            ],
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
