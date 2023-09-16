<script lang="ts">
	import type { Guess, GuessOutput } from '$lib/game';

	const resultToColor: { [key in GuessOutput]: string } = {
		low: 'yellow',
		high: 'red',
		correct: 'green'
	};

	export let guess: Guess;
</script>

<div class="card text-center my-5 {resultToColor[guess.guess]}">
	{guess.number} - Your Guess is {guess.guess.toUpperCase()}
</div>

<style>
	.card {
		@apply font-medium text-slate-900 py-3 px-5 shadow-md rounded-md border-2 border-slate-800;
	}
	.yellow {
		@apply bg-yellow-200;
	}
	.red {
		@apply bg-red-200;
	}
	.green {
		@apply bg-green-200;
	}
</style>
