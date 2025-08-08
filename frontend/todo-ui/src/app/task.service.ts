import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from './task';

@Injectable({providedIn: 'root' })
export class TaskService{
  private readonly baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private http:HttpClient) {}

  list(): Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }

  add(task: Task): Observable<Task>{
    return this.http.post<Task>(this.baseUrl,task);
  }

  setCompleted(id:number, value:boolean): Observable<Task>{
    return this.http.put<Task>(`${this.baseUrl}/${id}/complete?value=${value}`, {});
  }

  remove(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
