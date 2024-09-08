import { Component, OnInit } from '@angular/core';
import { Service } from './services.model';
import { services } from './services-list'; // Import the services array

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'] // Fix the styleUrls property here
})
export class ServicePageComponent implements OnInit {
  services: Service[] = []; // Initialize the services array

  constructor() {}

  ngOnInit(): void {
    this.services = services; // Assign the imported services array
  }
}
