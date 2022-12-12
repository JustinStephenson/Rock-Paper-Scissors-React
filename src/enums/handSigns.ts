import paperImg from '../img/paper.png';
import rockImg from '../img/rock.png';
import scissorsImg from '../img/scissors.png';
import { getRandomInt } from '../util/util';

export enum HandSigns {
	rock = 0,
	paper = 1,
	scissors = 2,
}

type handSignContents = {
	imgLoc: string;
	altText: string;
};

export const chooseRandomHandSign = (): HandSigns => {
	const randomInt = getRandomInt(3);
	if (randomInt === 1) {
		return HandSigns.paper;
	} else if (randomInt === 2) {
		return HandSigns.rock;
	} else {
		return HandSigns.scissors;
	}
};

export const getHandSignImg = (handSign: HandSigns): handSignContents => {
	if (handSign === HandSigns.rock) {
		return { imgLoc: rockImg, altText: 'Rock' };
	} else if (handSign === HandSigns.paper) {
		return { imgLoc: paperImg, altText: 'Paper' };
	} else {
		return { imgLoc: scissorsImg, altText: 'Scissors' };
	}
};
