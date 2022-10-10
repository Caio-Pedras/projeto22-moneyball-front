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
  const [apiResult, setApiResult] = useState({
    player: {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 30,
      birth: {
        date: "1992-02-05",
        place: "Mogi das Cruzes",
        country: "Brazil",
      },
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
    },
    statistics: [
      {
        team: {
          id: 85,
          name: "Paris Saint Germain",
          logo: "https://media.api-sports.io/football/teams/85.png",
        },
        league: {
          id: 61,
          name: "Ligue 1",
          country: "France",
          logo: "https://media.api-sports.io/football/leagues/61.png",
          flag: "https://media.api-sports.io/flags/fr.svg",
          season: 2022,
        },
        games: {
          appearences: 9,
          lineups: 8,
          minutes: 709,
          number: null,
          position: "Attacker",
          rating: "8.044444",
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 4,
          bench: 1,
        },
        shots: {
          total: 18,
          on: 11,
        },
        goals: {
          total: 8,
          conceded: 0,
          assists: 7,
          saves: null,
        },
        passes: {
          total: 543,
          key: 25,
          accuracy: 49,
        },
        tackles: {
          total: 10,
          blocks: 1,
          interceptions: 2,
        },
        duels: {
          total: 107,
          won: 52,
        },
        dribbles: {
          attempts: 38,
          success: 16,
          past: null,
        },
        fouls: {
          drawn: 26,
          committed: 13,
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 2,
          missed: 0,
          saved: null,
        },
      },
      {
        team: {
          id: 85,
          name: "Paris Saint Germain",
          logo: "https://media.api-sports.io/football/teams/85.png",
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 3,
          lineups: 3,
          minutes: 270,
          number: null,
          position: "Attacker",
          rating: "7.766666",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 1,
          bench: 0,
        },
        shots: {
          total: 7,
          on: 4,
        },
        goals: {
          total: 1,
          conceded: 0,
          assists: 2,
          saves: null,
        },
        passes: {
          total: 207,
          key: 9,
          accuracy: 60,
        },
        tackles: {
          total: 2,
          blocks: null,
          interceptions: 1,
        },
        duels: {
          total: 39,
          won: 16,
        },
        dribbles: {
          attempts: 12,
          success: 7,
          past: null,
        },
        fouls: {
          drawn: 7,
          committed: 4,
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
      {
        team: {
          id: 85,
          name: "Paris Saint Germain",
          logo: "https://media.api-sports.io/football/teams/85.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 3,
          lineups: 2,
          minutes: 149,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 2,
          bench: 1,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 2,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 6,
          name: "Brazil",
          logo: "https://media.api-sports.io/football/teams/6.png",
        },
        league: {
          id: 34,
          name: "World Cup - Qualification South America",
          country: "World",
          logo: "https://media.api-sports.io/football/leagues/34.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 10,
          lineups: 10,
          minutes: 900,
          number: null,
          position: "Attacker",
          rating: "8.470000",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: 33,
          on: 21,
        },
        goals: {
          total: 8,
          conceded: 0,
          assists: 8,
          saves: null,
        },
        passes: {
          total: 479,
          key: 36,
          accuracy: 38,
        },
        tackles: {
          total: 12,
          blocks: null,
          interceptions: 5,
        },
        duels: {
          total: 194,
          won: 119,
        },
        dribbles: {
          attempts: 83,
          success: 55,
          past: null,
        },
        fouls: {
          drawn: 50,
          committed: 12,
        },
        cards: {
          yellow: 4,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 4,
          missed: 0,
          saved: null,
        },
      },
      {
        team: {
          id: 6,
          name: "Brazil",
          logo: "https://media.api-sports.io/football/teams/6.png",
        },
        league: {
          id: 10,
          name: "Friendlies",
          country: "World",
          logo: "https://media.api-sports.io/football/leagues/10.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 4,
          lineups: 4,
          minutes: 348,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 1,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 4,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 3,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  });
  // useEffect(() => getPlayerInfo(), [isPlayerSelected]);
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
