import { Outlet, RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { OnboardingDataProvider } from "./context/onboarding-data-context";

import {
  LoginWrapper,
  OnboardingWrapper,
  DashboardWrapper,
  DashboardWrapperUnprotected,
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
import Terms from "./pages/contract/terms";
import ContractForm from "./components/registration/contract/contract-form";
import { StartupDataProvider } from "./context/startup-data-context";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

const termsContent = (
  <div>
    <p>
      Welcome to EarthMates GmbH. These terms and conditions ("Terms") govern
      your use of our software service ("Service"). By accessing or using the
      Service, you agree to be bound by these Terms. If you do not agree, do not
      use the Service.
    </p>
    <h2>1. Definitions:</h2>
    <ul>
      <li>"Service" means EarthMates GmbH.</li>
      <li>"We," "Us," "Our" means EarthMates GmbH.</li>
      <li>"You," "User" means the individual or entity using the Service.</li>
      <li>
        "Data" refers to any personal data and other information collected by
        the Service.
      </li>
    </ul>
    <h2>2. User Accounts:</h2>
    <p>
      To use our Service, you must create an account by providing accurate and
      complete information. You are responsible for maintaining the
      confidentiality of your account information and for all activities that
      occur under your account. We reserve the right to terminate accounts that
      violate these Terms.
    </p>
    <h2>3. Use of the Service:</h2>
    <p>
      You agree to use the Service in compliance with these Terms and all
      applicable laws. You must not use the Service for any illegal activities,
      infringe upon intellectual property rights, or violate any third-party
      rights.
    </p>
    <h2>4. Data Collection and Use:</h2>
    <p>
      We collect personal data and usage data to improve our Service, perform
      analytics, and for marketing purposes. We process your data in accordance
      with our Privacy Policy and GDPR. We may share data with third parties
      under specific conditions outlined in our Privacy Policy.
    </p>
    <h2>5. Privacy Policy:</h2>
    <p>
      Please refer to our detailed{" "}
      <a href="notion://www.notion.so/ef8b32b17f3c43179bd35baf72483cb4?v=22b59804f49f4de7880b7fe834744c24&p=12bc7e85757c4c6183ac7cf0ab575959&pm=s#">
        Privacy Policy
      </a>{" "}
      for information on how we protect your data and your rights under GDPR.
    </p>
    <h2>6. Intellectual Property:</h2>
    <p>
      We own all intellectual property rights related to the Service. We grant
      you a limited, non-exclusive license to use the Service. You must not use
      our intellectual property without our permission.
    </p>
    <h2>7. Payment Terms:</h2>
    <p>
      Our pricing information and subscription plans are available on our
      website. Payments are due on a (monthly/annual?) basis. Refunds?. We
      reserve the right to change pricing with (1 month?) notice.
    </p>
    <h2>8. Termination:</h2>
    <p>
      Either party may terminate this agreement at any time. Upon termination,
      your access to the Service will cease, and we may delete your data as per
      our data retention policy.
    </p>
    <h2>9. Limitation of Liability:</h2>
    <p>
      Our Service is provided "as is" without warranties of any kind. We are not
      liable for any indirect, incidental, or consequential damages. You agree
      to indemnify us against any claims arising from your use of the Service.
    </p>
    <h2>10. Changes to the Terms:</h2>
    <p>
      We may modify these Terms at any time. We will notify you of changes via
      email. Changes become effective 30 days after notification.
    </p>
    <h2>11. Governing Law:</h2>
    <p>
      These Terms are governed by the laws of Germany. Any disputes will be
      resolved in the courts of Germany.
    </p>
    <h2>12. Contact Information:</h2>
    <p>
      For questions about these Terms, please contact us at{" "}
      <a href="mailto:jacopo@earthmates.de">jacopo@earthmates.de</a>.
    </p>
    <h2>13. Miscellaneous:</h2>
    <p>
      These Terms constitute the entire agreement between you and us. If any
      part of these Terms is found invalid, the remaining provisions will remain
      in effect. Our failure to enforce any provision is not a waiver of our
      rights.
    </p>
    <p>
      By using our Service, you acknowledge that you have read, understood, and
      agree to be bound by these Terms.
    </p>
  </div>
);

const privacyContent = (
  <div>
    <h2>1. Introduction</h2>
    <p>
      EarthMates GmbH ("we," "us," or "our") is committed to protecting your
      privacy. This Privacy Policy explains how we collect, use, disclose, and
      safeguard your information when you use our SaaS application EarthMates
      GmbH ("Service"). By using the Service, you agree to the collection and
      use of information in accordance with this policy.
    </p>
    <h2>2. Information We Collect</h2>
    <h3>2.1 Personal Data</h3>
    <p>
      We collect personal data that you voluntarily provide to us when you
      create an account, use the Service, or contact us. This may include:
    </p>
    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Billing information (e.g., credit card details)</li>
      <li>Company name and job title</li>
    </ul>
    <h3>2.2 Usage Data</h3>
    <p>
      We automatically collect certain information when you access and use the
      Service. This may include:
    </p>
    <ul>
      <li>IP address</li>
      <li>Browser type and version</li>
      <li>Device type and operating system</li>
      <li>Referring website</li>
      <li>Pages visited and time spent on those pages</li>
      <li>Clickstream data</li>
    </ul>
    <h3>2.3 Cookies and Tracking Technologies</h3>
    <p>
      We use cookies and similar tracking technologies to track activity on our
      Service and hold certain information. Cookies are files with a small
      amount of data that are stored on your device.
    </p>
    <h2>3. How We Use Your Information</h2>
    <p>We use the information we collect for various purposes, including:</p>
    <ul>
      <li>To provide and maintain our Service</li>
      <li>To process transactions and manage your account</li>
      <li>To improve our Service and develop new features</li>
      <li>
        To communicate with you, including sending updates, security alerts, and
        support messages
      </li>
      <li>To comply with legal obligations and enforce our terms</li>
      <li>To analyze usage patterns and improve marketing efforts</li>
    </ul>
    <h2>4. Legal Basis for Processing Personal Data</h2>
    <p>We process your personal data based on the following legal grounds:</p>
    <ul>
      <li>
        <strong>Contractual necessity:</strong> To perform our contract with you
        (e.g., providing the Service).
      </li>
      <li>
        <strong>Legitimate interests:</strong> To improve and promote our
        Service, and to ensure security.
      </li>
      <li>
        <strong>Consent:</strong> Where you have given consent (e.g., for
        marketing communications).
      </li>
      <li>
        <strong>Legal obligation:</strong> To comply with applicable laws and
        regulations.
      </li>
    </ul>
    <h2>5. Sharing Your Information</h2>
    <p>We may share your information with:</p>
    <ul>
      <li>
        <strong>Service providers:</strong> Third-party vendors who perform
        services on our behalf, such as payment processing, data analysis, email
        delivery, and hosting services.
      </li>
      <li>
        <strong>Business partners:</strong> Trusted partners for the purpose of
        providing our Service and improving user experience.
      </li>
      <li>
        <strong>Legal authorities:</strong> If required by law or to protect our
        rights and interests.
      </li>
    </ul>
    <h2>6. Data Security</h2>
    <p>
      We implement appropriate technical and organizational measures to protect
      your personal data from unauthorized access, use, or disclosure. However,
      no method of transmission over the internet or method of electronic
      storage is 100% secure.
    </p>
    <h2>7. Data Retention</h2>
    <p>
      We retain your personal data only for as long as necessary to fulfill the
      purposes for which we collected it, including to satisfy any legal,
      accounting, or reporting requirements.
    </p>
    <h2>8. Your Rights</h2>
    <p>
      Under GDPR, you have the following rights regarding your personal data:
    </p>
    <ul>
      <li>
        <strong>Access:</strong> You can request a copy of the personal data we
        hold about you.
      </li>
      <li>
        <strong>Rectification:</strong> You can request correction of inaccurate
        or incomplete data.
      </li>
      <li>
        <strong>Erasure:</strong> You can request deletion of your personal data
        under certain conditions.
      </li>
      <li>
        <strong>Restriction:</strong> You can request restriction of processing
        of your personal data.
      </li>
      <li>
        <strong>Portability:</strong> You can request transfer of your personal
        data to another service provider.
      </li>
      <li>
        <strong>Objection:</strong> You can object to the processing of your
        personal data in certain circumstances.
      </li>
      <li>
        <strong>Withdraw Consent:</strong> You can withdraw consent where we
        rely on your consent to process your data.
      </li>
    </ul>
    <p>
      To exercise your rights, please contact us at{" "}
      <a href="mailto:jacopo@earthmates.de">jacopo@earthmates.de</a>.
    </p>
    <h2>9. International Data Transfers</h2>
    <p>
      Your personal data may be transferred to and processed in countries
      outside the European Economic Area (EEA). We ensure that such transfers
      are conducted in accordance with applicable data protection laws,
      typically through the use of standard contractual clauses approved by the
      European Commission.
    </p>
    <h2>10. Changes to This Privacy Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. We will notify you of
      any changes by posting the new Privacy Policy on this page. You are
      advised to review this Privacy Policy periodically for any changes.
    </p>
  </div>
);

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
        path: "terms-condition",
        element: termsContent,
      },
      {
        path: "privacy-policy",
        element: privacyContent,
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
        path: "login",
        element: <LoginWrapper />,
        children: [{ path: "", element: <Login /> }],
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
        element: <DashboardWrapperUnprotected />,
        children: [{ path: "", element: <Dashboard /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];
