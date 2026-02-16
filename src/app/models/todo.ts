import { TodoStatus } from "./todo-status";

// export interface ITodo {
//     id: string;
//     title: string;
//     date: Date;
//     status: TodoStatus
// }

export class Todo {
    constructor(public title: string = '',
        private _date: Date = new Date(),
        public status: TodoStatus = TodoStatus.NotDone,
        public isEdited = false) { }

    public readonly id: string = crypto.randomUUID();
    
    get date(): Date | string {
        const year = this._date.getFullYear();
        const month = `${this._date.getMonth() + 1}`.padStart(2, '0');
        const day = `${this._date.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    set date(val: Date | string) {
        this._date = new Date(val);
    }

    isValid() {
        return this.id.trim() !== '' && this.title.trim() !== '';
    }
}