import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext/userContext";
import { Container, TeamHeader, TeamHeaderInfo, TeamWrapper } from "./styles";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PlayerWrapper from "./PlayerWrapper";
import PlayerInfo from "./PlayerInfo";

import { TbArrowBack } from "react-icons/tb";
export default function TeamPage() {
  const { URL, API_KEY } = useContext(UserContext);
  const { teamId } = useParams();
  const [apiResult, setApiResult] = useState();
  const [isPlayerSelected, setIsPlayerSelected] = useState(false);
  useEffect(() => getTeamPlayers(), []);
  function getTeamPlayers() {
    const config = {
      headers: {
        ["x-rapidapi-key"]: API_KEY,
      },
    };

    axios
      .get(`${URL}/players/squads?team=${teamId}`, config)
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
    <Container>
      <TeamWrapper selected={isPlayerSelected}>
        <TeamHeader>
          <TeamHeaderInfo>
            <img
              src={apiResult?.team.logo}
              alt={`${apiResult?.team.name} logo`}
              onClick={() => console.log(isPlayerSelected)}
            />
            <h1>{apiResult?.team.name}</h1>
          </TeamHeaderInfo>
          <Link to={"/main"}>
            <TbArrowBack />
          </Link>
        </TeamHeader>
        {apiResult?.players.map((player) => (
          <PlayerWrapper
            setIsPlayerSelected={setIsPlayerSelected}
            player={player}
            key={player.id}
          />
        ))}
      </TeamWrapper>
      <PlayerInfo
        isPlayerSelected={isPlayerSelected}
        setIsPlayerSelected={setIsPlayerSelected}
      />
    </Container>
  );
}
