<template>
	<div class="temp">
		<div class="temp_group">
			<div class="temp_btn">
				<img src="../assets/word.png" alt="" />婚前协议书
			</div>
			<div class="temp_btn">
				<img src="../assets/word.png" alt="" />婚前协议书
			</div>
			<div class="temp_btn">
				<img src="../assets/word.png" alt="" />婚前协议书
			</div>
			<div class="temp_btn">
				<img src="../assets/word.png" alt="" />婚前协议书
			</div>
		</div>
		<div class="temp_container">
			<div class="temp_content"></div>
			<div class="temp_content_btn">
				<div class="form_btn">
					<el-button type="primary" class="back">返回</el-button>
					<el-button
						type="primary"
						class="submit"
						@click="jump('/write')"
						>开始填写</el-button
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created() {
		this.$root.$data.type = 2
		console.log(this.$root.$data)
	},
	methods: {
		jump(url) {
			this.$router.push(url)
		}
	}
}
</script>
<style scoped>
.temp {
	position: relative;
	top: 130px;
	display: flex;
	justify-content: space-around;
}
.temp_btn {
	width: 445px;
	height: 113px;
	background: #368bfb;
	box-shadow: 0px 5px 10px 0px rgba(14, 47, 91, 0.4);
	border-radius: 10px;
	margin-bottom: 21px;
	line-height: 113px;
	display: flex;
	justify-content: space-around;
	font-size: 45px;
	color: #fff;
}
.temp_btn > img {
	width: 64px;
	height: 64px;
	margin-top: 30px;
}
.temp_container {
	width: 1100px;
}
.temp_container .temp_content {
	width: 1100px;
	height: 647px;
	background: #fff;
	margin-bottom: 14px;
}
.form_btn {
	width: 1100px;
	text-align: center;
}
.back {
	width: 307px;
	height: 90px;
	font-size: 38px;
}
.submit {
	width: 307px;
	height: 90px;
	font-size: 38px;
	background-color: #fb9e20;
	border-color: #fb9e20;
}
</style>