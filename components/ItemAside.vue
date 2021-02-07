<template>
	<div :class="setClassLastItem()">
		<Title :title="title"/>
		<ul class="item-aside__list">
			<li v-for="(item, index) of listItems" :key="index" class="item-aside__item-list">
				<span :class="['item-aside__name-item', {'item-aside__name-item--percentage': type === 'percentage'}]">{{ item.name }}</span>
				<span v-if="type === 'text'" class="item-aside__value-item">{{ item.value }}</span>
				<Progress v-else :percentage="item.value"/>
			</li>
		</ul>
	</div>
</template>

<script>
import Title from '../components/Title'
import Progress from '../components/Progress'
export default {
	components: {
		Title,
		Progress,
	},
	props: {
		lastFlag: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		listItems: {
			type: Array,
			required: true,
		},
	},
	computed: {
		setClassLastItem() {
			return () => {
				return {
					'item-aside': this.lastFlag === false,
					'item-aside item-aside--last': this.lastFlag === true,
				}
			}
		},
	}
}
</script>

<style scoped>
	.item-aside {
		margin-bottom: 36px;
	}

	.item-aside--last {
		margin-bottom: 0;
	}
	.item-aside__list {
		list-style-type: none;
	}
	.item-aside__item-list {
		display: flex;

		flex-direction: column;

		margin-bottom: 1em;
	}
	.item-aside__name-item {
		margin-bottom: 0.5em;

		font-size: 16px;
		font-weight: 600;

		text-transform: uppercase;
	}
	.item-aside__name-item--percentage {
		font-family: "Roboto Light";
		font-weight: 400;

		text-transform: none;
	}
	.item-aside__value-item {
		font-family: "Roboto Light";

		color: var(--text-gray-color);
	}

</style>
