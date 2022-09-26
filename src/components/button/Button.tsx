import './Button.scss';

export type ButtonProps = {
	text?: string;
	imgLoc?: string;
	className?: string;
	onClick: () => void;
};

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={`button ${props.className || ''}`}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};
