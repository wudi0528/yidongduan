<template>
	<div class="cai">
		<div class="top">
			<img src="../assets/6.png" alt="">
			<h3>猜你喜欢</h3>
		</div>
		<div>
			<ul>
				<router-link v-for="item of list" :key="item.id" tag="li" :to="/xiang/+item.id">
					<div class="kuu">
						<p class="zuo">
							<img :src="item.src" alt="">
							<img class="imm" :src="item.src2" alt="" v-if="item.aa">
							<span>{{item.src1}}</span>
						</p>
						<div class="you">
							<h2>{{item.name}}</h2>
							<span><i>★★★★★</i>{{item.ping}}</span>
							<p><em>{{item.qian}}</em>起<i>{{item.dizhi}}</i></p>
						</div>
					</div>
					<div class="xia">{{item.title}}</div>
				</router-link>
			</ul>
			<a class="zi" href="#">查看所有产品</a>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list:[
					{
						id:10,
						name:"张裕瑞那城堡酒庄",
						ping:"1898条评论",
						qian:"￥96",
						dizhi:"渭城区",
						src1:"可订明日",
						src:"http://img1.qunarzz.com/sight/p0/1505/b0/b093339694db4a11.water.jpg_200x200_10f65a8e.jpg",
						src2:"https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png",
						aa:"q"
					},
					{
						id:11,
						name:"乾陵",
						ping:"3515条评论",
						qian:"￥70",
						dizhi:"乾县",
						src1:"可订明日",
						src:"http://img1.qunarzz.com/sight/p0/1505/2e/2eb25cce70d82954.water.jpg_200x200_dd8cb4f2.jpg",
						src2:"https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png",
						aa:"q"
					},
					{
						id:12,
						name:"咸阳海泉湾温泉世界",
						ping:"813条评论",
						qian:"￥148",
						dizhi:"秦都区",
						title:"这里最近很火哦，好多人都在点评它呢！",
						src:"http://img1.qunarzz.com/sight/p0/1411/9d/d74294e6031d93218b9ccfa621926d25.water.jpg_200x200_bb991fa2.jpg"
					},
					{
						id:13,
						name:"茂陵博物馆",
						ping:"576条评论",
						qian:"￥50",
						dizhi:"兴平市",
						src1:"随买随用",
						src:"http://img1.qunarzz.com/sight/p0/1411/5a/6dae7329dfb006893719e958f7e274a9.water.jpg_200x200_2e291876.jpg",
						src2:"https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",
						aa:"q"
					},
					{
						id:14,
						name:"汉阳陵博物馆",
						ping:"1521条评论",
						qian:"￥50",
						dizhi:"秦都区",
						src1:"随买随用",
						title:"帅的人都去过了😎，你还等什么~",
						src:"http://img1.qunarzz.com/sight/p0/1505/31/31008ea4c8ebd546.water.jpg_200x200_68c67c0b.jpg",
						src2:"https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",
						aa:"q"
					},
					{
						id:15,
						name:"侍郎胡",
						ping:"64条评论",
						qian:"￥19.9",
						dizhi:"彬县",
						title:"一泓碧水，四面青山，环境优雅，风光迷人",
						src:"http://img1.qunarzz.com/sight/p0/1710/3b/3bd09821901efad5a3.img.jpg_200x200_1c934f6f.jpg"
					},
					{
						id:16,
						name:"郑国渠",
						ping:"33条评论",
						qian:"￥45",
						dizhi:"泾阳县",
						src:"http://img1.qunarzz.com/sight/p0/201304/09/3005b70fe5a65773c8d65eac.jpg_200x200_837f52ee.jpg"
					},
					{
						id:17,
						name:"咸阳湖景区",
						ping:"115条评论",
						qian:"￥25",
						dizhi:"秦都区",
						title:"水上娱乐，应有尽有，休闲放松的绝佳去处",
						src:"http://img1.qunarzz.com/sight/p0/201403/10/896a38118838b3d46a5a355020920a0d.jpg_200x200_dc0a367e.jpg"
					},
					{
						id:18,
						name:"袁家村.关中大观园",
						ping:"36条评论",
						qian:"￥20",
						dizhi:"礼泉县",
						src1:"随买随用",
						src:"http://img1.qunarzz.com/sight/p0/1806/39/399ac563bb1f68d7a3.img.jpg_200x200_1b0e36ec.jpg",
						src2:"https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",
						aa:"q"
					},
					{
						id:19,
						name:"姜嫄水乡",
						ping:"2条评论",
						qian:"￥8",
						dizhi:"咸阳",
						src:"http://img1.qunarzz.com/sight/p0/1807/46/469bff659a3f82cea3.img.jpg_200x200_54795169.jpg"
					},
					{
						id:20,
						name:"蓝波湾温泉水世界",
						ping:"128条评论",
						qian:"￥68",
						dizhi:"咸阳",
						src:"http://img1.qunarzz.com/sight/p0/1606/d2/d25becf22ed8c26ee2.water.jpg_200x200_b726528e.jpg"
					},
					{
						id:21,
						name:"跃趣蹦床运动工厂",
						ping:"53条评论",
						qian:"￥89",
						dizhi:"秦都区",
						title:"这里特别受欢迎哟(๑‾ ꇴ ‾๑)",
						src:"http://img1.qunarzz.com/sight/p0/1805/93/93316ef975272467a3.img.png_200x200_ae038519.png"
					},
					{
						id:22,
						name:"安五堡",
						ping:"1条评论",
						qian:"￥98",
						dizhi:"泾阳县",
						src:"http://img1.qunarzz.com/sight/p0/1802/f8/f8e6406d05c03e08a3.water.jpg_200x200_aeb8ae49.jpg"
					},
					{
						id:23,
						name:"乐华城.乐华欢乐世界",
						ping:"6249条评论",
						qian:"￥200",
						dizhi:"泾阳县",
						src:"http://img1.qunarzz.com/sight/p0/1703/57/5794796148ac680da3.img.png_200x200_0cf91d82.png"
					},
					{
						id:24,
						name:"西北农林科技大学博览园",
						ping:"323条评论",
						qian:"￥27",
						dizhi:"杨凌区",
						title:"近期小伙伴们收藏最！多！的景点😊",
						src1:"可订明日",
						src:"http://img1.qunarzz.com/sight/p0/201301/05/129b8cd36466c12e93835fbb.png_200x200_6f200759.png",
						src2:"https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png",
						aa:"q"
					},
					{
						id:25,
						name:"邵陵博物馆",
						ping:"91条评论",
						qian:"￥25",
						dizhi:"礼泉县",
						title:"面积和陪葬墓之是历代帝王陵墓之首",
						src:"http://img1.qunarzz.com/sight/p0/201403/07/37d460397e3639447bcec4b747789763.jpg_200x200_4da983ee.jpg"
					},
					{
						id:26,
						name:"宏兴滑草滑雪体验基地",
						ping:"",
						qian:"￥26",
						dizhi:"兴平市",
						src:"http://img1.qunarzz.com/sight/p0/1703/13/13f5ef4857706273a3.water.jpg_200x200_50ba2a87.jpg"
					},
					{
						id:27,
						name:"唐邵陵",
						ping:"86条评论",
						qian:"￥25",
						dizhi:"礼泉县",
						title:"古代帝王依山陵，唐代开放的缩影",
						src:"http://img1.qunarzz.com/sight/p0/1611/21/218bed923f3eda3ba3.water.jpg_200x200_a515d336.jpg"
					},
					{
						id:28,
						name:"华韵温泉",
						ping:"6条评论",
						qian:"￥29.9",
						dizhi:"兴平市",
						src:"http://img1.qunarzz.com/sight/p0/1707/85/8587a901385d27fca3.img.jpg_200x200_f7089b4f.jpg"
					},
				]
			}
		}
	}
</script>
<style scoped>
	a{
		text-decoration:none;
	}
	.zi{
		color:#00afc7;
		font-size:0.16rem;
		box-sizing:border-box;
		width:100%;
		line-height:0.5rem;
		height:0.5rem;
		margin:0;
		display:block;
	}
	.top img{
		display:block;
		float: left;
		width:0.15rem;
		height:0.15rem;
		margin-left:0.15rem;
		margin-top:0.15rem;
	}
	.xia{
		font-size:0.14rem;
		width: 100%;
		text-align:center;
		color: #f55;
		margin-top:0.1rem;
	}
	.top{
		padding-top:0.1rem;
		box-sizing:border-box;
		margin-bottom:0.4rem;
		line-height:0.47rem;
	}
	.top h3{
		font-size: 0.17rem;
		float: left;
		margin: 0;
		font-weight:normal;
	}
	li{
		width:100%;
		float: left;
		padding:0.1rem 0;
		list-style:none;
		text-align:left;
		border-bottom:1px solid #eee;
	}
	ul{
		margin: 0;
		height:26.8rem;
		padding:0 0.05rem;
	}
	li p{
		margin:0;
	}
	li h2{
		font-weight:normal;
		font-size:0.17rem;
		margin:0;
		margin:0.05rem 0;
	}
	.kuu{
		height:1rem;
	}
	.zuo{
		width: 1rem;
		float: left;
		position:relative;
	}
	.zuo .imm{
		position:absolute;
		top:0;
		left:0;
		width:0.51rem;
		height:0.19rem;
		display:block;
	}
	span i{
		font-style:normal;
		margin-right:0.05rem;
		color:#ffb436;
	}
	.zuo span{
		font-size:0.12rem;
		color:#fff;
		position:absolute;
		top:0;
		left:0;
	}
	.you{
		float:left;
		width:2.4rem;
		margin-left:0.1rem;
	}
	.zuo img{
		width:1rem;
		height:1rem;
		display:block;
		float:left;
	}
	.you span{
		font-size:0.14rem;
		display:block;
		margin:0.04rem;
	}
	.you p{
		margin:0;
		font-size:0.12rem;
	}
	.you p em{
		font-style:normal;
		font-size:0.17rem;
		color:#ff8300;
	}
	.you p i{
		font-style:normal;
		float:right;
		margin-right:0.1rem;
		margin-top:0.05rem;
	}
</style>