/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import { auth } from '../firebase';

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    status: 'pending',
    error: undefined,
    user: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setAuthState({
        ...authState,
        user,
        status: 'done',
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={authState}>
      {authState.status === 'done' && children}
      {authState.status === 'pending' && <p>Aan het laden...</p>}
    </AuthContext.Provider>
  );
}

function useAuthState() {
  const authState = useContext(AuthContext);
  const isDone = authState.status === 'done';
  const isAuthenticated = authState.user !== null && isDone;
  console.log(isAuthenticated);
  return {
    ...authState,
    isAuthenticated,
  };
}

export {
  AuthContext,
  AuthContextProvider,
  useAuthState,
};
