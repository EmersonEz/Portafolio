import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Info.vue';
import About from '../views/Habilidades.vue';
import Projects from '../views/Projects.vue'

const routes = [
    {
        path:'/', 
        name:'Home', 
        component: Home
    },
    {
        path:'/about',
         name:'About', 
         component: About
    },
    {
        path:  '/projects',
        name :  'Projects' ,
        component: Projects
    },
    {
        path:'/:catchAll(.*)',
        redirect : '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router