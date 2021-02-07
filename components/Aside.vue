<template>
	<aside class="aside">
		<ItemAside v-for="(skill, index) of skills"
		:key="index"
		:lastFlag="index == skills.length-1"
		:type="skill.type"
		:title="skill.title"
		:listItems="skill.items"/>
	</aside>
</template>

<script>
import ItemAside from '../components/ItemAside'
export default {
	components: {
		ItemAside,
	},
	computed: {
		skills() {
			const result = this.$store.getters['GET_SKILLS']
			return result
		}
	}
}
</script>

<style scoped>
	.aside {
		width: 25%;
		height: 100%;
		padding-top: 46px;
		padding-right: 46px;

		border-right: 1px solid var(--border-color);
	}

</style>
