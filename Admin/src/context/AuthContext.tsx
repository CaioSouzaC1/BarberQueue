import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../../env";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (whatsapp: string, password: string) => Promise<void>;
  logout: () => void;
  create: (whatsapp: string, password: string, name: string) => Promise<void>;
  user: {
    id?: number;
    whatsapp?: string;
    name?: string;
    created_at?: string;
    updated_at?: string;
  };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!localStorage.getItem("tokenAdmin")) {
          setIsAuthenticated(false);
          return;
        }
        const response = await fetch(`${API_URL}/admin/validate-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("tokenAdmin") }),
        });
        if (response.ok) {
          setIsAuthenticated(true);
          const res = await response.json();
          setUser(res.user);
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
      const response = await fetch(`${API_URL}/admin/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whatsapp, password, name }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user.token) {
          toast.success("Usuário criado com sucesso!", {
            theme: "light",
          });
          setIsAuthenticated(true);
          localStorage.setItem("tokenAdmin", data.user.token);
        } else {
          toast.error("Falha na requisição.", {
            theme: "light",
          });
          setIsAuthenticated(false);
        }
      } else {
        toast.error("Credenciais inválidas. Tente novamente.", {
          theme: "light",
        });
        setIsAuthenticated(false);
      }
    } catch (error) {
      toast.error("Erro interno do sistema.", {
        theme: "light",
      });
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user.token) {
          toast.success("Login bem-sucedido!", {
            theme: "light",
          });
          setIsAuthenticated(true);
          localStorage.setItem("tokenAdmin", data.user.token);
          navigate("/");
        } else {
          toast.error("Falha na requisição.", {
            theme: "light",
          });
          setIsAuthenticated(false);
        }
      } else {
        toast.error("Credenciais inválidas. Tente novamente.", {
          theme: "light",
        });
        setIsAuthenticated(false);
      }
    } catch (error) {
      toast.error("Erro interno do sistema.", {
        theme: "light",
      });
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("tokenAdmin");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, create, user }}>
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
