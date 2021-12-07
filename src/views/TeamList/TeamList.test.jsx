import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import TeamList from './TeamList';

it('renders team details according to id param', async () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/teams']}>
            <Route path="/teams">
                <TeamList />
            </Route>
        </MemoryRouter>
    );

    screen.getByText('Loading teams...')

    const team = await screen.findByText(/Bridge City Sneakers/, {exact: false});
    const teamTwo = await screen.findByText(/Lakeville Thunderfeet/, {exact: false});
    const teamThree = await screen.findByText(/Mt. Hoodies/, {exact: false});
    expect(team).toBeInTheDocument();
    expect(teamTwo).toBeInTheDocument();
    expect(teamThree).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})