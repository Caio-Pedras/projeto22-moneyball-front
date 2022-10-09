import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContentWrapper,
  Menu,
  Rankinginfo,
  Standing,
  StandingHeader,
  Standings,
  StandingsRowWrapper,
} from "./styles";
import axios from "axios";
import MenuRow from "./MenuRow";
import StandingsRow from "./StandingsRow";
import { UserContext } from "../../userContext/userContext";
export default function MainPage() {
  const { URL, API_KEY } = useContext(UserContext);
  const [apiResult, setApiResult] = useState();
  const [standings, setStandings] = useState();
  console.log(URL, API_KEY, standings);
  useEffect(() => getLeagues(), []);
  const COUNTRIES = [
    "England",
    "Germany",
    "France",
    "Italy",
    "Netherlands",
    "Portugal",
    "Spain",
  ];
  const FLAGS = {
    Portugal: "https://media.api-sports.io/flags/pt.svg",
    England: "https://media.api-sports.io/flags/gb.svg",
    Spain: "https://media.api-sports.io/flags/es.svg",
    Italy: "https://media.api-sports.io/flags/it.svg",
    Netherlands: "https://media.api-sports.io/flags/nl.svg",
    France: "https://media.api-sports.io/flags/fr.svg",
    Germany: "https://media.api-sports.io/flags/de.svg",
  };
  function getLeagues() {
    const config = {
      headers: {
        ["x-rapidapi-key"]: API_KEY,
      },
    };

    axios
      .get(`${URL}/leagues?season=2022&current=true&type=league`, config)
      .then((res) => {
        console.log(res);
        const data = res.data.response
          .filter(
            (league) =>
              COUNTRIES.includes(league.country.name) &&
              league.seasons[0].coverage.standings &&
              league.seasons[0].coverage.players &&
              league.seasons[0].coverage.odds &&
              league.seasons[0].coverage.fixtures.lineups &&
              league.seasons[0].coverage.fixtures.statistics_players
          )
          .sort((leagueA, leagueB) => {
            if (leagueA.country.name > leagueB.country.name) return 1;
            else return -1;
          });
        setApiResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getSelectedLeagueStandings(id) {
    console.log(id);

    const config = {
      headers: {
        ["x-rapidapi-key"]: API_KEY,
      },
    };
    axios
      .get(`${URL}/standings?season=2022&league=${id}`, config)
      .then((res) => {
        console.log(res.data.response);
        setStandings(res.data.response[0].league.standings[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Header />
      <Container>
        <ContentWrapper>
          <Menu>
            {COUNTRIES.map((country) => (
              <MenuRow
                selectLeague={getSelectedLeagueStandings}
                country={country}
                flag={FLAGS[country]}
                LEAGUES={apiResult}
              />
            ))}
          </Menu>

          <Standings onClick={() => console.log(standings)}>
            <StandingHeader>
              <Standing></Standing>
              <Rankinginfo>
                <p>Pts</p>
                <p>MP</p>
                <p>W</p>
                <p>D</p>
                <p>L</p>
                <p>GF</p>
                <p>GA</p>
                <p>GD</p>
                <h1>Last 5</h1>
              </Rankinginfo>
            </StandingHeader>
            {standings?.map((team) => (
              <StandingsRow team={team} />
            ))}
          </Standings>
        </ContentWrapper>
      </Container>
    </>
  );
}
