
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'	
Vue.use(VueRouter);
Vue.use(VueResource);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('content');
import { store } from './store/store'
import ItemComponent from './components/items/item.vue'
import DivisionComponent from './components/division/division.vue'
import IctItemNameComponent from './components/items/item_names.vue'
window.router = new VueRouter({
  routes: [
    { 
      path: '/', 
      redirect: '/items' 
    },
    { 
      path: '/items', 
      component: ItemComponent
    },
    {
    	path: '/divs',
    	component: DivisionComponent
    },
    {
      path: '/item-names',
      component: IctItemNameComponent
    }
   
  ]
});

const app = new Vue({
  	router,
  	store,
}).$mount('#app');


