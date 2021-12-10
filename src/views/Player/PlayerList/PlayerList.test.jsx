import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import PlayerList from './PlayerList'


it('renders team details according to id param', async () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/players']}>
            <Route path="/players">
                <PlayerList />
            </Route>
        </MemoryRouter>
    );

    screen.getByText('Loading players...')

    const player = await screen.findByText(/Ben E. Jetts/, {exact: false});
    const playerTwo = await screen.findByText(/Hans Olo/, {exact: false});
    const playerThree = await screen.findByText(/Frito Pendejo/, {exact: false});
    expect(player).toBeInTheDocument();
    expect(playerTwo).toBeInTheDocument();
    expect(playerThree).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})