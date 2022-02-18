import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product/:id',
        name: 'Product',
        props: route => ({
            id: parseInt(route.params.id)
        }),
        component: ProductDetails
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
    },
})

export default router
