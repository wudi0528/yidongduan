<template>
	<div class="xiang">
		<div class="tou">
			<img :src="product1.bigImg" alt="">
			<p>{{product1.name}}</p>
		</div>
		<div class="fen">
			<div class="zuo">
				<p class="p1">
					<span class="span1">{{product1.score}}</span>
					<span class="span2">分&nbsp;{{product1.scorename}}</span>
				</p>
				<p class="p2"><span>{{product1.commitCount}}条评论&nbsp;&nbsp;</span><span v-if="product1.strategy">{{product1.strategy}}条攻略</span></p>
				<i class="iconfont">&#xe631;</i>
			</div>
			<div class="you">
				<h2>景点简介</h2>
				<p>开放时间丶贴士</p>
				<i class="iconfont">&#xe631;</i>
			</div>
		</div>
		<div>
		<div class="xia"><i class="iconfont i1">&#xe660;</i>{{product1.address}}<i class="iconfont i2">&#xe631;</i></div>
		<div class="xian"></div>
		<!-- <div class="qu" v-if="product1.product.recommend">
			<p class="p1">去哪儿推荐</p>
		</div>
		<div class="tui" v-for="item of product1.product.recommend">
			<div class="zuo1">
				<p>{{item.name1}}</p>
				<span>{{item.remark1}}</span>
				<span class="span1">{{item.label1}}</span>
			</div>
			<div class="you1">
				<p>{{item.price1}}</p>
			</div>
		</div>
		<div></div>
		<div></div> -->
		<div class="men">
			<p>门票</p>
			<p class="p1">{{product1.product.name1}}</p>
			<p v-for="list of product1.product.sale" class="p2">
				<span class="span3">{{list.name}}</span>
				<i class="iconfont">&#xe632;</i><span class="span2">起</span><span class="span1">￥{{list.price}}</span>
			</p>
		</div>
		<div class="jing">
			<p class="p1">{{product1.product.name2}}</p>
			<p v-for="list of product1.product.ticket" class="p2">
				<span class="span3">{{list.name}}</span>
				<i class="iconfont">&#xe632;</i><span class="span2">起</span><span class="span1">￥{{list.price}}</span>
			</p>
		</div>
		<div class="yiri">
			<p class="p1">{{product1.product.name3}}</p>
			<p v-for="list of product1.product.ticketPackage" class="p2">
				<span class="span3">{{list.name}}</span>
				<i class="iconfont">&#xe632;</i><span class="span2">起</span><span class="span1">￥{{list.price}}</span>
			</p>
		</div>
		<p class="pp">查看剩余产品<i class="iconfont">&#xe632;</i></p>
		</div>
		<div class="ping" v-for="list of product1.comment">
			<p class="p1"><span></span>用户评论</p>
			<div class="shang">
				<span class="span1">★★★★★</span>
				<span class="span3">{{list.time}}</span>
				<span class="span2">{{list.username}}</span>
			</div>
			<p class="pin">{{list.text}}</p>
			<ul>
				<li v-for="list1 of list.imgList">
					<img :src="list1" alt="">
				</li>
			</ul>
		</div>
		<p class="luen">查看全部评论<i class="iconfont">&#xe631;</i></p>
	</div>
</template>
<script>
	import axios from "axios"; 
	export default{
		data(){
			return{
				product1:{
					id:"",
					name:"",
					address:"",
					score:"",
					scorename:"",
					strategy:"",
					commitCount:"",
					bigImg:"",
					miniImg:"",
					product:{
						recommend:null
					}
				}				
			}
		},
		mounted(){
			axios.get("http:/wudidi.ink/static/qunar.json").then((response)=>{
        		this.product1 = response.data[this.$route.params.id];
			})
		}
	}
</script>
<style scoped>
	.luen{
		font-size:0.2rem;
		line-height:0.5rem;
		border-top:1px dashed  #dedede;
		padding-left:0.1rem;
	}
	ul{padding:0;margin:0;margin-bottom:0.2rem;overflow:hidden;}
	li{
		list-style:none;
		height:0.85rem;
		float: left;
		margin-top:0.1rem;
	}
	ul img{
		display:block;
		float:left;
		width:1.1rem;
		height:0.85rem;
		margin-top:0.1rem;
		margin-left:0.08rem;
	}
	.pin{
		font-size:0.16rem;
		text-align:left;
		padding:0.08rem;
		height:1.05rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
	}
	.shang{
		height:0.3rem;
		line-height:0.3rem;
		font-size:0.16rem;
	}
	.shang .span1{
		color:#ffb436;
		display:block;
		float:left;
		margin-left:0.1rem;
	}
	.shang .span2{
		float:right;
		margin-right:0.1rem;
	}
	.shang .span3{
		float:right;
		margin-right:0.1rem;
	}
	.ping .p1{
		font-size:0.2rem;
		text-align:left;
		line-height:0.5rem;
		border-bottom:1px solid #dedede;
		padding-left:0.1rem;
	}
	.ping .p1 span{
		width:0.03rem;
		height:0.2rem;
		display:block;
		float: left;
		margin-top:0.15rem;
		background-color:#00afc7;
	}
	.men .p1,.jing .p1,.yiri .p1{
		background-image: url(../assets/huo.png);
		background-repeat: no-repeat;
		background-size: 0.25rem 0.25rem;
		padding-left:0.4rem;
		background-position: 0 center;
	}
	.pp{
		font-size:0.18rem;
		line-height:0.5rem;
	}
	.yiri p{
		font-size:0.2rem;
		border-bottom:1px solid #f2f2f2;
		line-height:0.5rem;
	}
	.yiri i{
		display:block;
		float:right;
		font-size:0.12rem;
		margin-top:0.032rem;
	}
	.yiri .p1{
		font-size:0.2rem;
		text-align:left;
		margin-left:0.1rem;
	}
	.yiri .span3{
		font-size:0.16rem;
		display:block;
		float:left;
		width:75%;
		height:0.5rem;
		overflow:hidden;
	}
	.yiri span{
		text-align:left;
	}
	.yiri .span1{
		font-size:0.16rem;
		float:right;
		display:block;
		color:#ff9800;
	}
	.yiri .p2{
		height:0.5rem;
	}
	.yiri .span2{
		font-size:0.1rem;
		display:block;
		float:right;
		font-size:0.12rem;
	}
	.jing .p2 .span3{
		font-size:0.16rem;
		display:block;
		float:left;
		text-align:left;
	}
	.jing .p2{
		height:0.5rem;
	}
	.jing p{
		font-size:0.2rem;
		border-bottom:1px solid #f2f2f2;
		line-height:0.5rem;
	}
	.jing .p1{
		text-align:left;
		margin-left:0.1rem;
		font-size:0.2rem;
	}
	.jing .span2{
		display:block;
		float:right;
		margin-top:0.03rem;
		font-size:0.12rem;
	}
	.jing .span1{
		color:#ff9800;
		display:block;
		float:right;
		font-size:0.16rem;
	}
	.jing i{
		color:#d2d2d2;
		font-size:0.12rem;
		display:block;
		float:right;
		margin-top:0.02rem;
		margin-right:0.2rem;
	}
	.men i{
		color:#d2d2d2;
		font-size:0.12rem;
		display:block;
		float:right;
		margin-top:0.02rem;
		margin-right:0.2rem;
	}
	.men p{
		font-size:0.2rem;
		border-bottom:1px solid #f2f2f2;
		line-height:0.5rem;
	}
	.men .span3{
		font-size:0.14rem;
	}
	.men .span2{
		display:block;
		float:right;
		margin-top:0.03rem;
		font-size:0.12rem;
	}
	.men .span1{
		color:#ff9800;
		display:block;
		float:right;
		font-size:0.16rem;
	}
	.men .p2{
		margin-left:0.05rem;
		text-align:left;
	}
	.men .p1{
		text-align:left;
		margin-left:0.1rem;
	}
	.tui .zuo1 .span1{
		color:#00afc7;
	}
	.tui .zuo1 span{
		font-size:0.12rem;
		display:block;
	}
	.tui .zuo1{
		width:70%;
		text-align:left;
	}
	.tui .you1{
		width:29%;
	}
	.tui p{
		font-size:0.16rem;
	}
	p{
		margin:0;
	}
	.tou img{
		width:100%;
		display:block;
	}
	.tou{
		position:relative;
	}
	.tou p{
		font-size:0.2rem;
		position:absolute;
		bottom:0.1rem;
		left:0.1rem;
		color:#fff;
	}
	.fen{
		padding:0.05rem;
		height:0.6rem;
	}
	.zuo .p1{
		height:0.25rem; 
		color:#ff8300;
		float:left;
		width:100%;
	}
	.zuo .p1 .span1{
		font-size:0.22rem;	
		display:block;
		float: left;	
	}
	.zuo .p1 .span2{
		font-size:0.16rem;
		display:block;
		float:left;
		margin-top:0.08rem;
	}
	.zuo .p2{
		font-size:0.14rem;
		float:left;
		margin-top:0.08rem;
		color:#999;
	}
	.zuo .p2 span{
		display:block;
		float:left;
	}
	.zuo i{
		color:#ddd;
		position:absolute;
		top:50%;
		right:0.1rem;
		transform:translate(0,-50%);
	}
	.zuo{
		width:49%;
		box-sizing:border-box;
		border-right:1px solid #eee;
		position:relative;
		float:left;
	}
	.you{
		width:49%;
		float:left;
		position:relative;
	}
	.you h2{
		font-size:0.17rem;
		margin:0;
		font-weight:normal;
		text-align:left;
		margin-left:0.05rem;
	}
	.you p{
		font-size:0.16rem;
		text-align:left;
		margin-left:0.05rem;
		color:#999;
		margin-top:0.1rem;
	}
	.you i{
		color:#ddd;
		position:absolute;
		top:50%;
		right:0;
		transform:translate(0,-50%);
	}
	.xia{
		border-top:1px solid #eee;
		line-height:0.38rem;
		font-size:0.16rem;
		text-align:left;
	}
	.xia .i1{
		margin-left:0.08rem;
		margin-right:0.1rem;
	}
	.xia .i2{
		float:right;
		margin-right:0.1rem;
	}
	.xian{
		height:0.1rem;
		background-color:#f3f3f3;
	}
	.qu .p1{
		font-size:0.2rem;
		background-image: url(../assets/huo.png);
		background-repeat: no-repeat;
		background-size: 0.25rem 0.25rem;
		text-align:left;
		padding-left:0.4rem;
		background-position: 0 center;
		line-height:0.4rem;
	}
	.qu{
		margin-left:0.08rem;
		border-bottom:1px solid #f3f3f3;
	}

</style>