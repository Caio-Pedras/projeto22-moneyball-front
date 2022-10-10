import React, { useState } from "react";
import { League, StatisticsWrapper, StatisticType } from "./styles";
import {
  GiSoccerField,
  GiSoccerBall,
  GiCardPick,
  GiSoccerKick,
} from "react-icons/gi";

import PlayerData from "./PlayerData";
export default function AdvancedInfoBox({ statistics }) {
  const [typeSelected, setTypeSelected] = useState(false);
  return (
    <>
      <League>
        <img
          src={statistics.league.logo}
          alt={`${statistics.league.name} logo`}
        />
      </League>
      <StatisticsWrapper>
        <StatisticType>
          <GiSoccerField onClick={() => setTypeSelected(["games"])} />
          <GiSoccerBall
            onClick={() =>
              setTypeSelected(["passes", "dribbles", "duels", "tackles"])
            }
          />
          <GiSoccerKick
            onClick={() => setTypeSelected(["shots", "goals", "penalty"])}
          />
          <GiCardPick onClick={() => setTypeSelected(["fouls", "cards"])} />
        </StatisticType>
        {typeSelected ? (
          <PlayerData types={typeSelected} statistics={statistics} />
        ) : (
          <></>
        )}
      </StatisticsWrapper>
    </>
  );
}
