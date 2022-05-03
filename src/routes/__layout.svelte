<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import 'carbon-components-svelte/css/white.css';
</script>

<Header />

<main class="container mx-auto py-8">
	<slot />
</main>
