import React, { useState, ReactNode } from "react";

export interface User {
  name: string;
  surname: string;
  email: string;
  roles_id: number;
}

export interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}
let AuthContext: any;
let { Provider } = (AuthContext = React.createContext<
  Partial<AuthContextProps>
>({}));

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};
export { AuthContext, AuthProvider };
