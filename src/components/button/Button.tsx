import './Button.scss';

export type ButtonProps = {
	imgLoc?: string;
	altText?: string;
	className?: string;
	onClick: () => void;
};

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={`button ${props.className || ''}`}
			onClick={props.onClick}
		>
			<img className="img" src={props.imgLoc} alt={props.altText} />
		</button>
	);
};
