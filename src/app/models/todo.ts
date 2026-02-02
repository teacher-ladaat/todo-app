import { TodoStatus } from "./todo-status";

export interface Todo {
    id: string;
    title: string;
    date: Date;
    status: TodoStatus
}
