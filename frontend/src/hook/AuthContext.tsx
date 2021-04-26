import { createContext, ReactNode, useCallback, useContext, useState } from "react"
import api from "../services/api";

interface User {
  id: string;
  nome: string;
  email: string;
}

interface AuthState {
  token: string;
  usuario: User;
}

interface SignIncredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  usuario: User;
  signIn(credentials: SignIncredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [ data, setData ] = useState<AuthState>(() => {
    const usuario = localStorage.getItem('@Projis:usuario');
    const token = localStorage.getItem('@Projis:token');

    if (usuario && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      
      return { usuario: JSON.parse(usuario), token }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post('login', {
      email,
      senha,
    });

    const { usuario, token } = response.data;

    localStorage.setItem('@Projis:usuario', JSON.stringify(usuario));
    localStorage.setItem('@Projis:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ usuario, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Projis:usuario');
    localStorage.removeItem('@Projis:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario: data.usuario,
        signIn,
        signOut
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
