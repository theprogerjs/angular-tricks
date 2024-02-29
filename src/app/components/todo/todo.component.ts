import { Component } from '@angular/core';
import { ToDo } from '../../model/todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'tp-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos : ToDo[] = [
    { id: 2, description: "Task 2", done: false },
    { id: 1, description: "Task 1", done: true }
  ];

  get completedTasksCount():number{
    return this.todos.filter(item => item.done).length;
  }


  addToDo(description: string){
    const lastID = Math.max(...this.todos.map(item => item.id));
    this.todos.unshift({
      id: lastID + 1,
      description,
      done: false
    })
  }

  onRemove(todo: any){
    this.todos = this.todos.filter(item => item.id !== todo.id);
  }
}
