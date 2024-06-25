import React, { createContext, useContext, useState } from "react";

interface StartupData {
  // DETAILS
  name: string;
  description: string;
  mission: string;
  foundDate: string;
  industry: string;
  legalForm: string;
  legalType: string;

  // LINKS
  websiteUrl: string;
  facebooUrl: string;
  linkedinUrl: string;
  twitterUrl: string;

  // PRODUCT
  productDescription: string;
  customerProblem: string;
  USP: string;

  // FINANCIALS
  capital: number;
  stage: string;
  investorCount: string;
  fundAllocation: FundAllocation;
}

type FundAllocation = {
  [key: string]: number;
};

interface StartupDataContextType {
  startupData: StartupData;
  setStartupData: React.Dispatch<React.SetStateAction<StartupData>>;
}

export const StartupDataContext = createContext<
  StartupDataContextType | undefined
>(undefined);

export const useStartupData = () => {
  const context = useContext(StartupDataContext);
  if (!context) {
    throw new Error("useStartupData must be used within a StartupDataProvider");
  }
  return context;
};

export const StartupDataProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [startupData, setStartupData] = useState<StartupData>({
    // DETAILS
    name: "Sekofia",
    description: "",
    mission: "",
    foundDate: "",
    industry: "",
    legalForm: "",
    legalType: "",

    // LINKS
    websiteUrl: "",
    facebooUrl: "",
    linkedinUrl: "",
    twitterUrl: "",

    // PRODUCT
    productDescription: "",
    customerProblem: "",
    USP: "",

    // FINANCIALS
    capital: 0,
    stage: "",
    investorCount: "",
    fundAllocation: {},
  });

  return (
    <StartupDataContext.Provider value={{ startupData, setStartupData }}>
      {children}
    </StartupDataContext.Provider>
  );
};
