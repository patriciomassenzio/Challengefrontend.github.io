const { createContext, useState } = require('react');

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const contextValue = {
    username,
    login() {
      setUsername({ username: 'admin' });
    },
    logout() {
      setUsername(null);
    },
    isLogged() {
      return !!username;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
