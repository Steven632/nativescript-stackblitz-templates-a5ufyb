import { Component } from '@angular/core';
import { Todo } from '~/app/services/todo.model';
import { TodoService } from '~/app/services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  public todoList: Array<string> = [];
  public newItem: string = '';

  public addItem() {
    if (this.newItem.trim() === '') {
      return;
    }

    this.todoList.push(this.newItem);
    this.newItem = '';
  }

  public removeItem(item: string) {
    const index = this.todoList.indexOf(item);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}
