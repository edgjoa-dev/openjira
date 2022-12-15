import { render, screen } from '@testing-library/react';
import Home from '../pages';


describe('Pruebas en el Home', ()=>{

    test('Debe renderizar un heading', () => {
        render(<Home />)
        //screen.debug();
        const headding = screen.getByRole('heading', {name: /open jira/i})

        expect(headding).toBeInTheDocument()
    })

});