<template>
	<div class="type_btn">
		<div>民事起诉类</div>
		<div>行政类</div>
		<div>刑事类</div>
		<div>执行类</div>
	</div>
	<swiper
		:slides-per-view="3"
		:space-between="50"
		navigation
		@swiper="onSwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide @click="jump('/temp')"
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
		<swiper-slide
			><img src="../assets/round.png" class="slide_img" alt=""
		/></swiper-slide>
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
		jump(url) {
			this.$router.push(url)
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
}
</style>