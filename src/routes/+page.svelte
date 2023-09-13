<script lang="ts">
	import { Game, type Guess } from '$lib/game';
	import GuessCard from '../components/GuessCard.svelte';
	let game = new Game();
	let userNum = 1;
	let errMsg = '';
	let guesses: Guess[] = [];
	let correct = false;

	function handleGuess() {
		if (userNum > 100 || userNum < 1) return;
		if (correct === true) {
			alert("You have already won the game! Click the 'Play Again' button");
			return;
		}
		let result = game.try(userNum);
		if (result == 'correct') correct = true;
		guesses = [{ number: userNum, guess: result }, ...guesses];
	}

	function reset() {
		guesses = [];
		userNum = 1;
		correct = false;
		game = new Game();
	}

	$: {
		if (userNum > 100 || userNum < 1) {
			errMsg = 'The number should not be greater than 100 and less than 1';
		} else {
			errMsg = '';
		}
	}
</script>

<div class="flex py-12 font-[Poppins] items-center flex-col">
	{#if correct}
		<div class="flex items-center text-slate-900 font-bold gap-x-4">
			YOU WON in {guesses.length} Guesses
			<button
				class="py-2 px-4 bg-indigo-800 rounded-lg shadow-sm text-white font-semibold text-sm"
				on:click={reset}>PLAY AGAIN!!!</button
			>
		</div>
	{/if}

	<h1 class="font-semibold text-xl py-10 text-slate-800">GUESS THE NUMBER</h1>

	<p class="text-red-800 mb-3 text-sm">{errMsg}</p>
	<form class="shadow-md rounded-md" on:submit={handleGuess}>
		<input class="rounded-l-md outline-none py-2 px-4" type="number" bind:value={userNum} />

		<button type="submit" class="bg-indigo-800 text-white py-2 shadow-md rounded-r-md px-4"
			>Guess</button
		>
	</form>
	<div>
		{#each guesses as guess}
			<GuessCard {guess} />
		{/each}
	</div>
</div>
