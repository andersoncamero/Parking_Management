import { Menu, Bell, UserCircle } from "lucide-react";
import type React from "react";
import { Button } from "../UI/Button";

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-gray-50 text-blue-900 border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Button onClick={toggleSidebar} className="sm:hidden">
          <Menu size={24} />
        </Button>
        <h1 className="h1-primary">Panel de control</h1>
      </div>
      <div>
        <h3>Ingresos : $150.000 </h3>
      </div>
      <div>
        <p>Hora de inicio: 6:00 Am</p>
      </div>
      <div>
        <Button className="btn-recientes">
          ingresos recientes
        </Button></div>
      <div>
        <div className="flex items-center gap-4">
          <div className="flex w-full place-content-center mb-1">
            <Button className="relative w-2 rounded-full">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <UserCircle size={32} className="text-gray-600" />
          <div className="hidden sm:flex flex-col leading-tight">
            <samp className="text-sm font-medium text-gray-800">Anderson</samp>
            <samp className="text-xs text-gray-500">Admin</samp>
          </div>
        </div>
      </div>
    </header>
  );
};
