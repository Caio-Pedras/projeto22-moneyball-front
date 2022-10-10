import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  row-gap: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 20px;
  overflow-y: scroll;
  position: relative;
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
  filter: ${(props) => (props.selected ? "opacity(70%) blur(2px);" : "none")};
  pointer-events: ${(props) => (props.selected ? "none" : "auto")};
`;
export const TeamHeader = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d1724;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  color: white;
  font-size: 50px;
`;
export const TeamHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  h1 {
    font-weight: 700;
    font-size: 30px;
  }
  img {
    width: 80px;
    height: 80px;
  }
`;

export const PlayerCard = styled.div`
  text-align: center;
  width: 200px;
  background-color: #fafafa;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #3f546e;
    transform: scale(1.1);
  }
  img {
    border-radius: 20px;
    width: 150px;
    height: 150px;
  }
`;

export const PlayerBox = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  background-color: #f2f2f2;
  max-width: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 20px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
export const BasicInfo = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const PlayerProfile = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    img {
      width: 100px;
      height: 100px;
      border-radius: 20px;
    }
  }
`;
export const PlayerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
  }
`;
export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    p {
      font-size: 15px;
    }
  }
`;
export const CloseButton = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const InfoByLeague = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  justify-content: space-around;
`;
export const LeagueSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 130px;
  background-color: #3f546e;
  padding: 20px;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    filter: grayscale(70%);
  }
  :hover {
    background-color: #3f546e;
    transform: scale(1.1);
    img {
      filter: brightness(150%);
    }
  }
  @media (max-width: 600px) {
    padding: 10px;
    width: 70px;
    height: 100px;
  }
`;

export const League = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 130px;
  background-color: #3f546e;
  padding: 20px;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    filter: brightness(150%);
  }
  @media (max-width: 600px) {
    padding: 10px;
    width: 80px;
    height: 80px;
  }
`;
export const StatisticType = styled.div`
  height: 100%;
  display: flex;
  font-size: 50px;
  color: #3f546e;
  justify-content: space-around;
  align-items: flex-start;
  column-gap: 20px;

  flex-wrap: wrap;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 20px;
`;
export const StatistcsColumns = styled.div``;
export const PlayerDataWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 15px;
  border: 0.5px solid #9c9998;
  border-radius: 20px;
  padding: 10px;
`;
