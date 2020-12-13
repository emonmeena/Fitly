import React, { useState } from "react";

const UserDataContext = React.createContext();

export const UserDataProvider = ({ children }) => {
  const [username, setUsername] = useState("Mayank");
  const [age, setAge] = useState(10);
  const [height, setHeight] = useState(1.7);
  const [weight, setWeight] = useState(65);
  const email = "mayank16meena@gmail.com";
  return (
    <UserDataContext.Provider
      value={{
        data: {
          username: username,
          age: age,
          email: email,
          height: height,
          weight: weight,
        },
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
