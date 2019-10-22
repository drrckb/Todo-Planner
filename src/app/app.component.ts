import { Component } from '@angular/core';

interface todo {
  task: string;
  completed: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  // show: boolean = false
  // hideButton: boolean = true;
  // newTask: string = '';
  //
  // tasks: todo[] = [
  //   { task: 'Pick up cat treats.', completed: false},
  //   { task: 'Play with Xena.', completed: true},
  //   { task: 'Take Arlo out.', completed: false},
  //   { task: 'Start packing.', completed: false}
  // ];
  //
  //
  // completeTask(task) {
  //   task.completed = true;
  // };
  //
  // removeTask(i) {
  //   this.tasks.splice(i, 1);
  // };
  //
  // addTask() {
  //   const newItem = {
  //     task: this.newTask,
  //     completed: false
  //   };
  //
  //   this.tasks.push(newItem);
  //   this.newTask = null;
  // };

}
