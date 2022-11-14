import paperImg from '../img/paper.png';
import rockImg from '../img/rock.png';
import scissorsImg from '../img/scissors.png';

export enum HandSigns {
	rock = 0,
	paper = 1,
	scissors = 2,
}

type handSignContents = {
	imgLoc: string;
	altText: string;
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
