import IEarthMonitor from "./interfaces/IEarthMonitor";
import OrbitalSatelite from "./interfaces/OrbitalSatelite";

export default class SunHeatMetter implements IEarthMonitor {
    private heat: number = 0;
    private maxHeat: number = -999999;
    private minHeat: number = 99999;

    constructor(
        private satelite: OrbitalSatelite
    ) {
        satelite.subscribe( this );
    }

    onUpdate(solarHeat: number): void {
        this.heat = solarHeat;
        this.maxHeat = solarHeat > this.maxHeat? solarHeat : this.maxHeat;
        this.minHeat = solarHeat < this.minHeat? solarHeat : this.minHeat;

        console.log("\n\n================================================================================");
        console.log(`Una variacion en la temperatura del sol se ha detectado`);
        console.log(`La temperatura actual del sol es: ${this.heat} mil grados centigrados`);
        console.log(`La temperatura minima registrada es: ${this.minHeat} mil grados centigrados`);
        console.log(`La temperatura maxima registrada es: ${this.maxHeat} mil grados centigrados`);
        console.log("================================================================================");
    }

}
