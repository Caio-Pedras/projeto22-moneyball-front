import styled from "styled-components";
import { useState } from "react";

function Input({
  type,
  placeholder,
  value,
  functionOnChange,
  id,
  autocomplete,
  children,
  errorMessage,
  pattern,
  autoFocus,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <Form focused={focused}>
        <InputStyle
          type={type}
          placeholder={placeholder}
          id={id}
          required
          value={value}
          onChange={functionOnChange}
          onBlur={() => setFocused(true)}
          autocomplete={autocomplete}
          pattern={pattern}
          autoFocus={autoFocus}
        />
        <LabelStyle htmlFor={id}>{children}</LabelStyle>
        {errorMessage}
      </Form>
    </>
  );
}

const Form = styled.div`
  position: relative;
  /* margin-top: 200px; */
  max-width: 429px;
  width: 100%;
  min-height: 48px;
  height: 100%;
  margin: 10px 0;

  p {
    font-size: 16px;
    padding: 3px;
    margin-top: 50px;
    color: #ff3333;
    display: none;
  }

  input:invalid ~ p {
    display: ${({ focused }) => (focused ? "block" : "none")};
  }
`;

const InputStyle = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 48px;
  border: 1px solid #565c69;
  border-radius: 6px;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: 10px;
  background: none;
  color: #f2f2f2;
  font-weight: 500;
  background-color: #0d1724;
  font-family: "Oswald";

  ::placeholder {
    color: transparent;
    transition: 50ms ease-out;
  }

  :focus::placeholder {
    color: #8b8b91;
    font-weight: 400;
  }
  :hover {
  }

  :focus {
    border-color: white;
    color: #f2f2f2;
    font-weight: 500;
    background-color: #0d1724;
  }

  :focus ~ label,
  :not([value=""]) ~ label {
    top: -0.4rem;
    font-size: 0.8rem;
    left: 0.8rem;
    background-color: #0d1724;
    color: #ffffff;
  }
`;

const LabelStyle = styled.label`
  font-family: "Oswald";
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  padding: 0 0.5rem;
  color: #f2f2f2;
  font-weight: 700;
  font-size: 20px;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in,
    background-color 200ms ease-in;
`;

export { Input };
