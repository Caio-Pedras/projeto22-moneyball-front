import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext/userContext";
import {
  BasicInfo,
  CloseButton,
  InfoByLeague,
  PlayerBox,
  PlayerHeader,
  PlayerProfile,
  StatusBox,
  Info,
  LeagueSelector,
} from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import AdvancedInfoBox from "./AdvancedInfoBox";
export default function PlayerInfo({ isPlayerSelected, setIsPlayerSelected }) {
  const { URL, API_KEY } = useContext(UserContext);
  const [isLeagueSelected, setIsLeagueSelected] = useState(false);
  const [apiResult, setApiResult] = useState();
  useEffect(() => getPlayerInfo(), [isPlayerSelected]);
  function getPlayerInfo() {
    if (!isPlayerSelected) {
      return;
    }
    const config = {
      headers: {
        ["x-rapidapi-key"]: API_KEY,
      },
    };

    axios
      .get(`${URL}/players?id=${isPlayerSelected}&season=2022`, config)
      .then((res) => {
        console.log(res);
        const data = res.data.response[0];
        console.log("data", data);
        setApiResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <PlayerBox display={isPlayerSelected}>
      <PlayerHeader>
        <h1>
          {apiResult?.player.firstname} {apiResult?.player.lastname}
        </h1>
        <CloseButton
          onClick={() => {
            setIsPlayerSelected(false);
            setIsLeagueSelected(false);
          }}
        >
          <AiFillCloseCircle />
        </CloseButton>
      </PlayerHeader>
      <Info>
        <BasicInfo>
          <PlayerProfile>
            <img
              src={apiResult?.player.photo}
              alt={`${apiResult?.player.name} photo`}
            />
          </PlayerProfile>
          <StatusBox>
            <p>Height: {apiResult?.player.height}</p>
            <p>Weight: {apiResult?.player.weight}</p>
            <p>Nationality: {apiResult?.player.nationality}</p>
            <p>Status: {apiResult?.player.injured ? "Injured" : "Healthy"}</p>
          </StatusBox>
        </BasicInfo>
        <InfoByLeague>
          {isLeagueSelected ? (
            <AdvancedInfoBox
              statistics={
                [...apiResult.statistics].filter(
                  (league) => league.league.id === isLeagueSelected
                )[0]
              }
            />
          ) : (
            apiResult?.statistics.map((league) =>
              league.league.id ? (
                <LeagueSelector
                  onClick={() => setIsLeagueSelected(league.league.id)}
                >
                  <img
                    src={league.league.logo}
                    alt={`${league.league.name} photo`}
                  />
                </LeagueSelector>
              ) : (
                <></>
              )
            )
          )}
        </InfoByLeague>
      </Info>
    </PlayerBox>
  );
}
