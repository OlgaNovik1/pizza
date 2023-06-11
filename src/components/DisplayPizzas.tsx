import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';


interface DisplayPizzasProps {
    pizzasList: Pizza[];
    upDatePizza: (newPizza: Pizza) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, upDatePizza }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <SinglePizza key={pizza.id} pizza={pizza} />
            })}

        </div>
    );
};

export default DisplayPizzas;