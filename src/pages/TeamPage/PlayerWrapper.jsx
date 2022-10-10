import React from "react";
import { PlayerCard } from "./styles";

export default function PlayerWrapper({ player, setIsPlayerSelected }) {
  return (
    <PlayerCard onClick={() => setIsPlayerSelected(player.id)}>
      <img src={player.photo} alt={`${player.name} photo`} />
      <p>{player.name}</p>
      <p>Age: {player.age}</p>
      <p>Position: {player.position}</p>
    </PlayerCard>
  );
}
