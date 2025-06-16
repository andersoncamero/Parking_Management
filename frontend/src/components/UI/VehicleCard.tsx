import React from "react";
import { Card } from "./Card";

interface VehicleCardProps {
  plate: string;
  entryTime: string;
  elapsedTime: string;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  plate,
  entryTime,
  elapsedTime,
}) => {
  return (
    <Card className="mb-4">
      <h3 className="h3-primary">Placa: {plate}</h3>
      <p>Hora de entrada: {entryTime}</p>
      <p>Tiempo transcurrido: {elapsedTime}</p>
    </Card>
  );
};
