import React, { useContext } from 'react';
import ToDoListItem from '../componentes/ToDoListItem'
import { ToDoContextType } from '../contexts/ToDoContextType';
import ToDoContext from '../contexts/ToDoContext';

const ToDoList = () => {
        const { todos } = useContext<ToDoContextType>(ToDoContext);

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
                        todo => (<ToDoListItem key={todo.id} todo={todo}></ToDoListItem>)
                    )
                }
            </tbody>
        </table>
        </div>
    );
}

export default ToDoList;