import React from 'react';
import './Score.scss';

export type ScoreProps = {
	playerScore: number;
	compScore: number;
};

export const Score = (props: ScoreProps) => {
	return (
		<React.Fragment>
			<h1>Score:</h1>
			<div className="score-area">
				<h3>Player Score: {props.playerScore}</h3>
				<h3>Computer Score: {props.compScore}</h3>
			</div>
		</React.Fragment>
	);
};
