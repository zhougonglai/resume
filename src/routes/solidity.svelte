<script>
	import { Button, ButtonSet, Loading } from 'carbon-components-svelte';
	import { ethers } from 'ethers';
	import { onMount } from 'svelte';
	import abi from '../assets/constant/contracts/counter.json';

	let point = 0;
	let account = '';
	let loading = false;
	const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

	const checkIfWalletIsConnect = async () => {
		const { ethereum } = window;
		if (ethereum) {
			console.log('metamask is available');
		} else {
			console.log('please install metamask');
		}

		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		[account] = accounts;
		console.log('account', account);
	};

	const connectWallet = async () => {
		const { ethereum } = window;
		if (!ethereum) {
			alert('please install metamask');
			return false;
		}

		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		[account] = accounts;
		console.log('account', account);
	};

	const counterAdd = async () => {
		const { ethereum } = window;
		if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(address, abi.abi, signer);
			loading = true;
			const tx = await contract.add();
			console.log(tx);
			await tx.wait();
			loading = false;
			await getCounts();
		}
	};

	const getCounts = async () => {
		const { ethereum } = window;
		if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(address, abi.abi, signer);
			point = await contract.getCounts().then(n => n.toNumber());
			console.log(point);
		}
	};

	onMount(() => {
		checkIfWalletIsConnect().then(getCounts);
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
