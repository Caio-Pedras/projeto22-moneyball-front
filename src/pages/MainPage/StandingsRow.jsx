import React from "react";
import {
  Last5,
  Rankinginfo,
  Standing,
  StandingsRowWrapper,
  Team,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
export default function StandingsRow({ team }) {
  console.log(team);
  return (
    <StandingsRowWrapper>
      <Standing>
        <p className="ranking">{team.rank}</p>
        <Link to={`/team/${team.team.id}`}>
          <Team>
            <img src={team.team.logo} alt={`${team.team.name} logo`} />
            <p>{team.team.name}</p>
          </Team>
        </Link>
      </Standing>
      <Rankinginfo>
        <p>{team.points}</p>
        <p>{team.all.played}</p>
        <p>{team.all.win}</p>
        <p>{team.all.draw}</p>
        <p>{team.all.lose}</p>
        <p>{team.all.goals.for}</p>
        <p>{team.all.goals.against}</p>
        <p>{team.goalsDiff}</p>
        <Last5>
          {team.form.split("")?.map((matchResult) => (
            <div className={matchResult}></div>
          ))}
        </Last5>
      </Rankinginfo>
    </StandingsRowWrapper>
  );
}
