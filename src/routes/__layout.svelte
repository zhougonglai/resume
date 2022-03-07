<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
</script>

<Header />

<main class="container mx-auto py-4">
	<slot />
</main>
