import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shadow } from "../../../styles/styleUtil";

const BorderedButton = styled(Link)` 
  text-decoration: none;
  color: black;
`

function LoginButton() {
  return(
    <BorderedButton to="/auth/login">
      로그인해주세여.
    </BorderedButton>
  );
}

export default LoginButton;