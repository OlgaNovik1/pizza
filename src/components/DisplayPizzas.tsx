import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';


interface DisplayPizzasProps {
    pizzasList: Pizza[];
    upDatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, upDatePizza, deletePizza }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <SinglePizza key={pizza.id} pizza={pizza} upDatePizza={upDatePizza} deletePizza={deletePizza} />
            })}

        </div>
    );
};

export default DisplayPizzas;