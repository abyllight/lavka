import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Brand from "./pages/Brand";
import Builder from "./pages/Builder";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/brand/:id',
        name: 'Brand',
        props: route => ({
            id: parseInt(route.params.id)
        }),
        component: Brand
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
        path: '/bbb',
        name: 'Builder',
        component: Builder
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
                top: 124,
                behavior: 'smooth'
            }
        }else {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
    },
})

export default router
