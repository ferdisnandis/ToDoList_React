import { ToDo } from '../models/ToDo'

export interface ToDoContextType {
    todos : ToDo[]
    //Adicionar uma tarefa
    addTodo(title: string): void;
    //Remover uma tarefa
    removeTodo(todo: ToDo): void;
    //Checar a tarefa
    toggle(todo: ToDo): void;
}