<script context="module">
	export const prerender = true;
</script>

<script>
	import Dialog from '$lib/dialog/index.svelte';
	import { onMount } from 'svelte';
	let loadend = false;
	let dialog;
	const showModal = () => {
		dialog.showModal();
	};
	onMount(() => {
		loadend = true;
	});
</script>

<svelte:head>
	<title>个人简介</title>
</svelte:head>

<Dialog bind:this={dialog}>
	<img src="/img/qrcode.jpg" alt="我的二维码" />
</Dialog>
<!-- xl:grid-rows-2 xl:grid-flow-col -->
{#if loadend}
	<section
		class="grid absolute inset-x-0 top-10 gap-8 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
	>
		<div class="card">
			<div class="card-content px-4 py-8">
				<h3 class="card-label">个人信息</h3>
				<ul class="card-list flex-1">
					<li>周公来/🚹/1992</li>
					<li>学历: 专科</li>
					<li>工作年限：2015年~至今</li>
					<li>期望职位：Web前端高级程序员</li>
					<!-- <li>期望薪资：月薪18k，特别喜欢的公司可例外</li> -->
					<li>期望城市：武汉, 杭州, 深圳</li>
				</ul>
				<div class="card-action">
					<a
						class="card-link"
						href="https://github.com/zhougonglai"
						target="_blank"
					>
						<span class="content">Github</span>
					</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-content px-4 py-8">
				<h3 class="card-label">工作经历</h3>
				<ul class="card-list flex-1 overflow-auto flex flex-col gap-y-2">
					<li>
						<img
							class="object-contain mr-2"
							src="//www.lgstatic.com/i/image/M00/1C/83/CgqCHl7gfCSAUhXGAABQxXDG_YU576.png"
							alt="雷神科技"
							width="45"
							height="45"
						/>
						<div class="content">
							<div class="title font-bold">雷神科技有限公司</div>
							<div class="subtitle text-sm">高级前端工程师</div>
						</div>
					</li>
					<li>
						<img
							class="object-contain mr-2"
							src="//www.lgstatic.com/i/image/M00/5B/FB/CgpFT1mRBnKAdv1XAAK5g-5RwUE175.png"
							alt="杭州旦悦科技有限公司"
							width="45"
							height="45"
						/>
						<div class="content">
							<div class="title font-bold">杭州旦悦科技有限公司</div>
							<div class="subtitle text-sm">高级前端工程师</div>
						</div>
					</li>
					<li>
						<img
							class="object-contain mr-2"
							src="//www.lgstatic.com/i/image/M00/68/45/CgqKkVgQRMSAIv6nAACTFcrzJ30081.png"
							alt="成都悠唐软件"
							width="45"
							height="45"
						/>
						<div class="content">
							<div class="title font-bold">成都悠唐软件</div>
							<div class="subtitle text-sm">前端工程师</div>
						</div>
					</li>
					<li>
						<img
							class="object-contain mr-2"
							src="//www.lgstatic.com/images/logo_default.png"
							alt="雷神科技"
							width="45"
							height="45"
						/>
						<div class="content">
							<div class="title font-bold">亿富贷科技有限公司</div>
							<div class="subtitle text-sm">程序员</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="card">
			<div class="card-content px-4 py-8">
				<h3 class="card-label">技能清单</h3>
				<ul class="card-list flex flex-col gap-y-2">
					<li>
						<img
							src="//cn.vuejs.org/images/logo.svg"
							width="45"
							height="45"
							alt="vuejs"
						/>
						<div class="content ml-4">
							<div class="title font-bold">Vue2/Vue3</div>
							<div class="subtitle text-sm">全家桶/Nuxt2/Nuxt3</div>
						</div>
					</li>
					<li>
						<img
							src="//vitejs.dev/logo.svg"
							width="45"
							height="45"
							alt="Vite"
						/>
						<div class="content ml-4">
							<div class="title font-bold">Vite</div>
							<div class="subtitle text-sm">Vue2/Vue3/React</div>
						</div>
					</li>
					<li>
						<img
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
							width="45"
							height="45"
							alt="React"
						/>
						<div class="content ml-4">
							<div class="title font-bold">React</div>
							<div class="subtitle text-sm">Vite/Next</div>
						</div>
					</li>
					<li>
						<img
							src="https://www.sveltejs.cn/svelte.png"
							width="90"
							height="45"
							alt="svelte"
						/>
						<div class="content ml-4">
							<div class="title font-bold">svelte</div>
							<div class="subtitle text-sm">kit</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="card">
			<div class="card-content px-4 py-8">
				<h3 class="card-label">联系我</h3>
				<div class="card-cover">
					<img
						src="/img/qrcode.jpg"
						alt="我的二维码"
						width="200"
						height="200"
					/>
				</div>

				<div class="card-action">
					<button class="card-btn" on:click={showModal}>
						<span class="content">微信二维码</span>
					</button>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-content px-4 py-8">
				<h3 class="card-label">项目经历</h3>
				<ul class="flex flex-col gap-y-2 mt-5">
					<li>管理系统</li>
					<li>官网</li>
					<li>Web App</li>
					<li>桌面客户端内嵌</li>
					<li>运营活动</li>
				</ul>
				<div class="card-action">
					<a class="card-link" href="/about" sveltekit:prefetch>
						<span class="content">详情 🔎</span>
					</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-content px-4 py-8">
				<h3 class="card-label">业余技能</h3>
				<ul class="card-list flex flex-col gap-y-2 mt-5">
					<li>
						<div class="content ml-4">ether.js</div>
					</li>
					<li>
						<div class="content ml-4">Solidity</div>
					</li>
					<li>
						<div class="content">Node.js</div>
					</li>
					<li>
						<div class="content ml-4">Figma</div>
					</li>
					<li>
						<div class="content ml-4">tauri</div>
					</li>
					<li>
						<div class="content ml-4">electron</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
{/if}

<style lang="scss">
</style>
