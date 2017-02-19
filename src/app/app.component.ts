import { Component } from '@angular/core';

import { Attendee } from './attendee';
import { AttendeeService } from './attendee.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']
    
})
export class AppComponent {
    public title: string = 'Registro a los Talleres';
}
