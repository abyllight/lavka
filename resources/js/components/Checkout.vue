<template>
    <div v-if="cart.length > 0">
        <div class="max-w-xl w-full">
            <h1 class="text-xl lg:text-2xl font-semibold mb-6 md:mb-10">Оформление заказа</h1>
            <div class="flex flex-col gap-4 mb-8 md:mb-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Name -->
                    <div>
                        <label for="name" class="text-sm font-medium">Имя</label>
                        <input
                            v-model="user.name"
                            id="name"
                            type="text"
                            placeholder="Имя"
                            class="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border rounded-md"
                            :class="errors.name ? error : ''"
                        />
                        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{errors.name}}</p>
                    </div>
                    <!-- Phone -->
                    <div>
                        <label for="phone" class="text-sm font-medium">Телефон</label>
                        <input
                            v-model="user.phone"
                            id="phone"
                            type="text"
                            v-maska="'+7 (###) ###-##-##'"
                            placeholder="+7 (###) ###-##-##"
                            class="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border rounded-md"
                            :class="errors.phone ? error : ''"
                        />
                        <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{errors.phone}}</p>
                    </div>
                </div>
                <!-- Address -->
                <div>
                    <label for="address" class="text-sm font-medium">Адрес</label>
                    <input
                        v-model="user.address"
                        id="address"
                        type="text"
                        placeholder="Например: Сыганак 10, кв17, п2, э4"
                        class="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border rounded-md"
                        :class="errors.phone ? error : ''"
                    />
                    <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{errors.name}}</p>
                </div>
                <!-- Time -->
                <div
                    class="mb-5 inline-block rounded"
                    :class="{ 'border border-red-500': errors.time }"
                >
                    <label for="time" class="text-sm font-medium">Выберите время на завтра</label>
                    <div id="time" class="mt-3 flex flex-wrap">
                        <button
                            v-for="interval in intervals"
                            :key="interval.id"
                            @click.stop="time = interval.id"
                            class="text-sm mr-2 mb-2 cursor-pointer focus:outline-none rounded-lg py-2 px-3 inline"
                            :class="[interval.id === time ? active_time : inactive_time]"
                        >
                            {{ interval.time }}
                        </button>
                    </div>
                    <p v-if="errors.time" class="text-red-500 text-sm mt-1">{{errors.time}}</p>
                </div>
                <!-- Payment -->
                <div>
                    <label for="payment" class="text-sm font-medium">Выберите способ оплаты</label>
                    <div id="payment" class="mt-4 space-y-4">
                        <div class="flex items-center">
                            <input
                                id="card"
                                v-model="user.payment"
                                value="card"
                                type="radio"
                                class="focus:ring-yellow-300 h-4 w-4 text-yellow-300 border-gray-300" />
                            <label for="card" class="ml-3 block text-sm text-gray-700">
                                Оплата картой на сайте
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input
                                id="kaspi_pay"
                                v-model="user.payment"
                                value="kaspi_pay"
                                type="radio"
                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label for="kaspi_pay" class="ml-3 block text-sm text-gray-700">
                                Удаленная оплата Kaspi Pay
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input
                                id="contract"
                                v-model="user.payment"
                                value="contract"
                                type="radio"
                                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label for="contract" class="ml-3 block text-sm text-gray-700">
                                Безналичный расчет по договору
                            </label>
                        </div>
                    </div>
                    <p v-if="user.time < 0" class="text-red-500 text-xs mt-1">Выберите время</p>
                </div>
            </div>
            <div
                @click="makeOrder"
                class="flex items-center justify-center gap-x-2 uppercase font-medium bg-stone-800 hover:bg-stone-700 cursor-pointer text-sm text-white py-3.5 w-full md:w-72 rounded-md shadow mb-8"
            >
                Заказать
            </div>
        </div>
    </div>
    <div
        v-else
        class="flex justify-center h-96 items-center"
    >
        <div class="text-center">
            <div class="rounded-full bg-stone-300 w-28 h-28 flex justify-center items-center mb-5">
                <img src="/icons/bag.svg">
            </div>
            <p class="text-xl">Корзина пуста</p>
        </div>
    </div>
    <checkout-modal v-if="showModal" :status="status" :message="message" @close-modal="closeModal"/>
    <loading :loading="loading"/>
</template>

<script>
import { maska } from 'maska'
import {mapGetters, mapState} from "vuex";
import CheckoutModal from "./CheckoutModal";
import Loading from "./Loading";
export default {
    name: "Checkout",
    components: {Loading, CheckoutModal},
    directives: {maska},
    data: () => ({
        intervals: [
            {
                id: 0,
                time: '07.00-08.00'
            },
            {
                id: 1,
                time: '08.00-09.00'
            },
            {
                id: 2,
                time: '09.00-10.00'
            }
        ],
        user: {
            name: '',
            phone: '',
            address: '',
            payment: 'card'
        },
        time: 100,
        errors: [],
        active_time: 'bg-stone-400 shadow',
        inactive_time: 'bg-gray-200 hover:bg-gray-300',
        error: 'border-red-500',
        showModal: false,
        message: '',
        status: true,
        loading: false
    }),
    computed: {
        ...mapState(['cart', 'cutlery', 'delivery_fee']),
        ...mapGetters(['getCartTotalPrice', 'getTotal', 'getWholesale']),
        host() {
            return this.$store.state.host
        }
    },
    methods: {
        makeOrder() {
            if (!this.isValid()) return

            if (this.user.payment === 'card') {
                this.cloudPayment()
            }else {
                this.amoRequest()
            }
        },
        isValid() {
            this.errors = []

            if (this.user.name === '') {
                this.errors.name = 'Укажите имя'
            }

            if (this.user.phone.length < 18) {
                this.errors.phone = 'Заполните телефон'
            }

            if (this.user.address === '') {
                this.errors.address = 'Укажите адрес'
            }

            if (this.user.time === 100) {
                this.errors.time = 'Выберите время'
            }

            return Object.keys(this.errors).length === 0
        },
        closeModal() {
            this.showModal = false
        },
        amoRequest() {
            this.loading = true
            axios.post('/api/place-order', {
                cart: this.cart,
                user: this.user,
                time: this.intervals[this.time].time,
                cutlery: this.cutlery.q,
                total: this.getTotal,
                wholesale: this.getWholesale
            }).then(response => {
                    this.loading = false
                    this.status = response.data.status
                    this.message = response.data.message
                    this.showModal = true
                    this.$store.dispatch('clearCart');
                    this.$store.dispatch('clearCutlery');
                })
                .catch(error => {
                    console.log(error)
                })
        },
        cloudPayment() {
            let self = this
            const widget = new cp.CloudPayments();
            widget.pay(
                'auth', // или 'charge'
                { //options
                    publicId: process.env.MIX_CLOUD_PAYMENTS_ID, //id из личного кабинета
                    description: 'Оплата товаров в lavka', //назначение
                    amount: 1, //сумма
                    currency: 'KZT', //валюта
                    skin: "modern", //дизайн виджета (необязательно)
                    data: {
                        cart: {
                            name: 'test',
                            price: 1
                        }
                    }
                },
                {
                    onSuccess: function (options) {
                        // success
                        self.amoRequest()
                    },
                    onFail: function (reason, options) {
                        // fail
                        //действие при неуспешной оплате
                        self.showModal = true
                        self.message = reason
                        self.status = false
                        console.log(reason, options, 'fail')
                    },
                    onComplete: function (paymentResult, options) {
                        //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                        //например вызов вашей аналитики Facebook Pixel
                        //console.log(paymentResult, 'result')
                    }
                }
            )
        }
    }
}
</script>
