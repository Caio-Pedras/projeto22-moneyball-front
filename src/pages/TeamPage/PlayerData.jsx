import React from "react";
import { PlayerDataWrapper, StatistcsColumns } from "./styles";

export default function PlayerData({ types, statistics }) {
  const keys = types.map((type) => Object.keys(statistics[type]));
  console.log(keys);
  console.log(statistics);
  return (
    <PlayerDataWrapper>
      {keys.map((key, index1) => (
        <StatistcsColumns key={index1}>
          <h1>{types[index1]}</h1>
          {key.map((item, index2) => (
            <p key={`${index2} ${index1}`}>
              {item}:
              {statistics[types[index1]][item]
                ? statistics[types[index1]][item]
                : 0}
            </p>
          ))}
        </StatistcsColumns>
      ))}
    </PlayerDataWrapper>
  );
}
