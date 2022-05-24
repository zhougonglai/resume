<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import 'carbon-components-svelte/css/white.css';
	import { onMount } from 'svelte';
	import { checkWallet } from '$lib/utils';

	onMount(async () => {
		const ethereum = await checkWallet();
		const chainId = await ethereum.request({ method: 'eth_chainId' });
		ethereum.on('chainChanged', location.reload);
	});
</script>

<Header />

<main class="container mx-auto py-8 relative">
	<slot />
</main>
