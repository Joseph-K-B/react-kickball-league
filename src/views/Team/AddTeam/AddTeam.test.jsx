import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {Router, Route } from 'react-router-dom';
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event';
import AddTeam from './AddTeam';
import TeamDetail from '../TeamDetail/TeamDetail';

const mockTeam = {
        id: 20,
        created_at: '2021-12-08T16:09:33.408898+00:00',
        name: 'name',
        city: 'city',
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
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('renders form to add team and redirects to team details', async () => {
    const history = createMemoryHistory();
    history.push('/teams/new');

    const {container} = render(
        <Router history={history}>
            <Route exact path='/teams/new'>
                <AddTeam />
            </Route>
            <Route exact path='/teams/:id' component={TeamDetail} />
        </Router>
    );

    screen.getByText('Add Team');

    const nameField = screen.getByLabelText(/Name:/);
    const cityField = screen.getByLabelText(/City:/);
    const stateField = screen.getByLabelText(/State:/);
    const submitBtn = screen.getByRole('button', {name: 'edit team' })

    userEvent.type(nameField, 'Another Team');
    userEvent.type(cityField, 'Another Town');
    userEvent.type(stateField, 'US');
    userEvent.click(submitBtn);

    expect(container).toMatchSnapshot();
    await screen.findByText('name');
});