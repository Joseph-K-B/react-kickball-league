import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {Router, Route } from 'react-router-dom';
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event';
import AddPlayer from './AddPlayer';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import { act } from 'react-dom/test-utils';
import { getPlayerById } from '../../../services/players';

const mockPlayer = {
    id: 50,
    created_at: '2021-12-08T16:09:33.408898+00:00',
    name: 'player name',
    position: 'cheerleader',
    teamId: 50,
    teams: {}
}

const mockTeam = {
    id: 50,
    created_at: '2021-12-08T16:09:33.408898+00:00',
    name: 'team name',
    city: 'city',
    state: 'state',
    players: []
}

const server = setupServer(
    rest.get('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/teams', 
    (req, res, ctx) => {
        return res(ctx.json([mockTeam]));
    }),
    rest.post('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/teams', 
    (req, res, ctx) => {
        return res (
            ctx.json([mockTeam]));
    }),
    rest.get('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/players', 
    (req, res, ctx) => {
        return res(ctx.json(mockPlayer));
    }),
    rest.post('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/players', 
    (req, res, ctx) => {
        return res (
            ctx.json([mockPlayer]));
    }),
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('renders form to allow admin to add player and redirects to their details', async () => {
    const history = createMemoryHistory();
    history.push('/players/new');

    const {container} = render (
        <Router history={history}>
            <Route exact path = '/players/new'>
                <AddPlayer />
            </Route>
            <Route exact path = '/players/:id' component={PlayerDetail} />
        </Router>
    );

    screen.getByText('Add Player');

    const nameField = screen.getByLabelText(/Name:/);
    const positionField = screen.getByLabelText(/Position:/);
    const submitBtn = screen.getByRole('button', {name: 'edit player'});
    
    act(async () => {
        userEvent.type(nameField, 'player name');
        userEvent.type(positionField, 'cheerleader');
        userEvent.selectOptions(await screen.findByRole('combobox'), await screen.findByRole('option', [50]));
        userEvent.click(submitBtn);
    });


        expect(container).toMatchSnapshot();
        await screen.findByText('Loading player info...');
        await screen.findByText('player name');
});