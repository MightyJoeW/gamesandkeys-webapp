import { songTitleFormatter } from './formatting';

// let songTitleFormatter = songTitle => `This is ${songTitle}.`;

describe('Formatting tests', () => {
	it('songTitleFormatter should exist', () => {
		expect(songTitleFormatter).toBeDefined;
	});

	it('Should format song titles', () => {
		const songTitle = 'all-gone-aftermath';
		expect(songTitleFormatter(songTitle)).toBe('This is all-gone-aftermath.');
	});
});
