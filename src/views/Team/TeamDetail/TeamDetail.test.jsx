import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import TeamDetail from './TeamDetail'

it('renders team details according to id param', async () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/teams/1']}>
            <Route path="/teams/:teamId">
                <TeamDetail />
            </Route>
        </MemoryRouter>
    );

    screen.getByText('Loading team...')

    const team = await screen.findByText(/Bridge City Sinners/, {exact: false});
    const location = await screen.findByText(/Portland, OR/, {exact: false});
    expect(team).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})