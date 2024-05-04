import { RouteObject } from "react-router-dom";
import { SiteWrapper } from "./components/site-wrapper/site-wrapper";
import { UserDataProvider } from "./context/user-data-context";
import { Role } from "./components/onboarding/role/role";
import { Stage } from "./components/onboarding/stage/stage";
import { Industry } from "./components/onboarding/industry/industry";
import { Capital } from "./components/onboarding/capital/capital";
import { Impact } from "./components/onboarding/impact/impact";
import { Sdg } from "./components/onboarding/sdg/sdg";
import { Values } from "./components/onboarding/values/values";
import { Expertise } from "./components/onboarding/expertise/expertise";
import { Matching } from "./components/onboarding/matching/matching";
import { Strategy } from "./components/onboarding/strategy/strategy";
import { Results } from "./components/onboarding/results/results";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <UserDataProvider>
        <SiteWrapper />
      </UserDataProvider>
    ),
    children: [
      { index: true, element: <Role /> },
      { path: "onboarding-startup/stage", element: <Stage /> },
      { path: "onboarding-startup/industry", element: <Industry /> },
      { path: "onboarding-startup/capital", element: <Capital /> },
      { path: "onboarding-startup/impact", element: <Impact /> },
      { path: "onboarding-startup/sdg", element: <Sdg /> },
      { path: "onboarding-startup/values", element: <Values /> },
      { path: "onboarding-startup/expertise", element: <Expertise /> },
      { path: "onboarding-startup/matching", element: <Matching /> },
      { path: "onboarding-startup/strategy", element: <Strategy /> },
      { path: "onboarding-startup/results", element: <Results /> },
    ],
  },
];
