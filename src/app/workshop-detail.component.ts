import {
    Component,
    OnInit, OnChanges,
    EventEmitter, Input, Output,
    trigger, state, style, animate, transition
} from '@angular/core';

import { Workshop } from './workshop';
import { Subscription } from './subscription';
import { SubscriptionService } from './subscription.service';

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
export class WorkshopDetailComponent {
    @Input() workshop: Workshop;
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    subscription: Subscription = new Subscription(
        new Date(),
        'Juan',
        'Perez',
        'mail@mail.com',
        1,
        101,
        'Vinculación con Egresados',
        'título',
        'Bob Burdensky',
        'Washington',
        'mex'
    );

    lista: Subscription[];

    constructor(private subscriptionService: SubscriptionService) { }

    close(): void {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

    subscribe(): void {
        this.subscriptionService.postSubscription()
            .then(subs => {
                this.lista.push(subs);
            })
    }

}