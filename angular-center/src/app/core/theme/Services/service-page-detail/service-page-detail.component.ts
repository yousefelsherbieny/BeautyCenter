import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { services } from '../service-page/services-list';
import { Service } from '../service-page/services.model';

@Component({
  selector: 'app-service-page-detail',
  templateUrl: './service-page-detail.component.html',
  styleUrls: ['./service-page-detail.component.scss']
})
export class ServicePageDetailComponent implements OnInit {
  service!: Service; // The selected service

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const serviceName = this.route.snapshot.paramMap.get('name'); // Get the service name from the route
    if (serviceName) {
      this.service = services.find(s => s.link.includes(serviceName))!; // Find the service by its link
    }
  }
}
