import { Component} from '@angular/core';
import { Router } from '@angular/router';


import { Attendee } from './attendee';
import { AttendeeService } from './attendee.service';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    //Attendee placeholder
    isAuth: boolean = false;
    attendee = new Attendee();

    constructor(private router: Router, private attendeeService: AttendeeService, private authService: AuthService) { }

    onSubmit() {
        this.attendee.registryDate = new Date();
        this.attendeeService.saveAttendee(this.attendee);
        this.router.navigate(['/workshop']);

    }
}