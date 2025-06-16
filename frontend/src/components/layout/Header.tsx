import { Menu, Bell, UserCircle } from "lucide-react";
import type React from "react";
import { Button } from "../UI/Button";

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-blue-100 text-blue-900 border-b border-blue-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Button onClick={()=> toggleSidebar()} className="sm:hidden">
          <Menu size={24} />
        </Button>
        <h1 className="h1-primary">Panel de control</h1>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Button className="relative">
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
