<template>
	<div class="re">
		<div class="xi"></div>
		<div class="top">
			<img src="../assets/0.png" alt="">
			<h3>本周热门榜单</h3>
			<a href="#">
				全部榜单
				<i class="iconfont">&#xe631;</i>
			</a>
		</div>
			<div class="ku">
				<ul>
					<router-link v-for="item in list" :key="item.id" tag="li" :to="/xiang/+item.id">
						<img :src="item.src" alt="">
						<img :src="item.src1" class="img1" v-if="item.re"></img>
						<p>{{item.title}}</p>
						<p><span>￥{{item.qian}}</span>起</p>
					</router-link>
				</ul>
			</div>		
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list:[
					{
						id:0,
						title:"乾陵",
						src:"http://img1.qunarzz.com/sight/p0/1505/2e/2eb25cce70d82954.water.jpg_250x250_4f1ff835.jpg",
						qian:"70",
						src1:"http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
						re:"0"
					},
					{
						id:1,
						title:"汉阳陵博物馆",
						src:"http://img1.qunarzz.com/sight/p0/1505/31/31008ea4c8ebd546.water.jpg_250x250_a2feac59.jpg",
						qian:"50",
						src1:"http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
						re:"0"
					},
					{
						id:2,
						title:"西北农林科技大学博览园",
						src:"http://img1.qunarzz.com/sight/p0/201301/05/129b8cd36466c12e93835fbb.png_250x250_585f0aa8.png",
						qian:"27",
						src1:"http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png",
						re:"0"
					},
					{
						id:3,
						title:"咸阳海泉湾温泉世界",
						src:"http://img1.qunarzz.com/sight/p0/1411/9d/d74294e6031d93218b9ccfa621926d25.water.jpg_250x250_e993bb61.jpg",
						qian:"148"
					},
					{
						id:4,
						title:"张裕瑞那城堡酒庄",
						src:"http://img1.qunarzz.com/sight/p0/1505/b0/b093339694db4a11.water.jpg_250x250_7b1cfb31.jpg",
						qian:"96"
					},
					{
						id:5,
						title:"茂陵博物馆",
						src:"http://img1.qunarzz.com/sight/p0/1411/5a/6dae7329dfb006893719e958f7e274a9.water.jpg_250x250_3e8a810c.jpg",
						qian:"50"
					},
					{
						id:6,
						title:"蓝波湾温泉水世界",
						src:"http://img1.qunarzz.com/sight/p0/1606/d2/d25becf22ed8c26ee2.water.jpg_250x250_05b51a50.jpg",
						qian:"68"
					},
					{
						id:7,
						title:"跃趣蹦床运动工厂",
						src:"http://img1.qunarzz.com/sight/p0/1805/93/93316ef975272467a3.img.png_250x250_c5d950e1.png",
						qian:"89"
					},
					{
						id:8,
						title:"咸阳湖景区",
						src:"http://img1.qunarzz.com/sight/p0/201403/10/896a38118838b3d46a5a355020920a0d.jpg_250x250_6e054fd4.jpg",
						qian:"25"
					},
					{
						id:9,
						title:"华韵温泉",
						src:"http://img1.qunarzz.com/sight/p0/1707/85/8587a901385d27fca3.img.jpg_250x250_263690e2.jpg",
						qian:"29.9"
					},
				]
			}
		}
	}
</script>
<style scoped>
	.ku{
		float: left;
		width:100%;
		height:1.54rem;
		overflow-x: scroll;
	}
	.xi{
		height:0.05rem;
		background-color:#eee;
	}
	.re{
		font-size:0.16rem;
		padding:0.05rem;
		height:2.01rem;
	}
	.top h3{
		font-size: 0.17rem;
		float: left;
		margin: 0;
		font-weight:normal;
	}
	.top a{
		display:block;
		float:right;
		margin-right:0.1rem;
		text-decoration:none;
		color:#616161;
	}
	.top img{
		display:block;
		float: left;
		width:0.15rem;
		height:0.15rem;
		margin-left:0.1rem;
		margin-top:0.05rem;
	}
	.top{
		padding-top:0.1rem;
		box-sizing:border-box;
		margin-bottom:0.4rem;
		height:0.47rem;
	}
	ul{
		padding: 0;
		margin: 0 ;
		width:10.6rem;
		height:1.54rem;
    	white-space: nowrap;
	}
	li{
		list-style:none;
		float: left;
		width: 1rem;
		height:1.54rem;
		margin-left:0.06rem;
		position:relative;
	}
	.ku img{
		width:1rem;
		height: 1rem;
	}
	.ku p{
		margin: 0;
		font-size:0.12rem;
	    color: #212121;
        text-align: center;
		overflow: hidden;
    	width: 100%;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.ku span{
		color: #ff8300;
	}
	.ku .img1{
		position:absolute;
		top:0;
		left:0;
		z-index:100;
		width: 0.42rem;
		height: 0.2rem;
		display:block;
	}
</style>