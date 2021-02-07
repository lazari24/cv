<template>
	<li :class="setClassLastItem">
		<div class="block-content__container-subtitle">
			<Subtitle :subtitle="title"/>
			<span class="block-content__location">{{ location }}</span>
		</div>
		<DateInterval :dateStart="dateStart" :dateEnd="dateEnd"/>
		<TextParagraph :text="text"/>
	</li>
</template>

<script>
import Subtitle from '../components/Subtitle'
import DateInterval from '../components/DateInterval'
import TextParagraph from '../components/TextParagraph'
export default {
	components: {
		Subtitle,
		DateInterval,
		TextParagraph,
	},
	props: {
		lastFlag: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
		},
		location: {
			type: String,
		},
		dateStart: {
			type: String,
		},
		dateEnd: {
			type: String,
		},
		text: {
			type: String,
		},
	},
	computed: {
		setClassLastItem() {
			return {
				'block-content__item': this.lastFlag === false,
				'block-content__item block-content__item--last': this.lastFlag === true,
			}
		},
	}
}
</script>

<style scoped>
	.block-content__item {
		margin-bottom: 1.2em;

		font-size: 28px;
	}
	.block-content__item--last {
		margin-bottom: 0;
	}
	.block-content__container-subtitle {
		display: flex;
	}
	.block-content__location {
		margin-left: 10%;
		display: block;

		margin-bottom: 1.4em;

		font-family: "Roboto Light";
		font-size: 14px;
		font-weight: 600;

		color: var(--black-color);
	}

</style>
