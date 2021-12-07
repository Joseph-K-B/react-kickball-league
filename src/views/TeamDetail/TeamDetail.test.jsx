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

    const team = await screen.findByText('Bridge City Sneakers', {exact: false});
    expect(team).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})