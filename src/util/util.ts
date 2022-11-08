export const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max);
};

export const mod = (n: number, m: number): number => {
	return ((n % m) + m) % m;
};
