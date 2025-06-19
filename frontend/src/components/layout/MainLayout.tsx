import type React from "react";
import { motion } from "motion/react";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router";
import { useState } from "react";
import { Info } from "./Info";
import type { RegistroVehiculo } from "./types";


const registros: RegistroVehiculo[] = [
  { placa: "ABC123", hora: "08:15", ubicacion: "Zona A - Piso 1" },
  { placa: "XYZ987", hora: "08:45", ubicacion: "Zona B - Piso 2" },
  { placa: "JKL456", hora: "09:10", ubicacion: "Zona C - Piso 3" },
  { placa: "MNO321", hora: "09:30", ubicacion: "Zona A - Piso 1" },
  { placa: "TUV654", hora: "10:05", ubicacion: "Zona B - Piso 2" },
  { placa: "DEF789", hora: "10:45", ubicacion: "Zona C - Piso 3" },
  { placa: "GHI147", hora: "11:15", ubicacion: "Zona A - Piso 1" },
  { placa: "LMN258", hora: "11:45", ubicacion: "Zona B - Piso 2" },
  { placa: "QRS369", hora: "12:30", ubicacion: "Zona C - Piso 3" },
  { placa: "UVW753", hora: "13:00", ubicacion: "Zona A - Piso 1" },
];

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-white relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <motion.main
          className="flex-1 p-6 overflow-y-hidden "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
        <div className="flex-2 ">
          <Info registros={registros}/>
        </div>
      </div>
    </div>
  );
};
