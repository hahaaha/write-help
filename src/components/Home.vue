<template>
	<div class="home">
		<!-- <div class="block" @click="jump('/type')"></div>
		<div class="block"></div> -->
	</div>
</template>
<script>
import axios from 'axios'
export default {
	created() {
		this.$root.$data.type = 0
		axios.get('/api/ffapi/caseTypes')
			.then(function (response) {
				console.log(response);
			})
	},
	methods: {
		jump(url) {
			this.$router.push(url)
		}
	}
}
</script>
<style scoped>
.home {
	margin: 0 auto;
	width: 1208px;
	height: 426px;
	display: flex;
	position: relative;
	top: 280px;
}
.block {
	width: 604px;
	height: 426px;
	background: url("../assets/write.png");
	background-size: contain;
}
</style>