import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Workout } from './../../providers/workout';
import { WorkoutDetailsPage } from './../workout-details/workout-details';

/*
  Generated class for the Workouts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {

  workouts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workout: Workout) {
     this.workout.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
      console.log('Oii');
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }

  ngOnInit() {
    this.workout.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }

  ionViewWillEnder() {
    this.workout.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

}
