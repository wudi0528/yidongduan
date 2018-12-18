<template>
	<div class="di">
		<ul class="ul1">
			<li>
				<i class="iconfont">&#xe64e;</i>
				<a href="#">
					<span>机票</span>
				</a>
			</li>
			<li>
				<i class="iconfont">&#xe652;</i>
				<a href="#">
					<span>酒店</span>
				</a>
			</li>
			<li>
				<i class="iconfont">&#xe63e;</i>
				<a href="#">
					<span>公寓</span>
				</a>
			</li>
			<li class="li1">
				<i class="iconfont">&#xe632;</i>
				<a href="#">
					<span>更多</span>
				</a>
			</li>
		</ul>
		<ul class="ul2">
			<li>
				<a href="#">登录</a>
			</li>
			<li>
				<a href="#">我的订单</a>
			</li>
			<li>
				<a href="#">最近浏览</a>
			</li>
			<li>
				<a href="#">关于我们</a>
			</li>
		</ul>
		<p class="p1"><span>触屏版</span>电脑版</p>
		<p class="p2">Qunar 京ICP备05021087意见反馈</p>
	</div>
</template>
<style scoped>
	ul{overflow:hidden;}
	li{
		list-style:none;
		float:left;
		width:0.75rem;
		color:#9e9e9e;
	}
	.li1{
		border-left:1px solid #acacac;
	}
	.di{
		background-color: #f3f3f3;
		overflow:hidden;
	}
	.ul1{
		font-size:0.14rem;
		text-align:center;
	}
	.ul1 a{
		color:#9e9e9e;		
	}
	.ul2{
		font-size:0.16rem;
		padding:0;
		margin: 0;
		line-height:0.4rem;
		border-bottom:2px solid #ddd;
	}
	.ul2 a{
		text-decoration:none;
		color:#25a4bb;
	}
	.p1{
		font-size:0.18rem;
		color:#25a4bb;
		margin:0;
		line-height:0.4rem;
	}
	.p1 span{
		color:black;
		margin-right:0.5rem;
	}
	.p2{
		margin:0;
		line-height:0.4rem;
		font-size:0.16rem;
	}
</style>