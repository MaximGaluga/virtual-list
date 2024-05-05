<script setup lang="ts">
import { PropType } from 'vue'
import { useVirtualList } from '@vueuse/core'
import type { UseVirtualListOptions } from '@vueuse/core'
import type { ComponentConfigType } from '../model'

const props = defineProps({
	componentConfig: {
		type: Object as PropType<ComponentConfigType>,
		required: false
	},
	virtualListConfig: {
		type: Object as PropType<UseVirtualListOptions>,
		required: true
	},
	list: {
		type: Array as PropType<unknown[]>,
		required: true
	},
});

const { list, containerProps, wrapperProps } = useVirtualList(props.list, props.virtualListConfig);

</script>

<template>
	<div v-bind="containerProps" :style="componentConfig?.containerStyles">
			<div v-bind="wrapperProps" :style="componentConfig?.wrapperStyles">
				<div v-for="item in list" :key="item.index" :style="componentConfig?.itemStyles">
					<slot :virtualListData="item"></slot>
				</div>
			</div>
		</div>
</template>