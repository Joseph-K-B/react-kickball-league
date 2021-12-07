import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import PlayerDetail from './PlayerDetail';

it('renders team details according to id param', async () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/players/1']}>
            <Route path="/players/:id">
                <PlayerDetail />
            </Route>
        </MemoryRouter>
    );

    screen.getByText('Loading player info...')

    const player = await screen.findByText(/Ben E. Jetts/, {exact: false});
    const location = await screen.findByText(/Portland, OR/, {exact: false});
    expect(player).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})