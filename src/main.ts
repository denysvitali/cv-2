import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "@fontsource/assistant";
import "@fontsource/assistant/500.css";
import "@fontsource/assistant/600.css";
import "@fontsource/assistant/700.css";
import "@fontsource/assistant/800.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';


library.add(faEnvelope, faLink, faGithub, faLinkedin, faTelegram, faTwitter);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
