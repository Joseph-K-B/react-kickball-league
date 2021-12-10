import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {Router, Route } from 'react-router-dom';
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event';
import AddPlayer from './AddPlayer';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import { act } from 'react-dom/test-utils';

const mockPlayer = {
    id: 12,
    created_at: '2021-12-08T16:09:33.408898+00:00',
    name: 'player name',
    position: 'benchwarmer',
    teamId: 1
}

const mockTeam = {
    id: 1,
    created_at: '2021-12-08T16:09:33.408898+00:00',
    name: 'name',
    city: 'city',
    state: 'state',
    players: []
}

const mockTeam2 = {
        id: 2,
        created_at: '2021-12-08T16:09:33.408898+00:00',
        name: 'team name two',
        city: 'city two',
        state: 'state',
        players: []
    }

const server = setupServer(
    rest.get('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/teams', 
    (req, res, ctx) => {
        return res(ctx.json(mockTeam));
    }),
    rest.post('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/teams', 
    (req, res, ctx) => {
        return res (
            ctx.json([mockTeam]));
    }),
    rest.get('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/teams', 
    (req, res, ctx) => {
        return res(ctx.json(mockTeam2));
    }),
    rest.post('https://vrmauzdnhcbzknrntyjm.supabase.co/rest/v1/teams', 
    (req, res, ctx) => {
        return res (
            ctx.json([mockTeam2]));
    }),
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
    // const teamField = await screen.findByLabelText(/Team:/);
    const optionChoice = await screen.findByRole('combobox');

    act(async () => {
        userEvent.type(nameField, 'New Team');
        userEvent.type(positionField, 'cheerleader');
        userEvent.selectOptions(optionChoice, [mockTeam.id]);
        userEvent.click(submitBtn);
    })

    // expect(screen.getByRole('option', {name: mockTeam.name}).selected).toBe(true)
    expect(container).toMatchSnapshot();
    // await screen.findByText('player name');
});