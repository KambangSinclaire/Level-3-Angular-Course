import { IVehicle } from "./vehicle.interface";

export class Vehicle implements IVehicle {

    brakes(position: string): string {
        // write our logic
        return 'Car stopped!'
    }

    pompom(position: string): boolean {
        // write our logic
        return true;
    }

    accelerator(level: number): string | number {
        // write our logic
        return 'Increase speed!'
    }


}

const schoolBus = new Vehicle();
console.log('schoolBus accelerator says ', schoolBus.accelerator(5));
