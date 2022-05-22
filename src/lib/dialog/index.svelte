<svelte:options accessors />

<script>
	export let ctx;
	export const showModal = () => {
		ctx.showModal();
	};
	const dismiss = e => {
		if (e.target.nodeName === 'DIALOG') {
			ctx.close();
		}
	};
</script>

<dialog bind:this={ctx} on:click={dismiss}>
	<slot />
</dialog>

<style lang="scss">
	@import 'https://unpkg.com/open-props/easings.min.css';
	@import 'https://unpkg.com/open-props/animations.min.css';

	dialog {
		&:not([open]) {
			pointer-events: none;
			opacity: 0;
		}

		background: white;
		color: black;
		max-inline-size: 90vw;
		max-block-size: min(80vh, 100%);
		max-block-size: min(80dvb, 100%);
		overflow: hidden;
		margin: auto;
		padding: 0;
		position: fixed;
		inset: 0;
		z-index: 9;
		transition: opacity 0.5s var(--ease-3);

		@media (--motionOK) {
			animation: var(--animation-scale-down) forwards;
			animation-timing-function: var(--ease-squish-3);
		}

		&[open] {
			@media (--motionOK) {
				animation: var(--animation-slide-in-up) forwards;
			}
		}

		&::backdrop {
			transition: backdrop-filter 0.5s ease;
			backdrop-filter: blur(25px);
		}
	}

	@media (max-width: 768px) {
		dialog[modal-mode='mega'] {
			margin-block-end: 0;
			border-end-end-radius: 0;
			border-end-start-radius: 0;
		}
	}
</style>
