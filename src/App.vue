<template>
	<Head :type="type" />
	<Edit @jump="jump" />
	<Footer />
</template>

<script>
import Head from './components/Head.vue'
import Edit from './components/Edit.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	data() {
		return {
			type: 0
		}
	},
	methods: {
		jump(url) {
			this.$router.push(url)
		}
	},
	components: {
		Head,
		Edit,
		Footer
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 1920px;
	height: 1079px;
	overflow: hidden;
}
</style>
