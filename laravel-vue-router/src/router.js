
import {createRouter,createWebHistory} from "vue-router";
/* importa un elemento */
import AppAbout from './pages/AppAbout.vue';
import AppCredits from './pages/AppCredits.vue';
import AppHome from './pages/AppHome.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/about",
            name:"About",
            component: AppAbout,
        },
        {
            path:"/",
            name:"Home",
            component: AppHome,
        },
        {
            path:"/credits",
            name:"Credits",
            component: AppCredits,
        },



    ],
})
export {router};




/* import AppHome from './pages/AppHome.vue';
import PostList from './pages/PostList.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/blog',
name: 'posts',
component: PostList
},
]
});
export { router }; */