import { Home, Car, BarChart, Settings, LogOut } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { NavLink, useLocation } from "react-router";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Vehiculos", icon: Car, href: "/vehiculos" },
  { label: "Reportes", icon: BarChart, href: "/reportes" },
  { label: "Configuracion", icon: Settings, href: "/config" },
];

interface SidebarProsp {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProsp> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <aside
      className={`bg-gray-50 text-blue-900 fixed sm:static top-0 left-0 min-h-screen w-70 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 shadow-md border-r border-gray-200 flex flex-col`}
    >
      <div className="px-4 pt-4">
        <h1 className="h1-primary">🅿️ ParkingApp</h1>
      </div>

      <nav className="flex-1 mt-4 overflow-y-auto overflow-x-hidden">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = location.pathname === href;
          return (
            <motion.div
              key={href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-2"
            >
              <NavLink
                to={href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xl ${
                  isActive
                    ? "bg-blue-100/60 text-blue-700"
                    : "text-shadow-blue-800 hover:bg-gray-200"
                }`}
              >
                <Icon size={20} />
                {label}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xl font-semibold"
          onClick={() => {
            console.log("Cerrar sesión");
          }}
        >
          <LogOut size={20} />
          Cerrar sesion
        </motion.button>
      </div>
    </aside>
  );
};
