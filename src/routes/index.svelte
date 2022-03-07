<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>个人简介</title>
</svelte:head>

<section class="grid gap-8 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
	<div class="aspect-w-1  bg-white rounded shadow shadow-gray-300 p-3">
		<h1>个人信息</h1>
		<ul>
			<li>姓名: 股哥</li>
			<li>性别: 男</li>
			<li>出生: 1992</li>
			<li>
				<a href="https://github.com/zhougonglai">Github</a>
			</li>
		</ul>
	</div>
	<div class="aspect-w-1 bg-white rounded">2</div>
	<div class="aspect-square bg-white rounded">3</div>
	<div class="aspect-square bg-white rounded">4</div>
	<div class="aspect-square bg-white rounded">5</div>
</section>

<style lang="scss">
</style>
