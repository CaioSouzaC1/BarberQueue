import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../../env";
import { ToastContainer, toast } from "react-toastify";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (whatsapp: string, password: string) => Promise<void>;
  logout: () => void;
  create: (whatsapp: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!localStorage.getItem("token")) {
          setIsAuthenticated(false);
          return;
        }
        const response = await fetch(`${API_URL}/user/validate-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("token") }),
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const create = async (whatsapp: string, password: string, name: string) => {
    try {
      const response = await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whatsapp, password, name }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user.token) {
          toast.success("Usuário criado com sucesso!");
          setIsAuthenticated(true);
          localStorage.setItem("token", data.user.token);
        } else {
          toast.error("Falha na requisição.");
          setIsAuthenticated(false);
        }
      } else {
        toast.error("Credenciais inválidas. Tente novamente.");
        setIsAuthenticated(false);
      }
    } catch (error) {
      toast.error("Erro interno do sistema.");
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  const login = async (whatsapp: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whatsapp, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user.token) {
          toast.success("Login bem-sucedido!");
          setIsAuthenticated(true);
          localStorage.setItem("token", data.user.token);
        } else {
          toast.error("Falha na requisição.");
          setIsAuthenticated(false);
        }
      } else {
        toast.error("Credenciais inválidas. Tente novamente.");
        setIsAuthenticated(false);
      }
    } catch (error) {
      toast.error("Erro interno do sistema.");
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, create }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
