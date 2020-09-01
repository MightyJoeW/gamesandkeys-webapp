import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './dashboard';

describe('Dashboard', () => {
	it('should render the Dashboard component', () => {
		render(<Dashboard />)
		// screen.debug();
		expect(screen.getByText('Play your favorite video game songs on the piano')).toBeInTheDocument();
		// expect(screen.getByText('GamesAndKeys is a free learning resource that teaches pianists how to play songs from video games and tv shows via ')).toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('link')).toBeInTheDocument();
		expect(screen.getByRole('separator')).toBeInTheDocument();
		expect(screen.getByAltText('Synthesia Piano Tutorial')).toBeInTheDocument();
	});
});
