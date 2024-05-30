// File: UserDataContext.tsx
import React, { createContext, useContext, useState } from "react";

interface UserData {
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

interface UserDataContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};

export const UserDataProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({
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
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
