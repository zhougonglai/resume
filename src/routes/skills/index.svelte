<script>
	import { onMount } from 'svelte';

	const files = import.meta.globEager('$lib/assets/file/*');
	const getFile = filename =>
		files['../../lib/assets/file/' + filename].default;

	const skills = [
		{
			title: '职业技能',
			type: 'pro',
			skill: [
				{
					name: 'vue2/3',
					color: 'green',
					tag: ['vuex', 'vue-router', 'vue-use', 'nuxt2/3', 'vite']
				},
				{
					name: 'react',
					color: 'blue',
					tag: ['ahook', 'next.js', 'ice.work', 'vite']
				},
				{
					name: 'svelte',
					color: 'orange',
					tag: ['svelte-kit', 'vite']
				}
			]
		},
		{
			title: '投资技能',
			type: 'invice',
			skill: [
				{
					name: '技术栈更新',
					color: 'blue',
					tag: ['Pinial', 'viss', 'vite-ssr', 'Tauri']
				},
				{
					name: 'Web3',
					color: 'blue',
					tag: ['Solid', 'ether.js']
				}
			]
		},
		{
			title: '业余技能',
			type: 'amateur',
			skill: [
				{
					name: '混合应用',
					color: 'blue',
					tag: ['electron', 'ionic', 'flutter']
				},
				{
					name: '设计',
					color: 'blue',
					tag: ['Figma']
				},
				{
					name: 'Python',
					color: 'blue',
					tag: ['TensorFlow', 'Keras', 'PyTorch']
				}
			]
		}
	];

	onMount(() => {
		console.log('files', files);
	});
</script>

<svelte:head>
	<title>技能树🌲</title>
</svelte:head>

<article class="grid xl:grid-cols-2 md:grid-cols-1 xl:gap-10 md:gap-5">
	<div class="">
		<h1 class="text-xl">自我评价</h1>
		<article class="p-5 bg-gray-100 text-gray-600 rounded mt-5">
			<p class="italic">
				我是一个热爱技术的人，喜欢技术，喜欢分享，喜欢改变世界。
			</p>
			<p class="mt-2">
				从2015年开始.亲历了一波互联网洪流的潮起潮落.深知技术投资与个人成长的重要性.对于未来.当下.历史有很深的认识.
			</p>
		</article>
	</div>

	{#each skills as skill}
		<div class="flex flex-col">
			<h1 class="text-xl">{skill.title}</h1>
			<ul
				class="grid grid-cols-1 divide-y divide-gray-300 mt-5 border border-solid border-gray-300 rounded leading-8"
			>
				{#each skill.skill as s}
					<li class="py-2 px-5 text-gray-500 border-solid flex">
						{s.name}
						<div class="flex-1 inline-flex px-5 gap-x-2 items-center">
							{#each s.tag as t}
								<span
									class={`py-0 px-2 text-sm bg-${s.color}-500  text-white cursor-pointer`}
									>{t}</span
								>
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/each}

	<section>
		<h1 class="text-xl mb-5">Udacity尤达React课程</h1>
		<embed width="100%" height="100%" src={getFile('document.pdf')} />
	</section>
	<section>
		<h1 class="text-xl mb-5">开课吧 AI量化交易课程</h1>
		<img src={getFile('cef.png')} alt="AI证书" />
	</section>
</article>
