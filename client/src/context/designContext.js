import { useContext, useState } from 'react';
import { createContext } from 'react';

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  //if false, post sharing doesn't work
  const [sharePost, setSharePost] = useState(false);
  const values = { setSharePost, sharePost };
  return (
    <DesignContext.Provider value={values}>{children}</DesignContext.Provider>
  );
};

export const useDesignContext = () => useContext(DesignContext);
