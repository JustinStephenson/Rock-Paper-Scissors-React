import { render, screen } from '@testing-library/react';
import { GameArea } from './GameArea';

describe('GameArea.tsx functional tests', () => {
	test('Initial conditions', () => {
		render(<GameArea />);

		const description = screen.getByText('Choose a hand, good luck!');
		expect(description).toBeInTheDocument();
	});
});
