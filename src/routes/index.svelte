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
				<li>股哥/🚹/1992</li>
				<li>本科/萌鹿大学计算机系</li>
				<li>工作年限：2015年~至今</li>
				<li>期望职位：Web前端高级程序员</li>
				<li>期望薪资：税前月薪15k~20k，特别喜欢的公司可例外</li>
				<li>期望城市：武汉</li>
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

	<div class="card">
		<div class="card-content px-4 py-8">
			<h3 class="card-label">工作经历</h3>
		</div>
	</div>

	<div class="card">
		<div class="card-content px-4 py-8">
			<h3 class="card-label">项目经历</h3>
		</div>
	</div>

	<div class="card">
		<div class="card-content px-4 py-8">
			<h3 class="card-label">技能清单</h3>
			<ul class="card-list">
				<li>Web开发：PHP/Hack/Node</li>
				<li>Web框架：ThinkPHP/Yaf/Yii/Lavaral/LazyPHP</li>
				<li>前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic</li>
				<li>前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap</li>
				<li>数据库相关：MySQL/PgSQL/PDO/SQLite</li>
				<li>版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer</li>
				<li>单元测试：PHPUnit/SimpleTest/Qunit</li>
				<li>云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发</li>
			</ul>
		</div>
	</div>

	<div class="card">
		<div class="card-content px-4 py-8">
			<h3 class="card-label">业余技能</h3>
			<ul class="card-list">
				<li>Python</li>
				<li>Tensorflow</li>
				<li>Web3</li>
				<li>Solidity</li>
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
</style>
