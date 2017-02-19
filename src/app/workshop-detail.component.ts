import {
    Component,
    OnInit, OnChanges, AfterViewInit,
    EventEmitter, Input, Output,
    trigger, state, style, animate, transition
} from '@angular/core';
import { Router } from '@angular/router';

import { Workshop } from './workshop';
import { Subscription } from './subscription';
import { Attendee } from './attendee';
import { FirebaseService } from './firebase.service';

@Component({
    moduleId: module.id,
    selector: 'workshop-detail',
    templateUrl: 'workshop-detail.component.html',
    styleUrls: ['workshop-detail.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'scale3d(.3, .3, .3)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ])
    ]
})
export class WorkshopDetailComponent implements OnInit {
    @Input() public attendee: Attendee;
    @Input() public workshop: Workshop;
    @Input() public closable = true;
    @Input() public visible: boolean;
    @Output() public visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public subscription = new Subscription();

    // placeholder for the server response
    public response: string;

    constructor(private _firebase: FirebaseService, private router: Router) {
    }

    ngOnInit() {
        this.subscription.registryDate = this.attendee.registryDate;
        this.subscription.name = this.attendee.name;
        this.subscription.lastName = this.attendee.lastName;
        this.subscription.email = this.attendee.email;
        // this.subscription.id = this.workshop.id;
        // this.subscription.category = this.workshop.category;
        // this.subscription.title = this.workshop.title;
        // this.subscription.speaker = this.workshop.speaker;
        // this.subscription.instituition = this.workshop.instituition;
        // this.subscription.country = this.workshop.country;
    }

    public close(): void {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }


    public subscribeToWorkshop() {
        this._firebase.setSubscription(this.subscription, this.workshop.id)
            .subscribe(
            user => this.response = JSON.stringify(user),
            error => console.log(error)
            );
        this.router.navigate(['/success']);
    }


}