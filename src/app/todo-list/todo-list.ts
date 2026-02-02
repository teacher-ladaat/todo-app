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
        { id: crypto.randomUUID(), title: 'Do Angular HW', date: new Date(2026, 1, 8), status: TodoStatus.InProgress },
        { id: crypto.randomUUID(), title: 'Clean Home', date: new Date(2026, 1, 24), status: TodoStatus.NotDone },
        { id: crypto.randomUUID(), title: 'Buy Food', date: new Date(2026, 1, 2), status: TodoStatus.Done },
    ];
    editedTodo?: Todo;
    newTodo: Todo = {
        id: '',
        title: '',
        date: new Date(),
        status: TodoStatus.NotDone
    };

    isPassed(d: Date) {
        return d <= new Date();
    }

    updateTodoStatus(todo: Todo, status: TodoStatus) {
        todo.status = status;
    }

    editTodo(todo: Todo) {
        if (this.editedTodo === todo) {
            this.editedTodo.date = new Date(this.editedTodo.date);
            this.editedTodo = undefined;
        } else {
            this.editedTodo = todo;
        }
    }

    addTodo() {
        this.newTodo.date = new Date(this.newTodo.date);
        this.todos.push(this.newTodo);

        this.newTodo = {
            id: crypto.randomUUID(),
            title: '',
            date: new Date(),
            status: TodoStatus.NotDone
        };
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
    }
}
