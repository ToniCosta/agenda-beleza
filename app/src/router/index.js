import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/lista-servicos',
		name: 'ListaServicos',
		// route level code-splitting
		// this generates a separate chunk (petsAdoption.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "petsAdoption" */ '../views/ListaServicos.vue')
	},
	{
		path: '/agendamentos',
		name: 'AgendamentosServicos',
		// route level code-splitting
		// this generates a separate chunk (petsAdoption.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "petsAdoption" */ '../views/AgendamentosServicos.vue')
	}
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes 
})

export default router
