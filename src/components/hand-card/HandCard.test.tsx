import { render, screen } from '@testing-library/react';
import { HandSigns } from '../../enums/handSigns';
import { HandCard } from './HandCard';

describe('HandCard.tsx functional tests', () => {
	test('Screen shows correct image', async () => {
		render(<HandCard handSign={HandSigns.rock} onClick={() => {}} />);

		const button = screen.getByRole('button');
		const rockImg = screen.getByAltText('Rock');
		expect(button).toContainElement(rockImg);
	});
});
