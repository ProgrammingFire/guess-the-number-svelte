<script lang="ts">
	import type { Guess } from '$lib/game';

	const resultToColor = {
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
		@apply font-medium text-slate-900 py-3 px-5 shadow-md rounded-md;
	}
	.yellow {
		@apply bg-yellow-100;
	}
	.red {
		@apply bg-red-100;
	}
	.green {
		@apply bg-green-100;
	}
</style>
