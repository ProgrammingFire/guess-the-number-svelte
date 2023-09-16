export type GuessOutput = 'low' | 'high' | 'correct';

export interface Guess {
	number: number;
	guess: GuessOutput;
}

export class Game {
	private randomNum: number;
	private guesses: number[] = [];

	constructor(range: number = 100) {
		this.randomNum = Math.floor(Math.random() * range) + 1;
	}

	public try(num: number): GuessOutput {
		this.guesses.push(num);

		if (num > this.randomNum) {
			return 'high';
		} else if (num < this.randomNum) {
			return 'low';
		} else {
			return 'correct';
		}
	}
}
