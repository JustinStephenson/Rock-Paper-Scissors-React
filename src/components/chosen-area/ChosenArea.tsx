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
			<div className={`${s['area']} ${s['area--left']}`}>
				<div className={`${s['area__hand']} ${s['area--left']}`}>
					<img className={s['area__hand--img']} src={imgLocL} alt={altTextL} />
				</div>
			</div>

			<div className={`${s['area']} ${s['area--right']}`}>
				<div className={`${s['area__hand']}`}>
					<img className={s['area__hand--img']} src={imgLocR} alt={altTextR} />
				</div>
			</div>
		</div>
	);
};
