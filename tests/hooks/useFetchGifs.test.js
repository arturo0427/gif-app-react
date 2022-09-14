import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Prueba del customHook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {
        // EL estado inicial es que las images sea un arreglo vacio
        // y el isLoading sea true

        const { result } = renderHook(() => useFetchGifs('valorant'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0); // images vacio
        expect(isLoading).toBeTruthy(); // isLoadiong true
    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('Valorant'));

        //Espera por que se cumpla que el tamaño del array de images sea mayor que 0
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0); //sea mayor que 0
        expect(isLoading).toBeFalsy(); //sea falso

    });

})