import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        // {
        //     path: '/list_of_film',
        //     name: 'film',
        //     component: 'Film'
        // },
        {
            path: '/login',
            name: 'login',
            component: () => import("./pages/Login.vue")
        },
        {
            path: '/register',
            name: 'register',
            component: () => import("./pages/Register.vue")
        },
        {
            path: "/film/:id",
            name: "film_name",
            component: () => import("./pages/Film.vue")
        },
        {
            path: "about",
            name: "about",
            component: () => import("./pages/About.vue")
        },
        {
            path: "contact",
            name: "contact",
            component: () => import("./pages/Contact.vue")
        }
    ]
})