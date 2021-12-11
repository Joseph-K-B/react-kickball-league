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

    const player = await screen.findByText(/Bill Waits/i);
    const playerTwo = await screen.findByText(/Izzie the Dog/i);
    const playerThree = await screen.findByText(/Kurt Coplain/i);
    expect(player).toBeInTheDocument();
    expect(playerTwo).toBeInTheDocument();
    expect(playerThree).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})