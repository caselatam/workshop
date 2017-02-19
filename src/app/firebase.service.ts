import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';

import { Workshop } from './workshop';
import { Attendee } from './attendee';
import { Subscription } from './subscription';


@Injectable()
export class FirebaseService {

    private url: string = "https://case17-workshop.firebaseio.com/user.json";
    

    constructor(private http: Http) { }

    public setSubscription(subscription: Subscription, id: number) {
        var body = JSON.stringify({ subscription, id: id });

        return this.http.post(this.url, body)
            .map(response => response.json());
    }

    public getSubscription() {
        return this.http.get(this.url)
             .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}