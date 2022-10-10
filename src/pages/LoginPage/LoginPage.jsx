import {
  SignUpBody,
  LeftSize,
  RightSize,
  Title,
  SubTitle,
  Text,
  Form,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Swal from "sweetalert2";
import { UserContext } from "../../userContext/userContext";

export default function Signin() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [enableButton, setEnableButton] = useState(true);
  const { userToken, setUserToken, AUTH_URL } = useContext(UserContext);

  useEffect(() => {
    if (
      userToken &&
      userToken.length !== 0 &&
      userToken !== "null" &&
      localStorage.getItem("token")
    ) {
      navigate("/main");
    }

    // eslint-disable-next-line
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!enableButton) return;

    setEnableButton(false);
    const response = axios.post(`${AUTH_URL}/signin`, loginData);

    response
      .then(({ data }) => {
        setUserToken(data.token);
        navigate("/main");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
          text: "Try again!",
          confirmButtonColor: "#1877F2",
          background: "#333333",
          color: "#ffffff",
        });
        setEnableButton(true);
      });
  }

  return (
    <SignUpBody>
      <LeftSize>
        <Text>
          <Title>MoneyBall</Title>
          <SubTitle>
            Keep up with the statistics of the main European leagues
          </SubTitle>
        </Text>
      </LeftSize>
      <RightSize>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email_exemplo@gmail.com"
            value={loginData.email}
            functionOnChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            id="email"
            autocomplete="off"
            pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
            errorMessage={<p>Type a valid email</p>}
            // autoFocus={true}
          >
            e-mail
          </Input>
          <Input
            type="password"
            placeholder="Senh4_Fort3"
            value={loginData.password}
            functionOnChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            id="senha"
            autocomplete="off"
            errorMessage={<p>Password is required</p>}
          >
            password
          </Input>
          <Button width="429px">
            {enableButton ? (
              <p>Log in</p>
            ) : (
              <Oval
                ariaLabel="loading-indicator"
                height={30}
                width={30}
                strokeWidth={7}
                color="#ffffff"
                secondaryColor="#9f9f9f"
              />
            )}
          </Button>
        </Form>
        <Link to="/signup">First time? Create an account!</Link>
      </RightSize>
    </SignUpBody>
  );
}
