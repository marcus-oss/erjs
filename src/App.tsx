import logo from './logo.svg';
import './App.css';
import React from 'react';

const Component = React.createElement('div', {style: {background:'Red'}},'olá mundo')

const HtmlElement = document.createElement('div')
HtmlElement.style.background =  'red'
HtmlElement.innerText = 'Olá Mundo Nativo!!'

console.log(Component)
console.dir(HtmlElement)

document.body.appendChild(HtmlElement)


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {Component}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
          Olá , Mundo!!
        </p>
       
      </header>
    </div>
  );
}

export default App;
