<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>个人简介</title>
</svelte:head>

<section
	class="grid gap-8 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start"
>
	<div class="card">
		<div class="card-content px-4 py-8">
			<h3 class="card-label">个人信息</h3>
			<ul class="card-list">
				<li>姓名: 股哥</li>
				<li>性别: 男</li>
				<li>出生: 1992</li>
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
			<h3 class="card-label">联系我</h3>

			<div class="card-action">
				<button class="card-btn">
					<span class="content">微信二维码</span>
				</button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
</style>
