<template>
	<div class="head">
		<div class="container">
			<div class="text menu">
				<span class="welcome" v-if="type === 0"
					>欢迎使用{{ hello }}
				</span>
				<div class="back" v-if="type > 1" @click="back">
					<img
						src="../assets/back.png"
						width="52"
						height="46"
						alt=""
					/>
					<span>返回</span>
					<span class="line"></span>
				</div>
				<div class="home" v-if="type > 0" @click="jump('/')">
					<img
						src="../assets/home.png"
						width="48"
						height="48"
						alt=""
					/>
					<span>首页</span>
				</div>
			</div>
			<div class="text title">{{ title }}</div>
			<div class="text">{{ time }}</div>
		</div>
	</div>
</template>
<script>
import dayjs from 'dayjs'
export default {
	props: [
		"type"
	],
	data() {
		return {
			hello: "文书填写助手",
			title: "文书填写--基本信息",
			time: "2021",
		}
	},
	created() {
		this.currentTime()
	},
	methods: {
		back() {
			this.$router.go(-1)
		},
		jump(url) {
			this.$router.push(url)
		},
		currentTime() {
			this.time = dayjs().format('YYYY-MM-DD HH:mm')
			setInterval(() => {
				this.time = dayjs().format('YYYY-MM-DD HH:mm')
			}, 500)
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
	align-items: center;
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
	height: 28px;
	font-size: 24px;
	margin-top: 30px;
}
.menu {
	display: flex;
}
.home {
	height: 50px;
	display: flex;
	font-size: 40px;
	margin-top: 20px;
	line-height: 50px;
}
.home > span {
	margin-left: 10px;
}
.back {
	font-size: 40px;
	margin-top: 15px;
	margin-right: 20px;
	display: flex;
}
.back > img {
	margin-top: 3px;
	margin-right: 10px;
}
.back > .line {
	width: 2px;
	height: 55px;
	background: #ffffff;
	opacity: 0.3;
	margin-left: 20px;
}

.title {
	width: 642px;
	height: 70px;
	font-size: 60px;
	margin-top: 15px;
}
.time {
}
</style>