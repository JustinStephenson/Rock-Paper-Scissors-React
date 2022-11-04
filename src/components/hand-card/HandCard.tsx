import { Button, ButtonProps } from '../button/Button';
import { handSigns } from '../../enums/handSigns';
import paperImg from '../../img/paper.png';
import rockImg from '../../img/rock.png';
import scissorsImg from '../../img/scissors.png';
import './HandCard.scss';

export type HandCardProps = {
	handSign: handSigns;
	onClick: () => void;
};

type handSignContents = {
	imgLoc: string;
	altText: string;
};

export const HandCard = (props: HandCardProps) => {
	const getHandSignContents = (): handSignContents => {
		if (props.handSign === handSigns.rock) {
			return { imgLoc: rockImg, altText: 'Rock' };
		} else if (props.handSign === handSigns.paper) {
			return { imgLoc: paperImg, altText: 'Paper' };
		} else {
			return { imgLoc: scissorsImg, altText: 'Scissors' };
		}
	};

	const buttonProps: ButtonProps = {
		imgLoc: getHandSignContents().imgLoc,
		altText: getHandSignContents().altText,
		onClick: () => props.onClick(),
	};

	return <Button {...buttonProps}></Button>;
};
