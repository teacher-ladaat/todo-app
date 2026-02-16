import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoStatus } from '../models/todo-status';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    imports: [FormsModule],
    templateUrl: './todo-list.html',
    styleUrl: './todo-list.scss',
})
export class TodoList {
    todos: Todo[] = [
        new Todo('Do Angular HW', new Date(2026, 1, 8), TodoStatus.InProgress),
        new Todo('Clean Home', new Date(2026, 1, 24), TodoStatus.NotDone),
        new Todo('Buy Food', new Date(2026, 1, 2), TodoStatus.Done),
    ];
    editedTodo?: Todo;
    newTodo: Todo = new Todo();

    isPassed(d: Date | string) {
        return new Date(d) <= new Date();
    }

    updateTodoStatus(todo: Todo, status: TodoStatus) {
        todo.status = status;
    }

    editTodo(todo: Todo) {
        todo.isEdited = true;
        if (this.editedTodo === todo) {
            this.editedTodo = undefined;
        } else {
            this.editedTodo = todo;
        }
    }

    addTodo() {
        if (this.newTodo.isValid()) {
            this.todos.push(this.newTodo);

            this.newTodo = new Todo();
        } else {
            alert('todo is not valid!!!')
        }
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
    }
}
