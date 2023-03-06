export interface IVehicle {
    brakes(position: string): string;
    pompom(position: string): boolean;
    accelerator(level: number): string | number;
}