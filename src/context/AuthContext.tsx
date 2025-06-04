import React, { useEffect, useState, createContext, useContext } from 'react';
interface User {
  id: number;
  name: string;
  email: string;
  role: 'manager' | 'agent';
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This would be an API call to your backend in a real app
      // For demo purposes, we'll simulate a successful login with mock data
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      let mockUser: User;
      if (email === 'manager@customthreads.com') {
        mockUser = {
          id: 1,
          name: 'John Manager',
          email: 'manager@customthreads.com',
          role: 'manager'
        };
      } else if (email === 'agent@customthreads.com') {
        mockUser = {
          id: 2,
          name: 'Sarah Agent',
          email: 'agent@customthreads.com',
          role: 'agent'
        };
      } else {
        throw new Error('Invalid credentials');
      }
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    logout,
    isLoading
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};