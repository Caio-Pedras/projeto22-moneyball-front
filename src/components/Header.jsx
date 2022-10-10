import styled from "styled-components";
import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import { UserContext } from "../userContext/userContext";
export default function Header() {
  // const { token, setToken, userName, setUserName } = useContext(UserContext);
  return <HeaderWrapper></HeaderWrapper>;
}
const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  display: flex;
  align-items: center;
`;
