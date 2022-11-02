import { Button, ButtonProps } from '../button/Button';
import { handSigns } from '../../enums/handSigns';

import './HandCard.scss';

export type HandCardProps = {
	handSign: handSigns;
	onClick: () => void;
};

export const HandCard = (props: HandCardProps) => {
	const getHandSignImg = (): string => {
		if (props.handSign === handSigns.rock) {
			return 'Rock';
		} else if (props.handSign === handSigns.paper) {
			return 'Paper';
		} else {
			return 'Scissors';
		}
	};

	const buttonProps: ButtonProps = {
		text: getHandSignImg(),
		onClick: () => props.onClick(),
	};

	return <Button {...buttonProps}></Button>;
};
