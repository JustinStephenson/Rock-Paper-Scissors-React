import { render, screen } from '@testing-library/react';
import { GameArea } from './GameArea';
import { HandSigns } from '../../enums/handSigns';
import { chooseRandomHandSign } from '../../enums/handSigns';

jest.mock('../../enums/handSigns', () => {
	const originalUtils = jest.requireActual('../../enums/handSigns');
	return {
		...originalUtils,
		chooseRandomHandSign: jest.fn(),
	};
});

describe('GameArea.tsx functional tests', () => {
	beforeEach(() => {
		(chooseRandomHandSign as jest.Mock)
			.mockImplementationOnce(() => {
				return HandSigns.rock;
			})
			.mockImplementationOnce(() => {
				return HandSigns.paper;
			})
			.mockImplementationOnce(() => {
				return HandSigns.scissors;
			});
	});

	test('Initial conditions', () => {
		render(<GameArea />);

		// Check initial message on screen
		const description = screen.getByText('Choose a hand, good luck!');
		expect(description).toBeInTheDocument();

		// Check if all buttons have proper symbols
		const handButtons = screen.getAllByRole('button');
		const rockButton = screen.getByAltText('Rock');
		const paperButton = screen.getByAltText('Paper');
		const scissorsButton = screen.getByAltText('Scissors');
		expect(handButtons[0]).toContainElement(rockButton);
		expect(handButtons[1]).toContainElement(paperButton);
		expect(handButtons[2]).toContainElement(scissorsButton);
	});

	test('Player chooses rock, all game outcomes', async () => {
		render(<GameArea />);

		const description = screen.getByText('Choose a hand, good luck!');
		const rockButton = screen.getByAltText('Rock');

		// Player: Rock, Computer: Rock
		await rockButton.click();
		expect(description).toHaveTextContent('Draw!');

		// Player: Rock, Computer: Paper
		await rockButton.click();
		expect(description).toHaveTextContent('You Lose!');

		// Player: Rock, Computer: Scissors
		await rockButton.click();
		expect(description).toHaveTextContent('You Win!');
	});

	test('Player chooses paper, all game outcomes', async () => {
		render(<GameArea />);

		const description = screen.getByText('Choose a hand, good luck!');
		const rockButton = screen.getByAltText('Paper');

		// Player: Paper, Computer: Rock
		await rockButton.click();
		expect(description).toHaveTextContent('You Win!');

		// Player: Paper, Computer: Paper
		await rockButton.click();
		expect(description).toHaveTextContent('Draw!');

		// Player: Paper, Computer: Scissors
		await rockButton.click();
		expect(description).toHaveTextContent('You Lose!');
	});

	test('Player chooses scissors, all game outcomes', async () => {
		render(<GameArea />);

		const description = screen.getByText('Choose a hand, good luck!');
		const rockButton = screen.getByAltText('Scissors');

		// Player: Scissors, Computer: Rock
		await rockButton.click();
		expect(description).toHaveTextContent('You Lose!');

		// Player: Scissors, Computer: Paper
		await rockButton.click();
		expect(description).toHaveTextContent('You Win!');

		// Player: Scissors, Computer: Scissors
		await rockButton.click();
		expect(description).toHaveTextContent('Draw!');
	});
});
