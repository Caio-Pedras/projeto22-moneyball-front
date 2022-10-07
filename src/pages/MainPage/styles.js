import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #404eed;
  padding: 50px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  min-width: 400px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;
export const MenuRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 0.5px solid black;
`;
export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  p {
    font-size: 30px;
  }
  img {
    height: 50px;
    border-radius: ${(props) =>
      props.isLeagueSelectorDisplayed ? "15px 0 0 0" : "15px 0 0 15px"};
  }
`;
export const LeagueSelector = styled.div`
  width: 100%;
  background: #c4c4c4;
  border-radius: 0px 0px 15px 15px;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  row-gap: 10px;
`;

export const LeagueWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px;
  img {
    height: 40px;
    width: 30px;

    object-fit: cover;
  }
  p {
    font-size: 15px;
  }
`;
export const Standings = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;
