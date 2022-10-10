import React from "react";
import { UserContext } from "./userContext.js";
// import { useState } from "react";
export default function UserContextProvider(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = process.env.REACT_APP_URL;
  return (
    <UserContext.Provider value={{ URL, API_KEY }}>
      {props.children}
    </UserContext.Provider>
  );
}
