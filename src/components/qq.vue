<template>
	<div class="div">
		<topp></topp>
		<template>
		  <swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="item of imglist" :key="item.src">
		    	<img :src="item.src" alt="">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
		</template>
		<shen></shen>
        <ding></ding>
        <xian></xian>
        <re></re>
        <cai></cai>
        <zhou></zhou>
	</div>
</template>
<style scoped>
	*{margin:0;padding:0;}
	html,body{
		height:100%;
		min-width:3.6rem;
	}
	.swiper-container{
		width: 100%;
	}
	img{
		width: 100%;
        display:block;
	}
</style>
<script>
	import topp from './top.vue'
	import shen from './shen.vue'
    import ding from './ding.vue'
    import xian from './xian.vue'
    import re from './re.vue'
    import cai from './cai.vue'
    import zhou from './zhou.vue'
    import dibu from './dibu.vue'  
    import axios from "axios"
	 export default {
    name: 'carrousel',
    data() {
      return {
        imglist:[
        {
        	src:require("@/assets/1.jpg")
        },
        {
        	src:require("@/assets/2.jpg")
        },
        {
        	src:require("@/assets/3.jpg")
        },
        {
        	src:require("@/assets/4.jpg")
        },
        {
        	src:require("@/assets/5.jpg")
        },
        {
            src:require("@/assets/6.jpg")
        },
        {
            src:require("@/assets/7.jpg")
        },
        {
            src:require("@/assets/8.jpg")
        },
        {
            src:require("@/assets/9.jpg")
        },
        ],
        swiperOption:{
        	loop:true,
        	 pagination: {
		        el: '.swiper-pagination',
		    },
            autoplay:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components:{
    	topp,
    	shen,
        ding,
        xian,
        re,
        cai,
        zhou,
        dibu
    },
    mounted() {
      this.swiper.slideTo(1, 1000, false);
      axios.get("http://wudidi.ink/static/qunar.json").then((response)=>{
        this.list = response.data;
      })
    }
  }
</script>