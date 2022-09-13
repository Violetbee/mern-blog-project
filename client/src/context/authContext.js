import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    name: 'Çağlar',
    surName: 'Karahüseyin',
    email: 'caglarkarahuseyin28@gmail.com',
    phoneNumber: '05999999999',
  };
  const [user, setUser] = useState(initialState);
  const values = { user, setUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
