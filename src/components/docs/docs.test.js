import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Docs from './docs';

describe('Docs tests', () => {
  it('should render Docs without crashing', () => {
    render(<Docs />)
    // screen.debug();
  })

  it('should render the correct docs text', () => {
    render(<Docs />)
    expect(screen.getByText(/introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/gamesandkeys is a learning platform with the primary goal of teaching musicians how to play video game songs on the piano. the video content uses , piano keyboard trainer. synthesia includes many useful features such as notes that light up and tempo adjustments./i)).toBeInTheDocument();
    expect(screen.getByText(/in addition to the synthesia videos, you can also download sheet music and midi files for each song. each sheet is a pdf that can be saved or printed. each midi file can also be downloaded and opened up in any digital audio workstation (music software)./i)).toBeInTheDocument();
  })

  it('should render the docs images', () => {
    render(<Docs />)
    expect(screen.getByRole('img', { name: /synthesia user interface/i })).toBeInTheDocument();
    expect(screen.getByText(/fig.1 - synthesia game songs screen/i)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /garage band user interface/i })).toBeInTheDocument();
    expect(screen.getByText(/fig.2 - midi file in garage band/i)).toBeInTheDocument();
  })

  it('should redirect to the next docs page', () => {
    render(<Docs />)
    const nextButton = screen.getByText(/quick start ->/i);
    userEvent.click(nextButton)
    // expect(screen.getByLabelText('Check')).toHaveAttribute('checked', true)

  })
})