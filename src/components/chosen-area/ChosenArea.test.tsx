import { render, screen } from '@testing-library/react';
import { HandSigns } from '../../enums/handSigns';
import { ChosenArea } from './ChosenArea';

describe('ChosenArea.tsx functional tests', () => {
	test('Screen shows correct images', () => {
		render(
			<ChosenArea playerHand={HandSigns.rock} compHand={HandSigns.paper} />
		);

		const leftHand = screen.getByTestId('left-hand');
		const rockImg = screen.getByAltText('Rock');
		expect(leftHand).toContainElement(rockImg);

		const rightHand = screen.getByTestId('right-hand');
		const paperImg = screen.getByAltText('Paper');
		expect(rightHand).toContainElement(paperImg);
	});
});
