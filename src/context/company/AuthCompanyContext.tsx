import React, { createContext, useState, FunctionComponent, Dispatch, SetStateAction } from "react";

type Company = {
  id: string;
  name: string;
  email: string;
  cnpj: string;
  password: string;
};

type AuthCompanyContextType = {
  company: Company;
  setCompany: Dispatch<SetStateAction<Company>>;
};

export const AuthCompanyContext = createContext({} as AuthCompanyContextType);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [company, setCompany] = useState<Company>({
    id: "",
    email: "",
    name: "",
    cnpj: "",
    password: "",
  });

  return (
    <AuthCompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </AuthCompanyContext.Provider>
  );
};

export default AuthProvider;
