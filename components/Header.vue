<template>
	<header class="header">
		<div class="header__container-fio-title">
			<h1 class="header__name">{{ personInfo.name }}</h1>
			<h1 class="header__surname">{{ personInfo.surname }}</h1>
			<!-- <h1 class="header__patronymic"></h1> -->
		</div>
		<div class="header__container-specialization">
			<h2 class="header__specialization">{{ personInfo.specialization }}</h2>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		personInfo() {
			const response = this.$store.getters['GET_PERSON_INFO']
			return response
		}
	}
}
</script>

<style scoped>
	.header {
		width: 100%;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 46px;
	}
	.header__container-fio-title {
		font-size: 36px;
		letter-spacing: 0.2em;
		margin-bottom: 0.5em;
		text-transform: uppercase;
	}
	.header__fio {
		line-height: 1.1em;
	}
	.header__name {
		line-height: 1.1em;
	}
	.header__surname {
		line-height: 1.1em;
	}
	.header__patronymic {

	}
	.header__container-specialization {

	}
	.header__specialization {
		font-size: 18px;
		line-height: 1em;
		font-family: 'Roboto Light';
		color: var(--text-gray-color);
	}
</style>
