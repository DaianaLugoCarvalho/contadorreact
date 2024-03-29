// import React from 'react';
// import './App.css';


// const pessoa = {
//   nome: "day",
//   sobrenome: "lugo"
// }

// const saudacao = obj  => `Ola, ${obj.nome} ${obj.sobrenome}`;



// const contador = 2

// const verificaContador = () => {
//   if (contador === 0){
//     return"não iniciado"
//   }else{
//     return "inicado"
//   }
// }
  

// function App() {
//   return (
//     <div className="App">
//       <h1>{saudacao(pessoa)}, o contador</h1>
//       <h2>Contador: </h2>
//       <p> {contador} </p>
//       <p> {verificaContador()} </p>
//       <button className="btnMaisUm">+1</button>
//       <button  className="btnMaisDois">-1</button>
//       <button  className="btnResetar">resetar</button>

//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';   

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  subtrairUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador - 1
      }
    })
  }

  resetar = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador= 0
      }
    })
  }




  render() {
    return (
      <div>
        <p>{this.state.contador}</p>

        <button className="btnMaisUm" onClick={this.adicionarUm}>+1</button>
        <button className="btnMenosUm" onClick={this.subtrairUm}>-1</button>
        <button className="btnResetar" onClick={this.resetar} >resetar</button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}
export default App;