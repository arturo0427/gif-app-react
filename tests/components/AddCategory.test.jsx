import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Prueba al componente <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'valorant' } });
        expect(input.value).toBe('valorant');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'valorant';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe(''); //para verificar que el input este vacío

        expect(onNewCategory).toHaveBeenCalled(); // para verificar que la funcion a sido llamada 
        expect(onNewCategory).toHaveBeenCalledTimes(1); // la funcion a sido llamada solo una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // que ña funcion onNewCategory haya sido llamado con el valor que existe en el inputValue
    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled(); //para verificar que no a sido llamado

    });
});