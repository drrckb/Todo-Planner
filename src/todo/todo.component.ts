import { Component } from '@angular/core';

interface todo {
  task: string;
  completed: boolean;
};

@Component({
  selector: 'todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  show: boolean = false
  hideButton: boolean = true;
  newTask: string = '';
  tasks: todo[] = [
    { task: 'Pick up cat treats.', completed: false},
    { task: 'Play with Xena.', completed: true},
    { task: 'Take Arlo out.', completed: false},
    { task: 'Start packing.', completed: false}
  ];


  filterText: string = '';
  filteredTasks = [...this.tasks];

  filterTasks() {
    this.filteredTasks = this.tasks.filter(
      item => item.task.toLowerCase().includes(this.filterText.toLowerCase())
    );

    if (this.filterText === '') {
      this.filteredTasks = [...this.tasks];
    }
  }


  completeTask(task) {
    task.completed = true;

    this.filteredTasks = [...this.tasks];
  };


  removeTask(i) {
    this.tasks.splice(i, 1);

    this.filteredTasks = [...this.tasks];
  };


  addTask() {
    const newItem = {
      task: this.newTask,
      completed: false
    };

    this.tasks.push(newItem);
    this.newTask = null;

    this.filteredTasks = [...this.tasks];
  };



}
