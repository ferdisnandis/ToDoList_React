import React from 'react';
//import { ToDoContext } from '../contexts/ToDoContext';
import Navbar from './Navbar';
import ToDoList from './ToDoList.tsx';
import ToDoContext from '../contexts/ToDoContext';
import { BrowserRouter as Route, Switch, Router } from 'react-router';


//Arrow function = Criando um escopo novo
const App = () => {
    return(
    <ToDoContext>
        <Router>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
            <Switch>
                <Route path="/create">
                    <AddTodo></AddTodo>
                </Route>
                <Route path="/">
                    <h4>Minha lista de tarefas</h4>
                    <ToDoList></ToDoList>
                </Route>
            </Switch>
             <ToDoList></ToDoList>
        </div>
        </Router>
    </ToDoContext>
    );
}

export default App;