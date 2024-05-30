// File: OnboardingDataContext.tsx
import React, { createContext, useContext, useState } from "react";

interface OnboardingData {
  user_type: string;
  name: string;
  code?: string;
  stage: string[];
  industry: string;
  capital: string;
  impact: number;
  sdg: string[];
  values: string[];
  expertise: string[];
  matching: string[];
  strategy: string[];
}

interface OnboardingDataContextType {
  onboardingData: OnboardingData;
  setOnboardingData: React.Dispatch<React.SetStateAction<OnboardingData>>;
}

export const OnboardingDataContext = createContext<
  OnboardingDataContextType | undefined
>(undefined);

export const useOnboardingData = () => {
  const context = useContext(OnboardingDataContext);
  if (!context) {
    throw new Error(
      "useOnboardingData must be used within a OnboardingDataProvider"
    );
  }
  return context;
};

export const OnboardingDataProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    user_type: "",
    name: "",
    code: "",
    stage: [],
    industry: "",
    capital: "",
    impact: 0,
    sdg: [],
    values: [],
    expertise: [],
    matching: [],
    strategy: [],
  });

  return (
    <OnboardingDataContext.Provider
      value={{ onboardingData, setOnboardingData }}
    >
      {children}
    </OnboardingDataContext.Provider>
  );
};
