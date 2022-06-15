import React, {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [heartColorclicked, setHeartColorclicked] = useState(false);

  return (
    <AuthContext.Provider value={{heartColorclicked, setHeartColorclicked}}>
      {props.children}
    </AuthContext.Provider>
  );
};
