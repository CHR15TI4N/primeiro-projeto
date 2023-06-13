import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import List from './components/List';
import FormattedText from './components/FormattedText';

const list1 = ["Primeiro item", "Segundo item", "Terceiro item", "Quanto item"]
const list2 = ["Banana", "Tomate"]

const App = () => {

  

  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <List items={list1}/>
        <List items={list2}/>

        <FormattedText label={"Nome"} value={"Christian"}/>
        <FormattedText label={"Idade"} value={19}/>
        
        <Card 
          text="Texto passado do App.js para o Card.js" 
          bgColor="#f19"
          contador={contador}
        />
        <Card 
          text="Segundo texto escrito" 
          bgColor="#f02"
          contador={contador}
        />
        <button onClick={handleClick}>Soma + 1</button>
      </header>
    </div>
  );
}

export default App;
