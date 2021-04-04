import React, { createContext, useEffect, useState } from 'react'
import { ToDoContextType } from './ToDoContextType';
import { ToDo }from '../models/ToDo'
import {get, save} from '../services/ToDoServices'

export const ToDoContext = () => createContext<ToDoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const ToDoProvider = (props: any) => {
    const [todos, setTodos] = useState<ToDo[]>(get)

    useEffect(() => {
        save(todos);
    }, [todos])

    const addTodo = (title: string) => {
        const todo: ToDo = { id: todos.length + 1, title: title, done: false};
        setTodos([...todos, todo]);
        save(todos);
    }

    const removeTodo = (todo: ToDo) => {
        //Achar o index para remover
        const index = todos.indexOf(todo);
        //Coloca todos os ToDo's da lista e remove o que o index é igual
        setTodos(todos.filter((_, i) => i !== index));
        save(todos);
    }

    const toggle = (todo: ToDo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos ([...todos]);
        save(todos);
    }

    return(
        <ToDoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoProvider;

//Contexto = Variaveis e funções armazenadas 
//Hooks = Gancho para acontecer quando algo inicializar