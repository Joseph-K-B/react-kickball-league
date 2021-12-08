import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event'
import AddTeam from './AddTeam';

const server = setupServer(
    rest.post('url', (req, res, ctx) => {
        return res (
            ctx.json([
                {
                    id: 9,
                    created_at: '',
                    name: 'redirect',
                    city: 'random',
                    state: 'Vatican City'
                }
            ])  
        );

    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('renders form to add team and redirects to team details', async () => {
    render(
        <MemoryRouter>
            <AddTeam />
        </MemoryRouter>
    );

    screen.getByText('Add a Team');

    const nameField = screen.getByLabelText(/Name:/);
    const cityField = screen.getByLabelText(/City:/);
    const stateField = screen.getByLabelText(/State:/);
    const submitBtn = screen.getByRole('button', {cname: 'add team' })

    userEvent.type(nameField);
    userEvent.type(cityField);
    userEvent.type(stateField);
    userEvent.click(submitBtn);

})