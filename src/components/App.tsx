import React, { useState } from 'react';
import { HandCard } from './hand-card/HandCard';
import { handSigns } from '../enums/handSigns';

import './App.scss';
import { Score } from './score/Score';

export const App = (): JSX.Element => {
	const [playerScore, setPlayerScore] = useState<number>(0);
	const [compScore, setCompScore] = useState<number>(0);
	const [playerOption, setPlayerOption] = useState<handSigns>(handSigns.rock);

	return (
		<React.Fragment>
			<Score playerScore={0} compScore={0}></Score>
			<div className="center">
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
		</React.Fragment>
	);
};
