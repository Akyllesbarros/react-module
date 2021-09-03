import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function Home(){
  return <h1>Meu primeiro React</h1>
}

export function Texto(props){
  return <p>{props.texto}</p>
}

export function Botao(props){
  const [botao, setBotao] = useState(0);

  useEffect(()=>{
    document.title = botao;

  }, [botao])


  return(
    <div>
      <p>numero de clicks: {botao}</p>
      <button onClick={() => setBotao(botao+1)}>{props.nome}</button>
    </div>
  )
}
  

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Texto texto="esse é um texto"/>
    <Texto texto="esse é dois texto"/>
    <Texto texto="esse é tres texto"/>
    <Texto texto="esse é quatro texto"/>
    <Botao nome="Acumular"/>

  </React.StrictMode>,
  document.getElementById('root')
);

