import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Subscription } from './subscription';

@Injectable()
export class SubscriptionService {
    url: string = "https://script.google.com/macros/s/AKfycbzUOqFCJ964mSlVuIDuTYQzIhsVfodEyOLrSbxazPC_rJko74Wk/exec";
    ubscription: Subscription = new Subscription(
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

    constructor(private http: Http) { }

    postSubscription(): Promise<Subscription> {
        var subs = JSON.stringify(this.ubscription);
        var header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this.http
            .post(this.url, subs, { headers: header })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError)
            ;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}