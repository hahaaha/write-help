<template>
	<div class="write">
		<div class="write_container"></div>
		<div class="step">
			<el-steps :active="active" finish-status="success" align-center>
				<el-step title="基本信息"> </el-step>
				<el-step title="诉讼请求"></el-step>
				<el-step title="事实理由"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<div class="form" v-if="active < 3">
				<el-form
					ref="form"
					:model="form"
					label-width="80px"
					v-if="active === 0"
				>
					<el-form-item label="活动区域">
						<el-select
							v-model="form.region"
							placeholder="请选择活动区域"
						>
							<el-option
								label="区域一"
								value="shanghai"
							></el-option>
							<el-option
								label="区域二"
								value="beijing"
							></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="姓名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="性别">
						<el-select
							v-model="form.region"
							placeholder="请选择性别"
						>
							<el-option label="男" value="man"></el-option>
							<el-option label="女" value="woman"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="民族">
						<el-select
							v-model="form.region"
							placeholder="请选择性别"
						>
							<el-option label="男" value="man"></el-option>
							<el-option label="女" value="woman"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="特殊资源">
						<el-radio-group v-model="form.resource">
							<el-radio label="线上品牌商赞助"></el-radio>
							<el-radio label="线下场地免费"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="活动形式">
						<el-input
							type="textarea"
							v-model="form.desc"
						></el-input>
					</el-form-item>
				</el-form>
				<el-checkbox-group
					v-model="checkedCities"
					:min="1"
					:max="2"
					v-if="active === 1"
				>
					<el-checkbox
						v-for="city in cities"
						:label="city"
						:key="city"
						>{{ city }}</el-checkbox
					>
				</el-checkbox-group>

				<el-checkbox-group v-model="checkedCities" v-if="active === 2">
					<el-checkbox
						v-for="city in cities"
						:label="city"
						:key="city"
						>{{ city }}</el-checkbox
					>
				</el-checkbox-group>
			</div>
			<div class="finish" v-if="active === 3">
				<img
					src="../assets/finish.png"
					alt=""
					width="317"
					height="278"
				/>
			</div>
			<div class="form_btn">
				<el-button type="primary" @click="next" v-if="active < 3"
					>下一步</el-button
				>
				<el-button type="primary" @click="next" v-if="active === 3"
					>完成</el-button
				>
			</div>
			<div class="function" v-if="active === 4">
				<div class="qr">
					<img
						src="../assets/qr.png"
						width="264"
						height="260"
						alt=""
					/>
					<p>test</p>
				</div>
				<div class="print">
					<img
						src="../assets/print.png"
						width="147"
						height="131"
						alt=""
					/>
					<el-button type="primary">马上打印</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
const cityOptions = ['婚前双方缺乏了解', '相处生疏', '广州', '深圳']
export default {
	data() {
		return {
			active: 0,
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			checkedCities: ['上海', '北京'],
			cities: cityOptions
		}
	},
	created() {
		this.$root.$data.type = 2
		console.log(this.$root.$data)
	},
	methods: {
		next() {
			if (this.active++ > 3) this.active = 0;
		}
	}
}
</script>
<style scoped>
.write {
	display: flex;
	position: relative;
	top: 100px;
	justify-content: space-around;
}
.write > .write_container {
	width: 954px;
	height: 763px;
	background-color: #fff;
}
.write > .step {
	width: 661px;
	height: 763px;
}
.write > .step > .form {
	background-color: #fff;
	width: 661px;
	height: 522px;
	overflow: auto;
}
.write > .step > .form_btn {
	text-align: center;
	margin-top: 30px;
}
.el-button--primary {
	background-color: #fb9e20;
	border-color: #fb9e20;
	width: 307px;
	height: 90px;
	font-size: 36px;
}
:deep() .el-step__title.is-process {
	color: #f29b26;
}
.finish {
	width: 661px;
	height: 422px;
	text-align: center;
}
.finish > img {
	margin-top: 100px;
}
.function {
	display: flex;
	justify-content: space-between;
}
.function .qr {
	width: 319px;
	height: 398px;
	background: #ffffff;
	box-shadow: 0px 6px 16px 0px rgba(3, 27, 48, 0.18);
	border-radius: 10px;
	text-align: center;
}
.function .qr img {
	margin-top: 50px;
}
.function .print {
	width: 319px;
	height: 398px;
	background: #ffffff;
	box-shadow: 0px 6px 16px 0px rgba(3, 27, 48, 0.18);
	border-radius: 10px;
	text-align: center;
}
.function .print img {
	margin-top: 80px;
	margin-bottom: 30px;
}
.el-checkbox {
	display: block;
	margin: 10px 0;
	padding-bottom: 10px;
	border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
}
:deep() .el-checkbox__inner {
	width: 20px;
	height: 20px;
}
:deep() .el-checkbox__input.is-checked .el-checkbox__inner::after {
	transform: rotate(45deg) scale(1.8);
	top: 2px;
	left: 7px;
}
.form {
	padding: 10px;
	box-sizing: border-box;
}
</style>