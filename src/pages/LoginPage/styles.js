import styled from "styled-components";

export const SignUpBody = styled.main`
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
  display: flex;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const LeftSize = styled.div`
  background-color: #0d1724;
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    height: 175px;
  }
`;

export const RightSize = styled.div`
  background-color: #f2f2f2;
  width: 34%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: #0d1724;
    text-decoration: underline;
    outline: currentColor;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: calc(100% - 175px);
    justify-content: flex-start;
    padding-top: 15px;
  }
`;

export const Text = styled.div`
  width: 28em;
  height: 100%;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em;

  @media (max-width: 500px) {
    width: 237px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 84px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 76px;
    line-height: 84px;
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 16rem;
  padding: 0 15px;
  button {
    margin: 20px 0;
    padding: 10px 0;

    p {
      margin: 3px 0;
    }
  }

  @media (max-width: 500px) {
    height: 52%;

    button {
      margin: 10px 0;
    }
  }
`;
