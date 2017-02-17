import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


import { Attendee } from './attendee';
import { AttendeeService } from './attendee.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    //Attendee placeholder
    attendee = new Attendee();

    attendee2 = new Attendee();

    // Esperience objects
    experience = [
        { level: 1, description: 'Primera vez' },
        { level: 2, description: '1 a 4 años' },
        { level: 3, description: '5 años o más' }
    ];

    constructor(private router: Router, private attendeeService: AttendeeService) { }

    onSubmit() {
        this.attendee.registryDate = new Date();
        this.attendeeService.saveAttendee(this.attendee);
        this.attendee2 = this.attendeeService.getAttendee();
        this.router.navigate(['/workshop']);
        
    }
}