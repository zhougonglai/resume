<script>
	import Header from '$lib/header/Header.svelte';
	import 'carbon-components-svelte/css/white.css';
	import '../app.scss';
</script>

<Header />

<main class="container mx-auto py-8">
	<slot />
</main>
