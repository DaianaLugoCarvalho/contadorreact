import React from 'react';
import logo from './logo.svg';
import './App.css';


const pessoa = {
  nome: "day",
  sobrenome: "lugo"
}

const saudacao = obj  => `Ola, ${obj.nome} ${obj.sobrenome}`;



const contador = 2

const verificaContador = () => {
  if (contador === 0){
    return"não iniciado"
  }else{
    return "inicado"
  }
}
  

function App() {
  return (
    <div className="App">
      <h1>{saudacao(pessoa)}, o contador</h1>
      <h2>Contador: </h2>
      <p> {contador} </p>
      <p> {verificaContador()} </p>
      <button className="btnMaisUm">+1</button>
      <button  className="btnMaisDois">-1</button>
      <button  className="btnResetar">resetar</button>

    </div>
  );
}

export default App;
