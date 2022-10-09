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
`;
export const TeamHeader = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  background-color: #0d1724;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  h1 {
    color: white;
    font-weight: 700;
    font-size: 30px;
  }
  img {
    width: 80px;
    height: 80px;
  }
`;
export const PlayerBox = styled.div`
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
