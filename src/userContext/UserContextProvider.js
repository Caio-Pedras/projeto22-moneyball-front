import React, { useState } from "react";
import { UserContext } from "./userContext.js";
// import { useState } from "react";
export default function UserContextProvider(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = process.env.REACT_APP_URL;
  const [userToken, setUserToken] = useState();
  return (
    <UserContext.Provider value={{ URL, API_KEY, userToken, setUserToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
