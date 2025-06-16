import type React from "react";
import { StatsCarsList } from "../UI/StatsCarsList";


export const DashboardPage: React.FC = () => {
    return(
        <div className="w-full flex flex-col gap-6">
            <h2 className="h2-primary">Resumen del parqueadero</h2>
            <StatsCarsList/>
        </div>
    )
}