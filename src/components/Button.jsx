import styled from "styled-components";

function Button({ children, width }) {
  return (
    <>
      <ButtonStyle width={width}>{children}</ButtonStyle>
    </>
  );
}

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ width }) => width};
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: #0d1724;
  border: 1px solid #0d1724;
  color: #f2f2f2;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s, border-width 0.1s ease;
  border-radius: 0.25rem;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }

  :focus {
    border-width: 2px;
    border-radius: 0.3rem;
    border-color: white;
    outline: currentColor;
  }
`;

export { Button };
