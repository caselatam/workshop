import { Injectable } from '@angular/core';

import { Workshop } from './workshop';
import { WORKSHOPS } from './mock-workshops'
import { Attendee } from './attendee'
import { AttendeeService } from './attendee.service';

@Injectable()
export class WorkshopService {

    constructor(private attendeeService: AttendeeService) { }

    public getWorkshops(): Promise<Workshop[]> {
        return Promise.resolve(WORKSHOPS);
    }

    public getFilteredWorkshops(): Promise<Workshop[]> {
        return Promise.resolve(WORKSHOPS)
            .then(workshops =>
                workshops.filter(workshop => {
                    if (this.attendeeService.attendee.level < 3) {
                        return workshop.level <= this.attendeeService.attendee.level;
                    }
                    return workshop.level === this.attendeeService.attendee.level;
                }));
    }
}

