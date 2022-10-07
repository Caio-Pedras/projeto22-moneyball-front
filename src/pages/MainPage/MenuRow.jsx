import React, { useState } from "react";
import {
  LeagueSelector,
  LeagueWrapper,
  MenuItem,
  MenuRowWrapper,
} from "./styles";

export default function MenuRow({ flag, country, LEAGUES }) {
  const filteredLeagues = LEAGUES?.filter(
    (league) => league.country.name == country
  ).sort((leagueA, leagueB) => {
    if (leagueA.league.id > leagueB.league.id) return 1;
    else return -1;
  });
  const [displayLeagueSelector, setDisplayLeagueSelector] = useState(false);

  return (
    <MenuRowWrapper>
      <MenuItem
        onClick={() => setDisplayLeagueSelector(!displayLeagueSelector)}
        isLeagueSelectorDisplayed={displayLeagueSelector}
      >
        <img src={flag} alt={`${country} flag`} />
        <p>{country}</p>
      </MenuItem>
      <LeagueSelector display={displayLeagueSelector}>
        {filteredLeagues?.map((league) => (
          <LeagueWrapper>
            <img src={league.league.logo} alt={`${league.league.name} logo`} />
            <p>{league.league.name}</p>
          </LeagueWrapper>
        ))}
      </LeagueSelector>
    </MenuRowWrapper>
  );
}
