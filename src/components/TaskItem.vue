<template>
	<div class="task" :class="{ completed: task.isCompleted }">
		<div class="taskName">
			<p :class="{ completed: task.isCompleted }">
				{{ task.name }}
			</p>
			<p class="date">{{ taskDateAdded }}</p>
		</div>
		<div class="taskActions">
			<base-button
				@click="completeTask(task.id)"
				buttonType="button"
				buttonVariant="success"
				class="completeTaskButton"
			>
				Complete
			</base-button>
			<base-button
				@click="deleteTask(task.id)"
				buttonType="button"
				buttonVariant="danger"
				class="deleteTaskButton"
			>
				Delete
			</base-button>
		</div>
	</div>
</template>

<script setup>
import { toRef, defineProps, computed } from "vue";
import { useStore } from "vuex";
const props = defineProps(["task"]);
let task = toRef(props, "task");
const store = useStore();

const taskDateAdded = computed(() => {
	return new Date(task.value.dateAdded).toLocaleString();
});

function completeTask(taskId) {
	store.dispatch("completeTask", { taskId: taskId });
	console.log(store.getters.getTasks);
}
function deleteTask(taskId) {
	store.dispatch("deleteTask", { taskId: taskId });
	console.log(store.getters.getTasks);
}
</script>

<style scoped>
.task {
	display: flex;
	padding: 0.5em 0;
}
.task.completed {
	opacity: 0.7;
	background-color: rgb(154, 102, 5);
}
.taskName {
	flex: 3;
	overflow: hidden;
	overflow-wrap: break-word;
}
.taskName p.completed {
	text-decoration: line-through;
}
.taskName p.date {
	font-size: small;
}
.taskActions {
	flex: 1;
}
</style>
