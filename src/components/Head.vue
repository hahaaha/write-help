<template>
	<div class="head">
		<div class="container">
			<div class="text welcome">欢迎使用{{ hello }}</div>
			<div class="text title">{{ title }}</div>
			<div class="text">{{ time }}</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			hello: "文书填写助手",
			title: "案件类型",
			time: "2021"
		}
	}
}
</script>
<style scoped>
.head {
	width: 1920px;
	height: 158px;
	background: url("../assets/head.png");
	background-size: contain;
	position: relative;
	z-index: 1;
}
.container {
	display: flex;
	justify-content: space-around;
}
.text {
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: #ffffff;
	text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
	background: linear-gradient(0deg, #61edfd 0%, #c7f5ff 72.802734375%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.welcome {
	width: 248px;
	height: 24px;
	font-size: 24px;
}
.title {
	width: 247px;
	height: 60px;
	font-size: 60px;
}
.time {
}
</style>