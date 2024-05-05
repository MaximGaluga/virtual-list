<script setup lang="ts">
import { ref } from 'vue'
import { VirtualList } from '@/widgets/virtual-list'
import type { ComponentConfigType } from '@/widgets/virtual-list'
import { generateIntNumber } from '../lib'
import { IntNumberConfigType } from '../model'

const verticalElementsConfig: IntNumberConfigType = {
	minRange: 100,
	maxRange: 5000
};

const verticalElementsAmount = generateIntNumber(verticalElementsConfig);
const verticalList = ref(Array.from(Array(verticalElementsAmount).keys()));
const verticalListStyle: ComponentConfigType = {
	containerStyles: { height: '600px', width: '900px' },
	itemStyles: { height: '200px' }
};

const horizontalElementsConfig = {
	minRange: 10,
	maxRange: 5000
}

const horizontalElementsAmount = generateIntNumber(horizontalElementsConfig);
const horizontalList = ref(Array.from(Array(horizontalElementsAmount).keys()));
const horizontalListStyle: ComponentConfigType = {
	containerStyles: { height: '100px' },
	wrapperStyles: {
		display: 'flex',
		flexDirection: 'row',
		gap: '10px'
	},
	itemStyles: {
		width: '190px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};
</script>

<template>
	<div class="main-page-wrapper">
		<VirtualList :list="verticalList" :virtualListConfig="{ itemHeight: 200 }" :componentConfig="verticalListStyle">
			<template #default>
				<VirtualList :list="horizontalList" :virtualListConfig="{ itemWidth: 200 }" :componentConfig="horizontalListStyle">
					<template #default>
						<div class="inline-item">
							{{ generateIntNumber() }}
						</div>
					</template>
				</VirtualList>
			</template>
		</VirtualList>
	</div>
</template>

<style scoped lang="scss">
.main-page-wrapper
{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
}

.inline-item
{
	height: 100%;
	width: 100%;
	box-sizing: border-box;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid gray;
	border-radius: 10px;

	transition: .2s;

	&:hover {
		width: 80%;
		height: 80%;
	}
}
</style>
