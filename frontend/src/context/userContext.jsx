import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/function-component-definition, react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
