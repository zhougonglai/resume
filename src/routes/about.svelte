<script context="module">
	import { browser } from '$app/env';
	export const router = browser;
	export const prerender = true;
</script>

<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	let loadend = false;
	const timeList = [
		{
			title: '雷神科技有限公司',
			time: ['2019.06', '至今'],
			logo: '//www.lgstatic.com/i/image/M00/1C/83/CgqCHl7gfCSAUhXGAABQxXDG_YU576.png',
			tag: ['工具', '客户端', '活动'],
			desc: '在任职期间内负责项目日常运营活动, 客户端版本迭代, 工具研发, 数据分析, 技术调研及落地等工作.',
			projects: [
				{
					title: '雷神加速器-客户端',
					link: {
						type: 'link',
						target: 'https://www.leigod.com/'
					},
					time: ['2019.9', '至今'],
					skill: ['vue2', 'vue-cli', 'vue-router', 'vuex'],
					labels: ['活动业务', '消费支付业务', '用户模块'],
					desc: '公司最大现金流项目'
				},
				{
					title: '雷神加速器-网吧管理系统',
					link: {
						type: 'label',
						target: '内部项目'
					},
					time: ['2021.5', '2022.2'],
					skill: ['react', 'ice-work', 'fusion design'],
					labels: ['通用搜索', '表格组件', '图表'],
					desc: '公司线下地方业务系统'
				},
				{
					title: '雷神加速器-H5',
					link: {
						type: 'label',
						target: '微信同名公众号'
					},
					time: ['2019.9', '至今'],
					skill: ['vue2', 'webpack', 'vue-router', 'typescript'],
					labels: ['活动模组', '抽奖组件', '用户中心模块'],
					desc: '微信运营活动'
				},
				{
					title: '奇妙加速器-H5',
					link: {
						type: 'label',
						target: '微信同名公众号'
					},
					time: ['2022.2', '至今'],
					skill: ['vue2', 'vue-cli', 'vue-router', 'vuex'],
					labels: ['活动模组', '抽奖组件'],
					desc: '微信运营活动'
				},
				{
					title: '奇妙加速器-Website',
					link: {
						type: 'link',
						target: 'https://www.qimiao.com/'
					},
					time: ['2021.5', '至今'],
					skill: ['react', 'vite'],
					labels: ['活动模组', '抽奖组件', '官网'],
					desc: '奇妙加速器官网及日常运营活动'
				}
			]
		},
		{
			title: '杭州旦悦科技有限公司',
			time: ['2017.10', '2019.3'],
			logo: '//www.lgstatic.com/i/image/M00/5B/FB/CgpFT1mRBnKAdv1XAAK5g-5RwUE175.png',
			tag: ['海外', '文档/表单'],
			desc: '在任职期间内负责公司海外业务.公司运营工具.',
			projects: [
				{
					title: 'Teacher-Website version.2',
					link: {
						type: 'link',
						target: 'https://teacher.landi.com/'
					},
					time: ['2017.10', '2019.3'],
					skill: [
						'Google Analytics',
						'Facebook Pixel',
						'Google Adwords',
						'vue2',
						'webpack',
						'vuex',
						'vue-router'
					],
					labels: ['教师入职流程', '教学文档', '教学课表'],
					desc: '教师入职流程管理系统'
				},
				{
					title: 'Landi-Website',
					link: {
						type: 'link',
						target: 'https://www.landi.com/'
					},
					time: ['2017.10', '2019.3'],
					skill: ['JQuery', 'Bootstrap'],
					labels: ['兰迪官网'],
					desc: '公司官网'
				},
				{
					title: '兰迪英语-hybrid',
					link: {
						type: 'label',
						target: '已下线'
					},
					time: ['2017.10', '2019.3'],
					skill: ['React-Native'],
					labels: ['兰迪英语学生端', '混合应用'],
					desc: '兰迪英语学生业务. 上架应用商店'
				},
				{
					title: 'T-Plus',
					link: {
						type: 'label',
						target: '运营工具'
					},
					time: ['2017.10', '2019.3'],
					skill: ['vue2', 'webpack', 'vuex', 'vue-router'],
					labels: ['管理系统', '表格', '搜索'],
					desc: '公司运营数据表格化'
				},
				{
					title: '兰迪-H5',
					link: {
						type: 'label',
						target: '微信同名公众号'
					},
					time: ['2017.10', '2019.3'],
					skill: ['vue2', 'webpack', 'vuex', 'vue-router'],
					labels: ['管理系统', '表格', '搜索'],
					desc: '公司运营数据表格化'
				}
			]
		},
		{
			title: '成都悠唐软件',
			time: ['2017.3', '2017.6'],
			logo: '//www.lgstatic.com/i/image/M00/68/45/CgqKkVgQRMSAIv6nAACTFcrzJ30081.png',
			tag: [],
			desc: '',
			projects: [
				{
					title: '5km(WEB)',
					link: {
						type: 'label',
						target: '已下线'
					},
					time: ['2017.3', '2017.6'],
					skill: ['angular.js', 'webpack'],
					labels: ['官网'],
					desc: '内容运营'
				},
				{
					title: 'U信',
					link: {
						type: 'label',
						target: '内部项目'
					},
					time: ['2017.3', '2017.4'],
					skill: ['vue2.2', 'webpack'],
					labels: ['管理系统'],
					desc: '公司运营文档,接口管理等'
				}
			]
		},
		{
			title: '亿富贷科技有限公司',
			time: ['2015.6', '2017.2'],
			logo: '//www.lgstatic.com/images/logo_default.png',
			tag: ['P2P金融'],
			desc: '在任职期间内负责后端.微信公众号.官网.等业务',
			projects: [
				{
					title: '亿富贷APP',
					link: {
						type: 'label',
						target: '已下线'
					},
					time: ['2016.1', '2016.6'],
					skill: ['ionic'],
					labels: ['混合应用'],
					desc: '亿富贷APP'
				},
				{
					title: '亿富贷积分商城',
					link: {
						type: 'label',
						target: '已下线'
					},
					time: ['2015.9', '2015.12'],
					skill: ['angular.js'],
					labels: ['混合应用'],
					desc: '公司积分兑换业务'
				},
				{
					title: '亿富贷微信公众号',
					link: {
						type: 'label',
						target: '已下线'
					},
					time: ['2015.6', '2015.9'],
					skill: ['ionic', 'java'],
					labels: ['微信公众号全栈'],
					desc: '公司微信业务'
				}
			]
		}
	];

	onMount(() => {
		setTimeout(() => {
			loadend = true;
		}, 300);
	});
</script>

<svelte:head>
	<title>关于我</title>
</svelte:head>

{#if loadend}
	<ul class="time-list xl:px-10 lg:px-5 md:px-0">
		{#each timeList as timer, i}
			<li class="time-item relative xl:pl-40 md:pl-0 pb-5">
				<div
					class="sticky top-0 bg-white py-2 mb-5 z-10 border-b border-gray-200 border-solid"
				>
					<div class="time-item__title flex items-center">
						<img
							src={timer.logo}
							alt={timer.title}
							class="time-item__logo"
							width="45"
							height="45"
						/>
						<div class="flex-1 mx-5 text-xl">
							{timer.title}
						</div>
						<time class="text-sm text-gray-600">
							{timer.time.join('~')}
						</time>
					</div>
					<div class="time-item__tags my-2 flex gap-x-2">
						{#each timer.tag as tag}
							<span
								class="time-item__tag px-2 py-1  border border-solid cursor-pointer
								border-blue-500 shadow shaodw-blue-300 hover:shaow-xl hover:bg-blue-500 hover:text-white"
							>
								{tag}
							</span>
						{/each}
					</div>
					<p class="py-3">{timer.desc}</p>
				</div>
				<div
					class="time-item__projects p-5 flex flex-col gap-y-5 shadow-inner shaodw shadow-gray-300 border border-gray-200 border-solid sha-dw rounded"
				>
					{#each timer.projects as project, i}
						<div class="time-item__project relative">
							<div class="py-2 flex items-center">
								<div class="flex-1 text-xl">
									{project.title}
								</div>
								<div class=" mr-5 text-sm text-gray-500">
									{project.time.join('~')}
								</div>
								{#if project.link.type === 'link'}
									<a
										href={project.link.target}
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm text-blue-500"
									>
										<ion-icon name="open" size="large" />
									</a>
								{:else if project.link.type === 'label'}
									<span class="text-sm text-blue-500">
										{project.link.target}
									</span>
								{/if}
							</div>

							<div class="grid xl:grid-cols-2 sm:grid-cols-1 py-5 gap-5">
								<div class="flex-1">
									<h5 class="text-lg">技术栈</h5>
									<ul
										class="grid grid-cols-1 divide-y divide-gray-300 rounded border border-gray-300 border-solid mt-5"
									>
										{#each project.skill as skill}
											<li class="text-sm py-2 px-5 border-solid">
												{skill}
											</li>
										{/each}
									</ul>
								</div>
								<div class="flex-1">
									<h5 class="text-lg">项目责任</h5>
									<ul
										class="grid grid-cols-1 divide-y divide-gray-300 rounded border border-gray-300 border-solid mt-5"
									>
										{#each project.labels as label}
											<li class="text-sm py-2 px-5 border-solid">{label}</li>
										{/each}
									</ul>
								</div>
							</div>

							<p
								class="p-5 text-sm text-gray-600 border-l-4 border-blue-500 border-solid bg-gray-100 rounded-l"
							>
								{project.desc}
							</p>
						</div>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss" scoped>
	ul {
		li.time-item {
			@media screen and (min-width: 1280px) {
				&::before {
					content: '●';
					position: absolute;
					color: #c9c9c9;
					left: 60px;
					z-index: 2;
					font-size: x-large;
				}

				&::after {
					content: '';
					position: absolute;
					height: 100%;
					width: 1px;
					background-color: #f2f2f2;
					left: 67px;
					top: 11px;
				}
			}
		}
	}
</style>
