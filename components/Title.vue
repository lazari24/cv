<template>
	<h3 class="title">{{ title }}</h3>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		}
	}
}
</script>

<style scoped>
	.title {
		margin-bottom: 1.2em;

		position: relative;

		font-size: 28px;

		color: var(--black-color);

		text-transform: uppercase;
	}
	.title::before {
		width: 1.4em;
		height: 3px;

		position: absolute;
		bottom: -0.3em;

		background-color: var(--black-color);

		content: "";
	}

</style>
