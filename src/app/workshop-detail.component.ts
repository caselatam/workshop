import {
    Component,
    OnInit, OnChanges,
    EventEmitter, Input, Output,
    trigger, state, style, animate, transition
} from '@angular/core';

import { Workshop } from './workshop'

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

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

}