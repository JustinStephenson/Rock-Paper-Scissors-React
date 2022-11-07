import './Description.scss';

type Props = {
	text: string;
};

export const Description = (props: Props) => {
	return <p className="description">{props.text}</p>;
};
