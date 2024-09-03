import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			tasks: [], //keys: id, name, dateAdded, isCompleted
		};
	},
	mutations: {
		setTask(state, payload) {
			state.tasks.push(payload);
		},
		setTaskComplete(state, payload) {
			const task = state.tasks.find((task) => task.id === payload.taskId);
			if (task) {
				task.isCompleted = !task.isCompleted;
			}
		},

		deleteTask(state, payload) {
			const taskIndex = state.tasks.findIndex(
				(task) => task.id === payload.taskId
			);
			state.tasks.splice(taskIndex, 1);
		},
	},
	actions: {
		addTask(context, payload) {
			context.commit("setTask", {
				id: new Date().getTime(),
				name: payload.taskName,
				dateAdded: Date.now(),
				isCompleted: false,
			});
		},
		completeTask(context, payload) {
			context.commit("setTaskComplete", payload);
		},
		deleteTask(context, payload) {
			context.commit("deleteTask", payload);
		},
	},
	getters: {
		getTasks(state) {
			return state.tasks.sort((prev, after) => {
				return prev.dateAdded - after.dateAdded;
			});
		},
	},
});
export default store;
