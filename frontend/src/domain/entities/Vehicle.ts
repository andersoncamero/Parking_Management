export interface Vehicle {
    licensePlate: string;
    entryTime: Date;
    exitTime?: Date;
    clientId: string;
    attendedBy: string;
}