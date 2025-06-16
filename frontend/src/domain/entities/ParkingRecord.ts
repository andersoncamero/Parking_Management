import type { Client } from "./Client";
import type { Employee } from "./Employee";
import type { Vehicle } from "./Vehicle";

export interface ParkingRecord {
    id: string;
    vehicle: Vehicle;
    client: Client;
    employee: Employee;
    entryTime: Date;
    exitTime?: Date;
    hourlyRate: number;
    totalAmount?: number;
}