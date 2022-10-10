import { SignUpBody, LeftSize, RightSize, Title, Text, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Swal from "sweetalert2";
import { UserContext } from "../../userContext/userContext";

export default function SignUpPage() {
  // alterar pra context depois
  const { AUTH_URL } = useContext(UserContext);

  const navigate = useNavigate();
  const [cadastroData, setCadastroData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [enableButton, setEnableButton] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!enableButton) return;

    setEnableButton(false);
    const response = axios.post(`${AUTH_URL}/signup`, cadastroData);

    response
      .then(() => {
        setTimeout(() => navigate("/"), 2600);
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "You have registed with sucess! You will redirect to login page",
          showConfirmButton: false,
          timer: 2500,
          background: "#333333",
          color: "#ffffff",
        });
      })
      .catch((err) => {
        let erro = err.response.data;

        Swal.fire({
          icon: "error",
          title: erro,
          text: "Try with another name",
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
        </Text>
      </LeftSize>
      <RightSize>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="exmploe_email@gmail.com"
            value={cadastroData.email}
            functionOnChange={(e) =>
              setCadastroData({ ...cadastroData, email: e.target.value })
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
            value={cadastroData.password}
            functionOnChange={(e) =>
              setCadastroData({ ...cadastroData, password: e.target.value })
            }
            id="senha"
            autocomplete="off"
            pattern="^.{3,30}$"
            errorMessage={<p>Type a valid password</p>}
          >
            password
          </Input>
          <Input
            type="password"
            placeholder="Senh4_Fort3"
            value={cadastroData.confirmPassword}
            functionOnChange={(e) =>
              setCadastroData({
                ...cadastroData,
                confirmPassword: e.target.value,
              })
            }
            id="confirmarsenha"
            autocomplete="off"
            pattern="^.{3,30}$"
            errorMessage={<p>Type a valid password</p>}
          >
            confirm password
          </Input>

          <Button width="429px">
            {enableButton ? (
              <p>Sign up</p>
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
        <Link to="/">Switch back to log in</Link>
      </RightSize>
    </SignUpBody>
  );
}
