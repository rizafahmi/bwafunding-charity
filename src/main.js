import App from './App.svelte';

const app = new App({
	target: document.querySelector("#root"),
	props: {
		ready: false
	}
});

window.initMap = function () {
	app.$set({ ready: true });
}

export default app;