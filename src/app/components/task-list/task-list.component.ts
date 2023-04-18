import { Component ,OnInit} from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  task1 :ITask = {
    title:"Task 1",
    description:"Description 1",
    level:Levels.Info,
    completed: true
  };

  task2 :ITask = {
    title:"Task 2",
    description:"Description 2",
    level:Levels.Urgent,
    completed: true
  };
  
  constructor(){

  }
  ngOnInit(): void {
    console.log("--------onInit-------");
  }

  deleteTask(task:ITask):void{
    //TODO
    alert('--------Se procede a eliminacion de tarea-------${task.title}'+task.title);
  }

}
