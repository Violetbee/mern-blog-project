import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    user && localStorage.setItem('user', JSON.stringify(user));
    if (localStorage.getItem('user') && !user) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [user, liked]);
  const values = { user, setUser, liked, setLiked };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
