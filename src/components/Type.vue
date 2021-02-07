<template>
	<div class="type_btn">
		<div @click="change">民事起诉类</div>
		<div>行政类</div>
		<div>刑事类</div>
		<div>执行类</div>
	</div>
	<swiper
		navigation
		slides-per-view="auto"
		:watchSlidesProgress="true"
		:loop="true"
		:loopedSlides="5"
		:centeredSlides="true"
		@slideChange="onSlideChange"
		@progress="onProgress"
	>
		<swiper-slide
			v-for="(v, index) in AllSlide"
			:key="index"
			@click="jump(v.to)"
			><img :src="v.url" class="slide_img" alt=""
		/></swiper-slide>
		<!-- <swiper-slide @click="jump('/temp')"
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide @click="jump('/temp')"
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide @click="jump('/temp')"
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide @click="jump('/temp')"
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide> -->
	</swiper>
</template>
<script>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.min.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
	data() {
		return {
			AllSlide: [{
				url: require('../assets/round.png'),
				to: 'temp'
			}, {
				url: require('../assets/round.png'),
				to: 'temp'
			}, {
				url: require('../assets/round.png'),
				to: 'temp'
			}, {
				url: require('../assets/round.png'),
				to: 'temp'
			}, {
				url: require('../assets/round.png'),
				to: 'temp'
			}]
		}

	},
	created() {
		this.$root.$data.type = 1
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	methods: {
		onSwiper(swiper) {
			console.log(swiper)
		},
		onSlideChange() {
			console.log('slide change')
		},
		onProgress(swiper) {
			const slides = swiper.slides
			console.log(slides.length)
			for (let i = 0; i < slides.length; i++) {
				const slide = slides.eq(i)
				const slideProgress = slides[i].progress
				console.log(slideProgress)
				let modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				const translate = slideProgress * modify * 30 + 'px';
				const scale = 1 - Math.abs(slideProgress) / 5;
				const zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
			// console.log(progress)
			// const slide =progress.slides.eq(0) 
			// slide.transform('scale(0.3)')
			// slide.css('opacity', 0.5)
			// console.log(progress.slides.eq(0).transform('scale(0.5)'))
		},
		jump(url) {
			this.$router.push(url)
		},
		change() {
			this.AllSlide = [{
				url: require('../assets/round.png'),
				to: 'temp'
			}, {
				url: require('../assets/round.png'),
				to: 'temp'
			}]
		}
	},
};
</script>
<style scoped>
.slide_img {
	width: 404px;
	height: 404px;
}
.type_btn {
	display: flex;
	justify-content: space-around;
	position: relative;
	top: 150px;
	color: white;
}
.type_btn > div {
	width: 384px;
	height: 174px;
	background: url("../assets/btn_select.png") no-repeat;
	background-size: contain;
	line-height: 174px;
	text-align: center;
	font-size: 50px;
	font-weight: bold;
}
</style>
<style>
.swiper-container {
	position: relative;
	top: 250px;
	text-align: center;
}
.swiper-slide {
	width: 404px;
	height: 404px;
}
</style>