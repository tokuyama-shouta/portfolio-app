import React, {createContext} from 'react';

export const AuthContext = creareContext(false);

export const AuthProvider = ({children}) => {
  return(
    <AuthContext.Provider value={false}>{children}</AuthContext.Provider>
  )
}