import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default AppProvider;
