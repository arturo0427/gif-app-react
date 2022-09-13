import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        // setCategories(categories.concat(category));

        setCategories([newCategory, ...categories]);
    };

    return (

        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>
            {/* Input */}

            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={event => onAddCategory(event)}

            />

            {/* Listado de gifs */}
            {/* <button onClick={() => onAddCategory('Futurama')}>Agregar</button> */}
            <ol>
                {categories.map((category) =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
                )}
            </ol>
        </>
    )
}
