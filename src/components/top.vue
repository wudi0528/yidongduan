<template>
	<div class="top">
		<i class="iconfont ww">&#xe625;</i>
			<input type="text" placeholder="输入城市/景点/游玩/主题">
			<i class="iconfont aa">&#xe639;</i>
		<p class="pp">
			咸阳
			<i class="iconfont ww1">&#xe632;</i>
		</p>
	</div>
</template>
<style scoped>
	.ww{
		width:7%;
	}
	.top{
		background-color:#00afc7;
		line-height:0.44rem;
		font-size:0.16rem;
		height:0.45rem;
	}
	.top input{
		width:67%;
		padding-left:0.2rem;
		box-sizing:border-box;
		height:0.3rem;
		float: left;
		margin:0.07rem 0.11rem 0 0.14rem;
	}
	.top input::-webkit-input-placeholder{
		color: #ddd;
	}
	.aa{
		position:absolute;
		top:0;
		left:12.5%;
		color: #ddd;
	}
	.ww{
		color:#fff;
		float: left;
		margin-left:0.03rem;
	}
	.top p{
		color: #fff;
		float: left;
		margin: 0;
		margin-left:0.03rem;
	}
</style>