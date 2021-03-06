import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";

export default class SolarFlare implements IEarthMonitor {

    constructor(
        private satelite: OrbitalSatelite
    ) {
        satelite.subscribe( this );
    }


    onUpdate(solarHeat: number): void {
        if (solarHeat > 400) {
            console.log("\n\n================================================================================");
            console.log(`Se detecto una erupcion solar con ${solarHeat} mil grados centigrados`);
            console.log("================================================================================");
        } 
    }

}
