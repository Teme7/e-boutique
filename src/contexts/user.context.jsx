import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedHandler, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

//actual value I want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//the component that wraps around other components (children) that want to access it
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHandler((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      // console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
