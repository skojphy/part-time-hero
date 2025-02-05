import { writable } from 'svelte/store';
import { getDailyVillains, gameDays } from './story';

export const playerStats = writable({
	score: 0,
	energy: 100,
	day: 1,
	villains: getDailyVillains(),
	currentVillainIndex: 0,
	gameOver: false
});

export const nextDay = () => {
	playerStats.update((state) => {
		if (state.day >= gameDays) {
			return { ...state, gameOver: true };
		}

		let newDay = state.day + 1;
		let newGameOver = newDay > gameDays;
		let newVillainIndex = state.currentVillainIndex + 1;

		return {
			...state,
			day: newDay,
			currentVillainIndex: newVillainIndex,
			gameOver: newGameOver
		};
	});
};

export const applyChoice = (option) => {
	playerStats.update((state) => {
		if (state.gameOver) return state;

		let newScore = state.score + option.effect.score;
		let newEnergy = state.energy + option.effect.energy;

		return {
			...state,
			score: newScore,
			energy: newEnergy
		};
	});
	nextDay();
};
