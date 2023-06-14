import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import List from './components/List';
import FormattedText from './components/FormattedText';
import Box from './components/Box';
import RandomNumber from './components/RandomNumber';
import ShowName from './components/ShowName';

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

        <RandomNumber/>

        <ShowName/>

        <Box corFonte={"#594"}>
          <p>CAIXA</p>
          <p>CAIXA 2</p>
        </Box>

        <List items={list1}/>
        <List items={list2}/>

        <FormattedText label={"Nome"} value={"Christian"}/>
        <FormattedText label={"Idade"} value={19}/>
        
        <Card bgColor={"#f09"}>
          <p>Texto passado por children</p>
          <FormattedText label={"Nome"} value={"Christian"}/>
        </Card>

        <button onClick={handleClick}>Soma + 1</button>
      </header>
    </div>
  );
}

export default App;
