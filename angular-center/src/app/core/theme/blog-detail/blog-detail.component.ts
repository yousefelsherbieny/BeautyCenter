import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { procedures } from '../blog/procedures';

@Component({
  selector: 'app-procedure-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  procedureId!: string;  // Use the definite assignment assertion (!)
  procedure: any; // This will hold the data for the selected procedure

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.procedureId = this.route.snapshot.paramMap.get('id')!;
    this.loadProcedureDetails();
  }

  loadProcedureDetails() {
    this.procedure = procedures.find(p => p.id === this.procedureId);
  }
}
