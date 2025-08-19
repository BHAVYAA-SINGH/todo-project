import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly apiUrl = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) { }

  // GET: Fetch all todos from the API
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // POST: Add a new todo to the API
  addTodo(todo: { title: string; completed: boolean }): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  // PUT: Update an existing todo
  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  // DELETE: Delete a todo from the API
  deleteTodo(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
