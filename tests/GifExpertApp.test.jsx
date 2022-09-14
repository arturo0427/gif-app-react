import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba del componente <GifExpertApp />', () => {

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de One Punch', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');

        expect(input.value).toBe('a');
    });

});