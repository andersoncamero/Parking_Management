import { motion } from "motion/react";
import { Car, XCircle, CheckCircle } from "lucide-react";
import type React from "react";
import { StatsCars } from "./StatsCars";

export const StatsCarsList: React.FC = () => {
  const stats = [
    {
      label: "Total de plazas",
      value: 100,
      icon: <Car size={32} />,
      color: "text-blue-600",
    },
    {
      label: "Plazas ocupadas",
      value: 47,
      icon: <XCircle size={32} />,
      color: "text-red-500",
    },
    {
      label: "Disponibles",
      value: 53,
      icon: <CheckCircle size={32} />,
      color: "text-green-500",
    },
  ];

  return (
    <motion.div
      className="stats-cars-primary"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
        {stats.map((stat, index)=>(
            <StatsCars
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            />
        ))}
    </motion.div>
  );
};
