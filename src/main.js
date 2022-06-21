import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHouse, faToolbox, faUser, faList, faComments, faSliders,} from '@fortawesome/free-solid-svg-icons'
//ander library, deze is voor merken. Wordt in dit geval gebruikt voor social media link icons
import {faInstagram, faDiscord, faLinkedin} from '@fortawesome/free-brands-svg-icons'



/* add icons to the library, iconen hierboven importeren en hieronder toevoegen aan mijn library, vervolgens kan ik ze gebruiken om mn website */
library.add(faUserSecret, faHouse, faUser, faList, faToolbox, faComments, faSliders, faInstagram, faDiscord, faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
