import { Injectable } from '@angular/core';

import { Attendee } from './attendee'

@Injectable()
export class AttendeeService {
    attendee:Attendee;

    saveAttendee(attendee:Attendee):void{
        this.attendee = attendee;
    }

    getAttendee():Attendee{
        return this.attendee;
    }
}