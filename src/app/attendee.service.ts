import { Injectable } from '@angular/core';

import { Attendee } from './attendee';

@Injectable()
export class AttendeeService {
     attendee: Attendee;
   
    public saveAttendee(attendee: Attendee): void {
        this.attendee = attendee;
        
    }

    public getAttendee(): Attendee {
        return this.attendee;
    }
}