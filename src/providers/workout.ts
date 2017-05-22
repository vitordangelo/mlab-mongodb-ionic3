import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Workout provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Workout {

  apiKey: string;
  workoutUrl: string;
  
  constructor(public http: Http) {
    console.log('Hello Workout Provider');
    this.http = http;

    this.apiKey = 'M2PCWtEyaJFb90LOTr5fZU8RH6LWA4X4';
    this.workoutUrl = 'https://api.mlab.com/api/1/databases/myworkouts/collections/workouts';
  }

  getWorkouts() {
    return this.http.get(this.workoutUrl + '?apiKey='+ this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutUrl+'?apiKey='+this.apiKey, JSON.stringify(workout),{headers: headers})
            .map(res => res.json());
    }

  deleteWorkout(workoutId) {
    return this.http.delete(this.workoutUrl + '/' + workoutId + '?apiKey='+ this.apiKey)
      .map(res => res.json());
  }

}
