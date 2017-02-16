import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/tab/goods'
import Sellers from '../components/tab/sellers'
import Ratings from '../components/tab/ratings'

Vue.use(Router)

export default new Router({
    routes: [

        {
            path:'/goods',
            name: 'Goods',
            component: Goods
        },
        {
            path:'/sellers',
            name: 'Sellers',
            component: Sellers
        },
        {
            path:'/ratings',
            name: 'Ratings',
            component: Ratings
        }
    ]
})
