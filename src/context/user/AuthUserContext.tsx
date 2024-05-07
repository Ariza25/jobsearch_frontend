import React, {
  createContext,
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import db from "../../db/user/User";

type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
};

type AuthContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  loginUser: (name: string, password: string) => void;
  registerUser: (
    name: string,
    cpf: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
};

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: "",
    email: "",
    name: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const loginSuccess = () => {
    toast.success("Login feito com sucesso!", {
      autoClose: 1000,
    });
  };

  const loginError = () => {
    toast.error("Erro ao logar!", {
      autoClose: 1000,
    });
  };

  const registerSuccess = () => {
    toast.success("Conta criada com sucesso!", {
      autoClose: 1000,
    });
  };

  const registerError = () => {
    toast.error("Erro ao criar conta!", {
      autoClose: 1000,
    });
  };

  const loginUser = (name: string, password: string) => {
    const foundUser = db.find(
      (user) => user.name === name && user.password === password
    );
    if (foundUser) {
      setUser((prevUser) => ({
        ...prevUser,
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        cpf: foundUser.cpf,
        password: foundUser.password,
      }));
      loginSuccess();
    } else {
      loginError();
    }
  };

  const registerUser = (
    name: string,
    cpf: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password === confirmPassword) {
      // Simulação de registro
      setUser({
        id: "123",
        name: name,
        cpf: cpf,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      registerSuccess();
    } else {
      registerError();
    }
  };

  return (
    <AuthContext.Provider value={{ registerUser, user, setUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
