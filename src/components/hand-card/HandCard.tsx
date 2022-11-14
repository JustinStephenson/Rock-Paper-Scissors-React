import { Button, ButtonProps } from '../button/Button';
import { getHandSignImg, HandSigns } from '../../enums/handSigns';
import './HandCard.scss';

export type HandCardProps = {
	handSign: HandSigns;
	onClick: () => void;
};

export const HandCard = (props: HandCardProps) => {
	const { imgLoc, altText } = getHandSignImg(props.handSign);

	const buttonProps: ButtonProps = {
		imgLoc,
		altText,
		onClick: () => props.onClick(),
	};

	return (
		<div className="card">
			<Button {...buttonProps}></Button>
		</div>
	);
};
