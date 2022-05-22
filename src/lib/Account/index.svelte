<script>
	import { ethers } from 'ethers';
	import { TextInput, FluidForm, Button } from 'carbon-components-svelte';
	import { checkWallet } from '$lib/utils';
	import contractABI from '$lib/contracts/Domains.json';
	import { onMount } from 'svelte';

	export let account = '';
	let domain = '',
		record = '',
		userBalance = '';

	const CONTRACT_ADDRESS = '0xF8e9c5eC197CF3161B893BC287d864a7cd77B7f5';

	const mintDomain = async () => {
		if (!domain) return;
		if (domain.length < 3) return '长度不能小于3';
		const price = domain.length === 3 ? 0.5 : domain.length === 4 ? 0.3 : 0.1;
		console.log('mintDomain:', domain, 'prices:', price);

		const ethereum = await checkWallet();
		const provider = new ethers.providers.Web3Provider(ethereum);
		const siner = provider.getSigner();
		const contract = new ethers.Contract(
			CONTRACT_ADDRESS,
			contractABI.abi,
			siner
		);

		console.log('connect to wallet pay the gas');

		let tx = await contract.register(domain, {
			value: ethers.utils.parseEther(price.toString())
		});

		const receipt = await tx.wait();
		if (receipt === 1) {
			console.log(
				'domain minted: https://mumbai.polygonscan.com/tx/' + tx.hash
			);
		}

		tx = await contract.setRecord(domain, record);

		await tx.wait();
		console.log('record set : https://mumbai.polygonscan.com/tx/' + tx.hash);
	};

	const getBalance = async () => {
		const ethereum = await checkWallet();
		const balance = await ethereum.request({
			method: 'eth_getBalance',
			params: [account, 'latest']
		});
		console.log('balance', ethers.utils.formatEther(balance));
		userBalance = ethers.utils.formatEther(balance);
	};

	const requestPermissions = async () => {
		const ethereum = await checkWallet();
		const openpermissions = await ethereum.request({
			method: 'wallet_getPermissions'
		});
		console.log('openpermissions', openpermissions);
		const permissions = await ethereum.request({
			method: 'wallet_requestPermissions',
			params: [{ eth_accounts: {} }]
		});
		console.log('permissions', permissions);
	};

	const submit = e => {
		domain = e.target.domain.value;
		record = e.target.record.value;
		mintDomain();
	};

	onMount(() => {
		getBalance();
	});
</script>

<h3>
	👋 Hello ! {account.substring(0, 5)}...{account.substring(account.length - 5)}
</h3>
<h5>
	💰 Balance: {userBalance}
</h5>

<Button kind="tertiary" on:click={requestPermissions}>请求权限</Button>

<FluidForm on:submit={submit}>
	<TextInput name="domain" />
	<TextInput name="record" />
	<Button type="submit">Mint</Button>
</FluidForm>
