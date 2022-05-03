<script>
	import { Button, ButtonSet, Loading } from 'carbon-components-svelte';
	import { ethers } from 'ethers';
	import { onMount } from 'svelte';
	import abi from '../assets/constant/contracts/counter.json';

	let point = 0;
	let account = '';
	let loading = false;
	const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
	const url =
		'https://eth-mainnet.alchemyapi.io/v2/0ELJSCDzvEcl06rAWZAE-VfiJixjq0hC';

	const checkIfWalletIsConnect = async () => {
		const p = await connectWallet();
		console.log(p);
	};

	const connectWallet = async () => {
		const provider = new ethers.providers.JsonRpcProvider(url);
		return provider;
	};

	const counterAdd = async () => {};

	const getCounts = async () => {};

	onMount(() => {
		checkIfWalletIsConnect();
	});
</script>

<svelte:head>
	<title>智能合约</title>
</svelte:head>

<section class="w-full">
	{#if account}
		<h3>
			👋 Hello!
			<strong class="text-3xl">
				{`${account.substring(0, 5)}...${account.substring(
					account.length - 5
				)}`}
			</strong>
		</h3>
		<h2>你拥有 {point}</h2>
		<ButtonSet>
			<Button on:click={counterAdd} disabled={loading}>
				{#if loading}
					<Loading withOverlay={false} small />
				{:else}
					加币
				{/if}
			</Button>
			<Button on:click={getCounts} kind="tertiary">更新积分</Button>
		</ButtonSet>
	{:else}
		<Button on:click={checkIfWalletIsConnect}>链接钱包👛</Button>
	{/if}
</section>
