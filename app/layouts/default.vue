<template>
	<v-app>
		<v-main>
			<v-container>
				<ElementsHeader />
				<slot />
				<ElementsFooter />
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
