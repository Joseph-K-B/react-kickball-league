import { render, screen } from '@testing-library/react'
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter, Route } from 'react-router-dom'
import TeamList from './TeamList';

const mockTeam1 = {
    id: 1,
    created_at: '',
    name: 'redirect',
    city: 'random',
    state: 'Vatican City',
    players: []
};

const mockTeam2 = {
    id: 2,
    created_at: '',
    name: 'another one',
    city: 'random',
    state: 'curious',
    players: []
};

const mock = [mockTeam1, mockTeam2]

const server = setupServer(
    rest.get('url', (req, res, ctx) => {
        return res(
            ctx.json(mock)
        );
    }),
    rest.delete('url', (req, res, ctx) => {
        return res(ctx.json(mockTeam2));
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('renders team details according to id param', async () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/teams']}>
            <Route path="/teams">
                <TeamList />
            </Route>
        </MemoryRouter>
    );

    screen.getByText('Loading teams...');
    await screen.findByText(/Add Team/);

    const team = await screen.findByText(/Bridge City Sinners/, {exact: false});
    const teamTwo = await screen.findByText(/Seattelites/, {exact: false});
    const teamThree = await screen.findByText(/Mt. hoodRats/, {exact: false});
    expect(team).toBeInTheDocument();
    expect(teamTwo).toBeInTheDocument();
    expect(teamThree).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})