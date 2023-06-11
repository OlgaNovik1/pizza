import React, { FC, useState } from 'react'
import Pizza from '../models/Pizza'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import EditPizzaForm from './EditpizzaForm';



interface SinglePizzaProps {
    pizza: Pizza;
    upDatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, upDatePizza, deletePizza }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deletePizza(pizza.id)
    }


    return (
        <div className='pizza'>
            <img src={`/images/${pizza.img}`} alt={pizza.title}></img>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>

            <div className='pizza-controls'>
                <AiFillEdit onClick={handleToggleEdit} />
                <AiOutlineDelete onClick={handleDelete} />
            </div>

            {edit
                ? <EditPizzaForm data={pizza} upDatePizza={upDatePizza} handleToggleEdit={handleToggleEdit} />
                : null
            }

        </div >
    )
}

export default SinglePizza;