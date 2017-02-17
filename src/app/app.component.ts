import { Component } from '@angular/core';

import { Attendee } from './attendee';
import { AttendeeService } from './attendee.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `
        <div class="wrapper">
            <h1>{{title}}</h1>
            <router-outlet></router-outlet>
        </div>
        `,
    
})
export class AppComponent {
    title = 'Registro a los Talleres';
}
