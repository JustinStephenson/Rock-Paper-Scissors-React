import { Button, ButtonProps } from '../button/Button';
import { HandSigns } from '../../enums/handSigns';
import paperImg from '../../img/paper.png';
import rockImg from '../../img/rock.png';
import scissorsImg from '../../img/scissors.png';
import './HandCard.scss';

export type HandCardProps = {
	handSign: HandSigns;
	onClick: () => void;
};

type handSignContents = {
	imgLoc: string;
	altText: string;
};

export const HandCard = (props: HandCardProps) => {
	const getHandSignContents = (): handSignContents => {
		if (props.handSign === HandSigns.rock) {
			return { imgLoc: rockImg, altText: 'Rock' };
		} else if (props.handSign === HandSigns.paper) {
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

	return (
		<div className="card">
			<Button {...buttonProps}></Button>
		</div>
	);
};
