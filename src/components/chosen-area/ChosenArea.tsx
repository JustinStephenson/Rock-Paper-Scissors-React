import { HandSigns } from '../../enums/handSigns';
import './ChosenArea.scss';

export type ChosenAreaProps = {
	left: HandSigns;
	right: HandSigns;
};

export const ChosenArea = (props: ChosenAreaProps) => {
	return <div>ChosenArea</div>;
};
