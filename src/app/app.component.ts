import { Component } from '@angular/core';

export class Sensor {
  id: number;
  name: string;
}

const SENSORS: Sensor[] = [
  { id: 1, name: 'Temperature' },
  { id: 2, name: 'Conductivity' },
  { id: 3, name: 'pH' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'benita';
  sensors = SENSORS;
  selectedSensor: Sensor;
 
  onSelect(sensor: Sensor): void {
    this.selectedSensor = sensor;
  }
}
