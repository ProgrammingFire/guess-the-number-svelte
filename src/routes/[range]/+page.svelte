<script lang="ts">
	import Game from '../../components/Game.svelte';

	export let data;
	const { params } = data;
</script>

<Game range={parseInt(params.range)} />
