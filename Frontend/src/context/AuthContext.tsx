import React, { createContext, useContext, useState, useEffect } from "react";
import { API_URL } from "../../env";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (whatsapp: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await fetch(`${API_URL}/user/login`);

  //       console.log(response);
  //       if (response.ok) {
  //         const data = await response.json();

  //         console.log(data);

  //         // if (data.isAuthenticated) {
  //         //   setIsAuthenticated(true);
  //         // } else {
  //         //   setIsAuthenticated(false);
  //         // }
  //       } else {
  //         setIsAuthenticated(false);
  //       }
  //     } catch (error) {
  //       console.error("Erro ao verificar autenticação:", error);
  //       setIsAuthenticated(false);
  //     }
  //   };

  //   checkAuthentication();
  // }, []);

  const login = async (whatsapp: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whatsapp, password }),
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        // if (data.isAuthenticated) {
        //   setIsAuthenticated(true);
        //   // Armazene o token no local storage ou cookies
        //   localStorage.setItem("token", data.token);
        // } else {
        //   setIsAuthenticated(false);
        // }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    // Implemente a lógica de logout, que pode incluir uma chamada ao backend
    setIsAuthenticated(false);
    // Remova o token do local storage ou cookies
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
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
