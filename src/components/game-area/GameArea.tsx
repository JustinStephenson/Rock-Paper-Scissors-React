import React, { useState } from 'react';
import { HandSigns } from '../../enums/handSigns';
import { getRandomInt } from '../../util/util';
import { Description } from '../description/Description';
import { HandCard } from '../hand-card/HandCard';
import { Score } from '../score/Score';
import './GameArea.scss';

export const GameArea = () => {
	const [playerScore, setPlayerScore] = useState<number>(0);
	const [compScore, setCompScore] = useState<number>(0);

	let descriptionText: string = 'Choose a hand, good luck!';

	const chooseRandomHandSign = (): HandSigns => {
		const randomInt: number = getRandomInt(3);
		if (randomInt === 1) {
			return HandSigns.paper;
		} else if (randomInt === 2) {
			return HandSigns.rock;
		} else {
			return HandSigns.scissors;
		}
	};

	const evaluateWinner = (playerHandSign: HandSigns) => {
		const compHandSign = chooseRandomHandSign();
		let evaluate = Math.abs(compHandSign - playerHandSign) % 3;
		// Draw = 0, Comp Wins = 1, Player Wins = 2
		if (evaluate === 0) {
			return;
		} else if (evaluate === 1) {
			setCompScore(compScore + 1);
		} else {
			setPlayerScore(playerScore + 1);
			console.log('ser player score');
		}
	};

	const playRound = (playerHandSign: HandSigns) => {
		evaluateWinner(playerHandSign);
	};

	return (
		<React.Fragment>
			<div className="grid">
				<div className="grid__score">
					<Score playerScore={playerScore} compScore={compScore} />
				</div>
				<div className="grid__description">
					<Description text={descriptionText} />
				</div>
				<div className="grid__cards">
					<HandCard
						handSign={HandSigns.rock}
						onClick={() => playRound(HandSigns.rock)}
					/>
					<HandCard
						handSign={HandSigns.paper}
						onClick={() => playRound(HandSigns.paper)}
					/>
					<HandCard
						handSign={HandSigns.scissors}
						onClick={() => playRound(HandSigns.scissors)}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};
