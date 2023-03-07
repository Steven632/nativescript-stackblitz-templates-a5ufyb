import { Injectable } from '@angular/core';

import { Todo, Status } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = new Array<Todo>(
    {
      id: 1,
      description: 'Buscar perro en groomer.',
      status: Status.NOT_STARTED,
    },
    { id: 2, description: 'Ir a la playa', status: Status.IN_PROGRESS }
  );

  constructor() {}

  getAllTodos() {
    return this.todoList;
  }

  generateRandomTodo() {
    this.todoList.push({
      id: Math.random() * 10,
      description: 'Añadiendo algo',
      status: Status.NOT_STARTED,
    });
  }
}
