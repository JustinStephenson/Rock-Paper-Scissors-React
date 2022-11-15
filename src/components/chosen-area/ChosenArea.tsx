import { HandSigns } from '../../enums/handSigns';
import s from './ChosenArea.module.scss';

export type ChosenAreaProps = {
	left: HandSigns;
	right: HandSigns;
};

export const ChosenArea = (props: ChosenAreaProps) => {
	return (
		<div className={s.grid}>
			<div className={s.grid__hand}>hand1</div>
			<div className={s.grid__hand}>hand2</div>
		</div>
	);
};
