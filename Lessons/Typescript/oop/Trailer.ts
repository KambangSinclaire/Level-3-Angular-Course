import { IVehicle } from "./vehicle.interface";

export class Trialer implements IVehicle {
    brakes(position: string): string {
        throw new Error("Method not implemented.");
    }
    pompom(position: string): boolean {
        throw new Error("Method not implemented.");
    }
    accelerator(level: number): string | number {
        throw new Error("Method not implemented.");
    }

}