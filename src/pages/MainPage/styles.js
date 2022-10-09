import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  /* @media (max-width: 800px) {
    flex-direction: column;
  } */
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  min-width: 200px;
  height: 464px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 20px 0 0 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 20px;
    display: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 30px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /* @media (max-width: 800px) {
  } */
`;

export const MenuRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 0.5px solid #9c9998;
`;
export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  p {
    font-size: 20px;
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
  width: 550px;
  background-color: #f2f2f2;
  padding: 20px;
  height: 500px;
  border-radius: 20px 0 0 20px;
  overflow-y: scroll;
  font-size: 14px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 20px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /* @media (max-width: 800px) {
    width: 100%;
    overflow-x: scroll;
  } */
`;

export const StandingsRowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px;
  border-color: #9c9998;
  border-style: solid;
  padding: 10px 0;
`;
export const Standing = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  img {
    object-fit: cover;
    height: 50px;
    width: 50px;
  }
  .ranking {
    width: 15px;
    text-align: center;
  }
  /* @media (max-width: 800px) {
    img {
      height: 20px;
      width: 20px;
    }
    .ranking {
      width: 15px;
      text-align: center;
    }
  } */
`;
export const Team = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  /* @media (max-width: 800px) {
    width: 120px;
  } */
`;
export const StandingHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Rankinginfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  p {
    width: 20px;
    text-align: center;
  }
`;
export const Last5 = styled.div`
  display: flex;
  align-items: center;
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }
  .W {
    background-color: green;
  }
  .D {
    background-color: grey;
  }
  .L {
    background-color: crimson;
  }
`;
