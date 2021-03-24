import React from 'react';
import Navbar from './Navbar';
import ToDoList from './ToDoList.tsx';

//Arrow function = Criando um escopo novo
const App = () => {
    return(
        <div className="uk-container">
             <Navbar></Navbar>
             <ToDoList></ToDoList>
        </div>
    );
}

export default App;