import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router)

app.mount('#app')

const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem("counter") || 0;

document.querySelector(".counter-value").innerText = counter;

actions.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase':
				counter++;
				localStorage.setItem("counter", counter);
				break;
		
		}

		document.querySelector(".counter-value").innerText = counter;
	});
});