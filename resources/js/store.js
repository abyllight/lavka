import { createStore } from 'vuex'
import { uuid } from "vue-uuid";
import axios from "axios";
import loading from "./components/Loading";

let host = 'https://back.eatandfit.kz/api'
let cutlery = window.localStorage.getItem('cutlery');
let cutlery_sample = {
    id: 0,
    title: 'Приборы',
    image: '/images/cutlery.jpg',
    price: 50,
    q: 1,
    total: 50
}

const store = createStore({
    state () {
        return {
            user: {},
            cart: [],
            loading: false,
            cutlery: cutlery ? JSON.parse(cutlery) : cutlery_sample,
            delivery_fee: 600,
            host: process.env.MIX_BACK_HOST_URL
        }
    },
    getters: {
        getCartTotalPrice: state => {
            return state.cart.reduce((sum, item) => sum + (item.q * item.price), 0)
        },
        getCartTotalQuantity: state => {
            return state.cart.reduce((sum, item) => sum + item.q, 0)
        },
        isInCart: state => id => {
            return state.cart.some(product => product.p_id === id)
        },
        getItemQuantity: state => id => {
            let found = state.cart.find(product => product.p_id === id)
            return found.q
        },
        getItemTotal: state => id => {
            let found = state.cart.find(product => product.p_id === id)
            return found ? found.total : 0
        },
        getTotal: state => {
            let cart_total = state.cart.reduce((sum, item) => sum + (item.q * item.price), 0)
            return cart_total + state.cutlery.total + state.delivery_fee
        },
        getWholesale: state => {
            return state.cart.reduce((sum, item) => sum + (item.q * item.wholesale_price), 0)
        },
        getItemId: state => id => {
            let found = state.cart.find(product => product.p_id === id)
            return found.uuid
        },
        isLoading: state => {
            return state.loading
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        SET_CART(state, cart) {
            state.cart = cart
        },
        SAVE_CUTLERY(state){
            window.localStorage.setItem('cutlery', JSON.stringify(state.cutlery));
        },
        CLEAR_CART(state){
            state.cart = []
        },
        CLEAR_CUTLERY(state){
            state.cutlery = cutlery_sample
        },
        DECREMENT_CUTLERY(state){
            state.cutlery.q -= 1
            state.cutlery.total = state.cutlery.q * state.cutlery.price
        },
        INCREMENT_CUTLERY(state){
            state.cutlery.q += 1
            state.cutlery.total = state.cutlery.q * state.cutlery.price
        },
        START_LOADING(state) {
            state.loading = true
        },
        STOP_LOADING(state) {
            state.loading = false
        }
    },
    actions: {
        async me({ commit }){
            let device = localStorage.getItem('v_device')

            if (device === null || device === undefined) {
                device = uuid.v1()
                window.localStorage.setItem('v_device', device);
            }

            await axios.get(host+'/customer/'+device)
                .then(response => {
                    commit('SET_USER', response.data.user)
                    commit('SET_CART', response.data.cart)
                })
        },
        getCart({ commit }) {
            axios.get(host+'/cart/'+this.state.user.cart_id)
                .then(response => {
                    commit('SET_CART', response.data.data)
                    commit('STOP_LOADING')
                })
        },
        addToCart({commit, dispatch}, p_id) {
            commit('START_LOADING')

            axios.post(host+ '/cart-item/add', {
                customer_id: this.state.user.id,
                product_id: p_id
            }).then(r => {
                dispatch('getCart')
            })
        },
        increment({commit, dispatch}, id) {
            commit('START_LOADING')
            axios.post(host + '/cart-item/increment', {
                id: id
            }).then( r => {
                    dispatch('getCart')
                })
        },
        decrement({commit, dispatch}, id) {
            commit('START_LOADING')
            axios.post(host + '/cart-item/decrement', {
                id: id
            }).then( r => {
                dispatch('getCart')
            })
        },
        removeFromCart({commit, dispatch}, id) {
            commit('START_LOADING')
            axios.post(host + '/cart-item/remove', {
                id: id
            }).then( r => {
                dispatch('getCart')
            })
        },
        clearCart({commit}) {
            commit('CLEAR_CART')
        },
        clearCutlery({commit}) {
            commit('CLEAR_CUTLERY')
            commit('SAVE_CUTLERY')
        },
        incrementCutlery({commit}) {
            commit('INCREMENT_CUTLERY')
            commit('SAVE_CUTLERY')
        },
        decrementCutlery({commit}) {
            if (this.state.cutlery.q < 1) {
                return
            }
            commit('DECREMENT_CUTLERY')
            commit('SAVE_CUTLERY')
        },
        startLoading({commit}) {
            commit('START_LOADING')
        },
        stopLoading({commit}) {
            commit('STOP_LOADING')
        }
    }
})

export default store
