import React from 'react';
import { ToDo } from '../models/ToDo';

const ToDoList = () => {
    const todos: ToDo[] = [
        {id: 2, title:'Ir a academia', done: false}
    ];

    return(
        <div>
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(
                        todo => (<div key={todo.id}>{todo.title}</div>)
                    )
                }
            </tbody>
        </table>
        </div>
    );
}

export default ToDoList;