export class Location {
    location: string;
    temperature: number;
    tempMin: number;
    tempMax: number;
    wind: number;
    sunrise: Date;
    sunset: Date;

    constructor(values: Object= {}) {
        Object.assign(this, values);
    }
}
