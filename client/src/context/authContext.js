import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    user && localStorage.setItem('user', JSON.stringify(user));
    if (localStorage.getItem('user') && !user) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [user]);
  const values = { user, setUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
