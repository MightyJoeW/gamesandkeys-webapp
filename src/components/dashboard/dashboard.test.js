import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './dashboard';

describe('Dashboard', () => {
	it('should render the Dashboard without crashing', () => {
		render(<Dashboard />)
		// screen.debug();
	});

	it('should render the correct dashboard text', () => {
		render(<Dashboard />)
		expect(screen.getByRole('heading', { name: /play your favorite video game songs on the piano/i })).toBeInTheDocument();
		expect(screen.getByText(/gamesandkeys is a free learning resource that teaches pianists how to play songs from video games and tv shows via , , and ./i)).toBeInTheDocument();
		expect(screen.getByText(/videos/i)).toBeInTheDocument();
		expect(screen.getByText(/sheet music/i)).toBeInTheDocument();
		expect(screen.getByText(/midi files/i)).toBeInTheDocument();
		expect(screen.getByText(/get started/i)).toBeInTheDocument()
	})

	it('should render the synthesia gif', () => {
		render(<Dashboard />)
		expect(screen.getByRole('img', { name: /synthesia piano tutorial/i })).toBeInTheDocument();
		expect(screen.getByAltText('Synthesia Piano Tutorial')).toBeInTheDocument();
	})

	it('should reroute to docs when clicking Get Started button', () => {
		render(<Dashboard />)
		const getStartedButton = screen.getByRole('link', { name: /get started/i })
		expect(getStartedButton.href).toBe("https://www.gamesandkeys.com/docs")
	})

});