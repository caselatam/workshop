import { Component, OnInit, DoCheck } from '@angular/core';

import { Workshop } from './workshop';
import { WorkshopService } from './workshop.service';
import { Attendee } from './attendee';
import { AttendeeService } from './attendee.service';

@Component({
  selector: 'workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
  providers: [WorkshopService]
})
export class WorkshopComponent implements OnInit {

  workshops: Workshop[];
  selectedWorkshop: Workshop;
  level: number;
  filteredWorkshops: Array<Workshop> = this.workshops;
  attendee = new Attendee();

  // pruebas
  showDialog: boolean = false;

  constructor(private workshopService: WorkshopService, private attendeeService: AttendeeService) { }

  ngOnInit(): void {
    this.getWorkshops();
    this.getAttendee();
  }


  getWorkshops(): void {
    this.workshopService.getFilteredWorkshops().then(workshops => this.workshops = workshops);
  }

  // TODO:BORRAR
  getDemoWorkshops() {
    this.workshopService.getWorkshops().then(workshops => this.workshops = workshops);
  }

  getAttendee() {
    this.attendee = this.attendeeService.getAttendee();
  }

  onSelect(ws: Workshop): void {
    this.selectedWorkshop = ws;
    // prueba
    this.showDialog = !this.showDialog;

  }

  changeLevel(level: number): void {
    this.level = level;
    this.filteredWorkshops = this.filterWorkshopByLevel(level);
  }

  filterWorkshopByLevel(level: number): Workshop[] {
    let tempWorkshop;
    if (level < 3) {
      tempWorkshop = this.workshops
        .filter(ws => ws.level <= level);
      return tempWorkshop;
    }
    tempWorkshop = this.workshops
      .filter(ws => ws.level === 3);
    return tempWorkshop;
  }
}

