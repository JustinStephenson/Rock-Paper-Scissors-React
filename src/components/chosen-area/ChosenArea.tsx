import { getHandSignImg, HandSigns } from '../../enums/handSigns';
import s from './ChosenArea.module.scss';

export type ChosenAreaProps = {
	playerHand: HandSigns | null;
	compHand: HandSigns | null;
};

export const ChosenArea = (props: ChosenAreaProps): JSX.Element => {
	const populateImg = (handSign: HandSigns | null) => {
		if (handSign !== null) {
			const { imgLoc, altText } = getHandSignImg(handSign);
			return (
				<img className={s['area__hand--img']} src={imgLoc} alt={altText} />
			);
		}
		return null;
	};

	return (
		<div className={s['grid']}>
			<div className={`${s['area']} ${s['area--left']}`}>
				<div className={`${s['area__hand']} ${s['area--left']}`}>
					{populateImg(props.playerHand)}
				</div>
			</div>

			<div className={`${s['area']} ${s['area--right']}`}>
				<div className={`${s['area__hand']}`}>
					{populateImg(props.compHand)}
				</div>
			</div>
		</div>
	);
};
