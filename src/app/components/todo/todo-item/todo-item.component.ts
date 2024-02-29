import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../../model/todo';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'tp-todo-item',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input('todo') todo! : ToDo;
  @Output() onItemDelete = new EventEmitter<any>();

  checkStatus( checked: boolean ){
    this.todo.done = checked;
  }

  removeItem(){
    this.onItemDelete.emit(this.todo);
  }
  

}
