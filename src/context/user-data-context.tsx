// File: UserDataContext.tsx
import React, { createContext, useContext, useState } from "react";

interface UserData {
  user_type: string;
  new_user: boolean;
  email: string;
  firstName: string;
  lastName: string;
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
    new_user: false,
    email: "",
    firstName: "",
    lastName: "",
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
