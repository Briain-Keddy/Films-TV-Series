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
        /////////Films///////////
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
        /////////////////////////
        ////////TV Series////////
        {
            path: '/list_of_tv_show',
            name: 'tv_series',
            component: () => import("./pages/List_of_TV_Series.vue")
        },
        {
            path: '/latest_tv_show',
            name: 'latest_tv_series',
            component: () => import("./pages/Latest_TV_Series.vue")
        },
        /////////////////////////
        ////////Reviews//////////
        {
            path: '/reviews',
            name: 'reviews',
            component: () => import("./pages/Reviews.vue")
        },
        //////////////////////////////////
        ////////Login & Register//////////
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
        //////////////////////////////////
        ////////Contact & About//////////
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
        /////////////////////////
        ////////Film id//////////
        {
            path: "/film/:id",
            name: "film_show",
            component: () => import("./pages/Film.vue")
        },
        {
            path: '/movie_review/:id',
            name: 'movie_review',
            component: () => import("./pages/Movie_Review.vue")
        },
        /////////////////////////
        ///////TV Show id////////
        {
            path: "/tv/:id",
            name: "tv_show",
            component: () => import("./pages/TvShow.vue")
        }
        /////////////////////////
    ]
})