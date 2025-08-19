import { Component, OnInit } from '@angular/core';
import {Todo} from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string ="Todo List App";

  todos: Todo[] = [];
  newTodoTitle: string ='';

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
      this.loadTodos();
  }

  loadTodos():void{
    this.todoService.getTodos().subscribe(todosFromApi=>{
      this.todos = todosFromApi;
    })
  }

  addTodo():void{

    if (!this.newTodoTitle.trim()){
      return;
    }

    const newTodo = {
      title: this.newTodoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo).subscribe(createdTodo => {
      this.todos.push(createdTodo);
      this.newTodoTitle='';
    });

  }

  toggleTodoCompletion(todo: Todo):void {
    const updatedTodo = { ...todo,completed:!todo.completed};
    this.todoService.updateTodo(updatedTodo).subscribe(returnedTodo =>{
      const index = this.todos.findIndex(t=>t.id === returnedTodo.id);
      if(index !== -1){
        this.todos[index] = returnedTodo;
      }
    });
  }

  deleteTodo(id:number):void{
    this.todoService.deleteTodo(id).subscribe(()=>{
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

}
