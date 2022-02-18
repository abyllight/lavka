import { createStore } from 'vuex'

let cart = window.localStorage.getItem('cart');
let user = window.localStorage.getItem('go_user');
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
            user: user ? JSON.parse(user) : {},
            cart: cart ? JSON.parse(cart) : [],
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
            return state.cart.some(product => product.id === id)
        },
        getItemQuantity: state => id => {
            let found = state.cart.find(product => product.id === id)
            return found.q
        },
        getItemTotal: state => id => {
            let found = state.cart.find(product => product.id === id)
            return found ? found.total : 0
        },
        getTotal: state => {
            let cart_total = state.cart.reduce((sum, item) => sum + (item.q * item.price), 0)
            return cart_total + state.cutlery.total + state.delivery_fee
        },
        getWholesale: state => {
            return state.cart.reduce((sum, item) => sum + (item.q * item.wholesale_price), 0)
        }
    },
    mutations: {
        ADD_TO_CART(state, item) {
            item.q = 1
            item.total = item.price
            state.cart.push(item)
        },
        REMOVE_FROM_CART(state, id) {
            let index = state.cart.findIndex(item => item.id === id);

            if (index > -1) {
                state.cart.splice(index, 1);
            }
        },
        DECREMENT(state, id){
            let found = state.cart.find(product => product.id === id)
            found.q -= 1
            found.total = found.q * found.price
        },
        INCREMENT(state, id){
            let found = state.cart.find(product => product.id === id)
            found.q += 1
            found.total = found.q * found.price
        },
        SAVE_CART(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
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
        }
    },
    actions: {
        addToCart({state, commit}, item) {
            commit('ADD_TO_CART', item)
            commit('SAVE_CART')
        },
        increment({state, commit}, id) {
            commit('INCREMENT', id)
            commit('SAVE_CART')
        },
        decrement({state, commit}, id) {
            let count = this.getters.getItemQuantity(id)

            if (count > 1) {
                commit('DECREMENT', id)
            }else {
                commit('REMOVE_FROM_CART', id)
            }

            commit('SAVE_CART')
        },
        removeFromCart({state, commit}, id) {
            commit('REMOVE_FROM_CART', id)
            commit('SAVE_CART')
        },
        clearCart({commit}) {
            commit('CLEAR_CART')
            commit('SAVE_CART')
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
        }
    }
})

export default store
