import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {Router, Route } from 'react-router-dom';
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event';
import UpdatePlayer from './UpdatePlayer'
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import { useEffect } from 'react';

const mockPlayer = {
    id: 12,
    created_at: '2021-12-08T16:09:33.408898+00:00',
    name: 'player name',
    position: 'benchwarmer',
    teamId: 1
}

const server = setupServer(
rest.get('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/players', 
    (req, res, ctx) => {
        return res(ctx.json(mockPlayer));
    }),
    rest.post('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/players', 
    (req, res, ctx) => {
        return res (
            ctx.json([mockPlayer]));
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('renders form to update player', async () => {
    const history = createMemoryHistory();
    history.push('/players/1/update');

    const {container} = render(
        <Router history={history}>
            <Route>
                <UpdatePlayer />
            </Route>
        </Router>
    );

    await screen.findByText('Update Player');

    const nameField = screen.getByLabelText(/Name:/);
    const positionField = screen.getByLabelText(/Position:/);
    const submitBtn = screen.getByRole('button', {name: 'edit player'})

    userEvent.type(nameField, 'Another Player');
    userEvent.type(positionField, 'cheerleader');
    userEvent.click(submitBtn);

    expect(container).toMatchSnapshot();
    await screen.findByText('player name');
})