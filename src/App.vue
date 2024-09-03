<template>
	<section>
		<h1>TODO</h1>
		<div class="container">
			<form
				@submit.prevent="addTask"
				class="inputContainer"
				ref="taskForm"
			>
				<input
					id="taskInput"
					type="text"
					ref="taskInput"
					autofocus
					autocomplete="off"
				/>
				<input id="addTask" type="submit" value="Add task" />
			</form>
			<div class="tasksContainer">
				<task-item
					v-for="task in allTasks"
					:key="task.id"
					:task="task"
				></task-item>
			</div>
		</div>
	</section>
</template>

<script setup>
import TaskItem from "./components/TaskItem.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const taskInput = ref("");
const store = useStore();

// computed

let allTasks = computed(() => {
	return store.getters.getTasks;
});

//methods
function addTask() {
	const task = taskInput.value.value.trim();

	if (!task) {
		alert("Bhadkhav, kuch to likho");
		return false;
	}
	store.dispatch("addTask", { taskName: task });
	taskInput.value.value = "";
	taskInput.value.focus();
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

section {
	width: 50vw;
	height: 100%;
	margin: 0 auto;
	padding: 1em;
	/* text-align: center; */
}

h1 {
	text-align: center;
	margin: 1em;
}

.container {
	max-height: 90vh;
	width: 100%;
	overflow: auto;
}

.inputContainer {
	width: 100%;
	display: flex;
	border-radius: 5em;
	overflow: hidden;
	border: 1px solid black;
}

.inputContainer input {
	border: none;
	outline: none;
	padding: 0.5em;
	font-size: 1em;
}

.inputContainer input#taskInput {
	flex: 4;
}
.inputContainer input#addTask {
	flex: 1;
	cursor: pointer;
}
.inputContainer input#addTask:hover,
.inputContainer input#addTask:focus {
	background: black;
	color: white;
}

.tasksContainer {
	overflow: auto;
	max-height: 500px;
}
</style>
