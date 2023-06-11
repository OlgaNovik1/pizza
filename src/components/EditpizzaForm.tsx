import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import '../components/styles.css'
import Pizza from '../models/Pizza';



interface EditpizzaFormProps {
    data: Pizza;
}

const EditpizzaForm: FC<EditpizzaFormProps> = ({ data }) => {
    const [editPizza, setEditPizza] =
        useState<Pizza>(data);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // console.log(name, value)

        setEditPizza({
            ...editPizza,
            [name]: value,
        });
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, price, img } = editPizza;

        if (title && price && img) {
            console.log('edit pizza>>>', editPizza)
        }
    }

    console.log(editPizza)

    return (
        <form onSubmit={handleSubmit} className='edit-form'>
            <input
                name='title'
                type='text'
                placeholder='Название ...'
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name='price'
                type='text'
                placeholder='Стоимость ...'
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name='img'
                type='text'
                placeholder='Изображение ...'
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type='submit'>
                Подтвердить
            </button>



        </form>
    );
};

export default EditpizzaForm;