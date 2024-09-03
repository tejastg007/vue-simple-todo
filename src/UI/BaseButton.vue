<template>
	<button :type="buttonType" :class="buttonVariant"><slot> </slot></button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["buttonVariant", "buttonType"]);
</script>

<style scoped>
button {
	color: white;
	cursor: pointer;
	border: none;
	border-radius: 2em;
	padding: 0.5em 1em;
	outline: none;
}
button:hover {
	opacity: 0.9;
}
button.success {
	background-color: rgb(58, 145, 58);
}
button.danger {
	background-color: rgb(253, 91, 91);
}
button.warning {
	background-color: rgb(247, 171, 49);
}
</style>
