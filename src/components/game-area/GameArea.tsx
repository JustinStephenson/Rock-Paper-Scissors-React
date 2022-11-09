import React, { useState } from 'react';
import { HandSigns } from '../../enums/handSigns';
import { getRandomInt, mod } from '../../util/util';
import { Description } from '../description/Description';
import { HandCard } from '../hand-card/HandCard';
import { Score } from '../score/Score';
import './GameArea.scss';

export const GameArea = () => {
	const [playerScore, setPlayerScore] = useState<number>(0);
	const [compScore, setCompScore] = useState<number>(0);
	const [descText, setDescText] = useState<string>('Choose a hand, good luck!');

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

	const evaluateWinner = (
		playerHandSign: HandSigns,
		compHandSign: HandSigns
	): number => {
		return mod(compHandSign - playerHandSign, 3);
	};

	const playRound = (playerHandSign: HandSigns) => {
		const compHandSign = chooseRandomHandSign();
		const evaluate = evaluateWinner(playerHandSign, compHandSign);

		// Rock = 0, Paper = 1, Scissors = 2
		// Draw = 0, Comp Wins = 1, Player Wins = 2
		if (evaluate === 0) {
			setDescText('Draw!');
		} else if (evaluate === 1) {
			setCompScore(compScore + 1);
			setDescText('You Lose!');
		} else {
			setPlayerScore(playerScore + 1);
			setDescText('You Win!');
		}
	};

	const clickHand = (playerHandSign: HandSigns) => {
		playRound(playerHandSign);
	};

	return (
		<React.Fragment>
			<div className="grid">
				<div className="grid__score">
					<Score playerScore={playerScore} compScore={compScore} />
				</div>
				<div className="grid__description">
					<Description text={descText} />
				</div>
				<div className="grid__game">
					<div className="grid__game__chosen"></div>
					<div className="grid__game__cards">
						<HandCard
							handSign={HandSigns.rock}
							onClick={() => clickHand(HandSigns.rock)}
						/>
						<HandCard
							handSign={HandSigns.paper}
							onClick={() => clickHand(HandSigns.paper)}
						/>
						<HandCard
							handSign={HandSigns.scissors}
							onClick={() => clickHand(HandSigns.scissors)}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
