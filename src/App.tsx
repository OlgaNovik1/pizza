import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import DisplayPizzas from './components/DisplayPizzas';




const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }

  const upDatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) =>
      newPizza.id === pizza.id ? newPizza : pizza));
  }

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
  }


  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Pizza.by</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} upDatePizza={upDatePizza} deletePizza={deletePizza} />
      </div>
    </div>
  );
}

export default App;
