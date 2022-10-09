import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext/userContext";
import { Container, TeamHeader, TeamWrapper } from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import PlayerWrapper from "./PlayerWrapper";
export default function TeamPage() {
  const { URL, API_KEY } = useContext(UserContext);
  const { teamId } = useParams();
  const [apiResult, setApiResult] = useState({
    team: {
      id: 85,
      name: "Paris Saint Germain",
      logo: "https://media.api-sports.io/football/teams/85.png",
    },
    players: [
      {
        id: 731,
        name: "K. Navas",
        age: 36,
        number: 1,
        position: "Goalkeeper",
        photo: "https://media.api-sports.io/football/players/731.png",
      },
      {
        id: 19014,
        name: "Sergio Rico",
        age: 29,
        number: 16,
        position: "Goalkeeper",
        photo: "https://media.api-sports.io/football/players/19014.png",
      },
      {
        id: 20568,
        name: "A. Letellier",
        age: 32,
        number: 90,
        position: "Goalkeeper",
        photo: "https://media.api-sports.io/football/players/20568.png",
      },
      {
        id: 1622,
        name: "G. Donnarumma",
        age: 23,
        number: 99,
        position: "Goalkeeper",
        photo: "https://media.api-sports.io/football/players/1622.png",
      },
      {
        id: 9,
        name: "Achraf Hakimi Mouh",
        age: 24,
        number: 2,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/9.png",
      },
      {
        id: 262,
        name: "Presnel Kimpembe",
        age: 27,
        number: 3,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/262.png",
      },
      {
        id: 738,
        name: "Sergio Ramos García",
        age: 36,
        number: 4,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/738.png",
      },
      {
        id: 257,
        name: "Marcos  Aoás Corrêa",
        age: 28,
        number: 5,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/257.png",
      },
      {
        id: 258,
        name: "Juan Bernat Velasco",
        age: 29,
        number: 14,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/258.png",
      },
      {
        id: 263482,
        name: "Nuno Mendes",
        age: 20,
        number: 25,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/263482.png",
      },
      {
        id: 1146,
        name: "Nordi Mukiele Mulere",
        age: 25,
        number: 26,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/1146.png",
      },
      {
        id: 268571,
        name: "E. Bitshiabu",
        age: 17,
        number: 31,
        position: "Defender",
        photo: "https://media.api-sports.io/football/players/268571.png",
      },
      {
        id: 273,
        name: "M. Verratti",
        age: 30,
        number: 6,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/273.png",
      },
      {
        id: 328,
        name: "Fabián Ruiz",
        age: 26,
        number: 8,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/328.png",
      },
      {
        id: 381,
        name: "Danilo Pereira",
        age: 31,
        number: 15,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/381.png",
      },
      {
        id: 128384,
        name: "Vitinha",
        age: 22,
        number: 17,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/128384.png",
      },
      {
        id: 513,
        name: "Renato Sanches",
        age: 25,
        number: 18,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/513.png",
      },
      {
        id: 2056,
        name: "Pablo Sarabia",
        age: 30,
        number: 19,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/2056.png",
      },
      {
        id: 930,
        name: "Carlos Soler",
        age: 25,
        number: 28,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/930.png",
      },
      {
        id: 336657,
        name: "W. Zaïre-Emery",
        age: 16,
        number: 33,
        position: "Midfielder",
        photo: "https://media.api-sports.io/football/players/336657.png",
      },
      {
        id: 278,
        name: "Kylian Mbappé Lottin",
        age: 24,
        number: 7,
        position: "Attacker",
        photo: "https://media.api-sports.io/football/players/278.png",
      },
      {
        id: 276,
        name: "Neymar da Silva Santos Júnior",
        age: 30,
        number: 10,
        position: "Attacker",
        photo: "https://media.api-sports.io/football/players/276.png",
      },
      {
        id: 154,
        name: "Lionel Andrés Messi Cuccittini",
        age: 35,
        number: 30,
        position: "Attacker",
        photo: "https://media.api-sports.io/football/players/154.png",
      },
      {
        id: 174565,
        name: "H. Ekitike",
        age: 20,
        number: 44,
        position: "Attacker",
        photo: "https://media.api-sports.io/football/players/174565.png",
      },
    ],
  });
  // useEffect(() => getTeamPlayers(), []);
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
      <TeamWrapper>
        <TeamHeader>
          <img
            src={apiResult?.team.logo}
            alt={`${apiResult?.team.name} logo`}
          />
          <h1>{apiResult?.team.name}</h1>
        </TeamHeader>
        {apiResult?.players.map((player) => (
          <PlayerWrapper player={player} key={player.id} />
        ))}
      </TeamWrapper>
    </Container>
  );
}
