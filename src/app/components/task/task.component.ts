import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  @Input() task : ITask | undefined ;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();
  ngOnInit(): void {
    console.log("-----OnInit-----")
  }

  deleteTask():void{
    console.log("--------deleteTask-------Eliminar una tarea")
    this.delete.emit(this.task); // Notificamos al componente superior
  }

}
