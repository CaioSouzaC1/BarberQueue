import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifique a autenticação do usuário aqui usando uma chamada ao backend
    // Atualize isAuthenticated com base no resultado
  }, []);

  const login = () => {
    // Implemente a lógica de login, provavelmente fazendo uma chamada ao backend
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implemente a lógica de logout, provavelmente fazendo uma chamada ao backend
    setIsAuthenticated(false);
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
