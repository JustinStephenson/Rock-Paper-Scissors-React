import React, { useState } from 'react';
import { handSigns } from '../../enums/handSigns';
import { HandCard } from '../hand-card/HandCard';
import { Score } from '../score/Score';
import './GameArea.scss';

export const GameArea = () => {
	const [playerScore, setPlayerScore] = useState<number>(0);
	const [compScore, setCompScore] = useState<number>(0);
	const [playerOption, setPlayerOption] = useState<handSigns>(handSigns.rock);

	return (
		<React.Fragment>
			<div className="grid">
				<div className="grid__score">
					<Score playerScore={0} compScore={0}></Score>
				</div>
				<div className="grid__cards">
					<HandCard
						handSign={handSigns.rock}
						onClick={() => console.log('Rock')}
					></HandCard>
					<HandCard
						handSign={handSigns.paper}
						onClick={() => console.log('Paper')}
					></HandCard>
					<HandCard
						handSign={handSigns.scissors}
						onClick={() => console.log('Scissors')}
					></HandCard>
				</div>
			</div>
		</React.Fragment>
	);
};
