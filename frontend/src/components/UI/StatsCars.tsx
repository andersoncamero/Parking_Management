import type React from "react";
import { motion } from "motion/react";

interface StatCarProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

export const StatsCars: React.FC<StatCarProps> = ({
  label,
  value,
  icon,
  color,
}) => {

  return (
    <motion.div
      className="stats-cars-secondary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className={`mb-2 ${color}`}>{icon}</div>
      <h2 className="h2-primary">{label}</h2>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </motion.div>
  );
};
