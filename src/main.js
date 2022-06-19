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
import { faHouse, faToolbox, faUser, faList, faComments, faSliders } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library, iconen hierboven importeren en hieronder toevoegen aan mijn library, vervolgens kan ik ze gebruiken om mn website */
library.add(faUserSecret, faHouse, faUser, faList, faToolbox, faComments, faSliders)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
