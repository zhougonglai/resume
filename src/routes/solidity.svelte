<script>
	import { Button } from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import Account from '$lib/Account/index.svelte';
	import NoConnectAccountError from '$lib/Error/NoAccount.svelte';
	import { checkWallet } from '$lib/utils';

	let account = '';
	let error;
	const url =
		'https://eth-mainnet.alchemyapi.io/v2/0ELJSCDzvEcl06rAWZAE-VfiJixjq0hC';

	const onAccountChanged = async accounts => {
		console.log('onAccountChanged', accounts);
		if (accounts.length) {
			account = accounts[0];
		} else {
			account = '';
		}
	};

	const connectWallet = async () => {
		const ethereum = await checkWallet();
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		if (accounts.length) {
			return (account = accounts[0]);
		}
		return new Error('没有链接用户');
	};

	const checkIfWalletIsConnect = async () => {
		const ethereum = await checkWallet();
		const accounts = await ethereum.request({ method: 'eth_accounts' });
		account = accounts[0];
		ethereum.on('accountsChanged', onAccountChanged);
	};

	onMount(() => {
		checkIfWalletIsConnect();
	});
</script>

<svelte:head>
	<title>智能合约</title>
</svelte:head>

<section class="w-full">
	{#if account}
		<Account {account} />
	{:else if error}
		<NoConnectAccountError {error} />
	{:else}
		<Button on:click={connectWallet}>链接钱包👛</Button>
	{/if}
</section>
