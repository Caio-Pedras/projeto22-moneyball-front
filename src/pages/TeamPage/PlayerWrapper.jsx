import React from "react";
import { PlayerBox } from "./styles";

export default function PlayerWrapper({ player }) {
  return (
    <PlayerBox>
      <img src={player.photo} alt={`${player.name} photo`} />
      <p>{player.name}</p>
      <p>Age: {player.age}</p>
      <p>Position: {player.position}</p>
    </PlayerBox>
  );
}
