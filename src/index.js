import React from 'react';
//Renderizar elementos na tela
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Componentes
import App from './componentes/App';

//Ele renderiza o root, que é o conteúdo do HTML já definido
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();