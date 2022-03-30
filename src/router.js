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
        {
             path: '/popular',
             name: 'popular',
             component: () => import("./pages/Popular.vue")
        },
        {
            path: '/upcoming',
            name: 'upcoming',
            component: () => import("./pages/Upcoming.vue")
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: () => import("./pages/Reviews.vue")
        },
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
            path: "/about",
            name: "about",
            component: () => import("./pages/About.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("./pages/Contact.vue")
        },
        //////Film id///////
        {
            path: "/film/:id",
            name: "film_show",
            component: () => import("./pages/Film.vue")
        },
        {
            path: '/movie_review/:id',
            name: 'movie_review',
            component: () => import("./pages/Movie_Review.vue")
        }
        ///////////////////
    ]
})