import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Task} from './task';
import {TaskService} from './task.service';
import {NgForOf, NgIf} from '@angular/common';
import { trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations:[
    trigger('fade',[
      transition(':enter',[
        style({opacity:0}),
        animate('300ms ease-out', style({opacity:1}))
      ]),
      transition(':leave', [ // when element is removed
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class App implements OnInit{
  title = "ToDo";
  tasks: Task[] = [];
  loading = false;
  error = '';

  newTask: Task = {title:'', description:'', dueDate:''};

  constructor(private svc:TaskService) {}

  ngOnInit():void {
    this.refresh();
  }

  refresh():void{
    this.loading = true;
    this.svc.list().subscribe({
      next:data=>{this.tasks = data; this.loading = false;},
      error: () => { this.error = 'Failed to load taks'; this.loading=false;}
    });
  }

  add():void{
    const t = this.newTask.title?.trim();
    if(!t) return;
    this.svc.add(this.newTask).subscribe({
      next: saved => {
        this.tasks.push(saved);
        this.newTask = { title: '', description: '', dueDate: ''};
      }
    });
  }

  toggleCompleted(task: Task): void{
    if(task.id == null) return;
    this.svc.setCompleted(task.id, !task.completed).subscribe(updated => {
      task.completed = updated.completed;
    });
  }

  delete(task:Task):void{
    if(task.id==null) return;
    this.svc.remove(task.id).subscribe(()=>{
      this.tasks = this.tasks.filter(x => x.id !== task.id);
    });
  }
}
