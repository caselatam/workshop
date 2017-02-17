import {
    Component,
    OnInit, OnChanges, AfterViewInit,
    EventEmitter, Input, Output,
    trigger, state, style, animate, transition
} from '@angular/core';

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
export class WorkshopDetailComponent implements AfterViewInit {
    @Input() attendee: Attendee;
    @Input() workshop: Workshop;
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    subscription = new Subscription();

    lista: Subscription[];

    // placeholder for the server response
    response: string;

    constructor(private _firebase: FirebaseService) {
    }

    ngAfterViewInit() {
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

    close(): void {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }


    subscribeToWorkshop() {
        this._firebase.setSubscription(this.subscription, this.workshop.id)
            .subscribe(
                user=> this.response = JSON.stringify(user),
                error=> console.log(error)                
            );
    }

    // viewSubscriptions() { 
    //     this._firebase.getSubscription()
    //         .subscribe(
    //             user=> this.response = JSON.stringify(user),
    //             error=> console.log(error)                
    //         );
    // }

}