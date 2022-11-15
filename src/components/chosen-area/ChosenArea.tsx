import { getHandSignImg, HandSigns } from '../../enums/handSigns';
import s from './ChosenArea.module.scss';

export type ChosenAreaProps = {
	left: HandSigns;
	right: HandSigns;
};

export const ChosenArea = (props: ChosenAreaProps) => {
	const { imgLoc: imgLocL, altText: altTextL } = getHandSignImg(props.left);
	const { imgLoc: imgLocR, altText: altTextR } = getHandSignImg(props.right);

	return (
		<div className={s['grid']}>
			<div className={`${s['grid__hand']} ${s['grid__hand--left']}`}>
				<img className={s['grid__hand--img']} src={imgLocL} alt={altTextL} />
			</div>
			<div className={`${s['grid__hand']} ${s['grid__hand--right']}`}>
				<img className={s['grid__hand--img']} src={imgLocR} alt={altTextR} />
			</div>
		</div>
	);
};
