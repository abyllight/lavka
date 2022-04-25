<template>
    <div class="relative w-full h-full text-gray-800 bg-gray-100">
        <div class="relative flex py-20 md:px-4">
            <!--   Result   -->
            <div class="">
                <svg class="fixed z-20 -top-9 mix-blend-multiply md:-top-32 left-0 lg:w-1/2 lg:right-0 lg:top-0 lg:absolute"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 800 1067"
                >
                    <path :style="'fill:'+color" :d="d" />
                </svg>

                <img :src="image"
                     class="object-cover fixed -top-9 md:-top-32 left-0
                        lg:absolute lg:w-1/2 lg:right-0 lg:top-0"
                />
            </div>

            <!--   Options    -->
            <div class="fixed z-30 w-full bg-gray-100 bottom-0 overflow-y-auto no-scrollbar left-0 p-6 h-1/2 rounded-t-2xl
            lg:w-1/2 lg:left-auto lg:right-0 lg:top-14 lg:rounded-t-none lg:h-screen">
                <h4 class="font-semibold text-xs text-gray-500 mt-5 mb-1 uppercase">Создай свой собственный</h4>
                <h1 class="text-4xl font-medium mb-3">Муссовый торт</h1>



                <div class="mt-10">
                    <div class="mb-10">
                        <h4 class="mb-4 font-medium uppercase text-sm">Форма</h4>
                        <div class="flex space-x-6 overflow-auto no-scrollbar mb-5">
                            <div v-for="(tag, index) in options[0].tags"
                                class="flex flex-col items-center cursor-pointer outline-none focus:outline-none select-none"
                                @click="setForm(index)"
                            >
                                <div class="w-12 h-12 rounded-lg mb-1 flex justify-center items-center"
                                    :class="{'border-black border-2': result[0] === index}">
                                    <img :src="tag.image" class="w-10 h-10 object-cover rounded-lg"/>
                                </div>
                                <p class="text-sm">{{tag.name}}</p>
                            </div>
                        </div>

                        <div class="mb-3 flex space-x-5 text-sm">
                            <div
                                v-for="f in form"
                                class="flex space-x-1 bg-gray-300 py-1 px-4 rounded-lg"
                            >
                                <p class="font-light">{{f.name}}:</p>
                                <span>{{f.value}}см</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-10">
                        <h4 class="mb-4 font-medium uppercase text-sm">Цвет</h4>
                        <div class="flex space-x-6 overflow-auto no-scrollbar mb-4">
                            <div v-for="(tag,index) in options[1].tags"
                                 class="flex flex-col items-center cursor-pointer"
                                 @click="setColor(index)"
                            >
                                <div class="w-12 h-12 rounded-full mb-1 flex justify-center items-center"
                                     :class="{'border-black border-2': result[1] === index}"
                                >
                                    <div class="w-8 h-8 rounded-full" :style="{'backgroundColor': tag.color}"></div>
                                </div>
                                <p class="text-sm">{{tag.name}}</p>
                            </div>
                        </div>
                        <div class="mb-3 text-sm font-light italic">
                            Цвет может немного отличаться
                        </div>
                    </div>

                    <!--                    <div class="mb-10">
                        <h4 class="mb-4 font-medium uppercase text-sm">Декор</h4>
                        <div class="flex space-x-6 overflow-auto no-scrollbar">
                            <div v-for="(tag,index) in options[3].tags"
                                 class="flex flex-col items-center cursor-pointer"
                                 @click="setDecor(index)"
                            >
                                <div class="w-10 h-10 bg-gray-300 rounded-full mb-1">
                                </div>
                                <p class="text-sm">{{tag.name}}</p>
                            </div>
                        </div>
                    </div>-->

                    <div class="mb-10">
                        <h4 class="mb-4 font-medium uppercase text-sm">Начинка</h4>
                        <div class="flex space-x-6 overflow-auto no-scrollbar">
                            <div v-for="(tag,index) in options[2].tags"
                                 class="flex flex-col items-center cursor-pointer"
                                 @click="setFilling(index)"
                            >
                                <div
                                    class="w-12 h-12 rounded-lg mb-1 flex justify-center items-center bg-cover"
                                    :class="{'border-black border-2': result[2] === index}"
                                >
                                    <img :src="tag.form" class="rounded-lg w-9 h-9 object-cover"/>
                                </div>
                                <p class="text-sm">{{tag.name}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="mb-14">
                        <h4 class="mb-4 font-medium uppercase text-sm">Выберите дату</h4>
                        <div class="flex space-x-4 overflow-auto no-scrollbar">
                            <div
                                v-for="(date, index) in dates"
                                class="flex flex-col font-medium items-center justify-center px-2.5 py-1 cursor-pointer rounded-lg"
                                :class="{'border-black border-2 bg-gray-300': result[4] === index}"
                                @click="setDate(index)"
                            >
                                <span>{{date.day}}</span>
                                <p class="text-sm uppercase">{{date.month}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:mb-20">
                        <div class="flex items-center justify-between md:justify-start space-x-6 md:space-x-8">
                            <div class="flex flex-col">
                                <span class="text-2xl font-medium">9000₸</span>
                            </div>
                            <div @click="save" class="flex items-center justify-center uppercase font-medium bg-stone-800 hover:bg-stone-900 cursor-pointer text-sm text-white py-3.5 w-56 rounded-md shadow">
                                <cart-icon class="w-5 h-5 mr-2"/>
                                Добавить
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartIcon from "../icons/CartIcon";
export default {
    name: "Builder",
    components: {CartIcon},
    data: () => ({
        options: [
            {
                name: 'Форма',
                tags: [
                    {
                        id: 1,
                        name: 'Сердце',
                        slug: 'heart',
                        form: '/builder/forms/heart.png',
                        image: '/builder/heart.jpg',
                        dimension: [
                            {
                                name: 'Диаметр',
                                value: '16'
                            },
                            {
                                name: 'Высота',
                                value: '3,4'
                            }
                        ],
                        d: 'm286.48 274.99 56.55-27.44L401 223.46l9.55 3.81 59.88 34.12 34.84 21.24 2.62 9.06 2.86 16.23 3.58 22.42 3.58 28.4 1.67 12.88 1.19 2.15 3.58 2.14 67.05-8.82 22.66-1.91 14.32 10.73 78.26 74.21 1.19 3.81-5.25 43.9-3.34 26.25-7.16 48.43-.95 4.54-2.15 5.48-12.17 29.59-18.37 40.32-5.73 12.41-3.81 4.53-10.98 9.07-23.14 15.03-21.47 14.55-14.08 9.54L533.66 740l-50.58 25.05-6.68 2.63-67.28-9.78-60.37-13.37-42.23-12.64-37.93-15.03-33.88-56.31-31.74-58.69-2.62-9.07-3.1-31.01-4.3-37.22-2.62-50.59-1.67-56.54v-5.01l36.74-74.92 61.08-62.51z'
                    },
                    {
                        id: 2,
                        name: 'Круг',
                        slug: 'circle',
                        form: '/builder/forms/circle.png',
                        image: '/builder/circle.jpg',
                        dimension: [
                            {
                                name: 'Диаметр',
                                value: '14'
                            },
                            {
                                name: 'Высота',
                                value: '5'
                            }
                        ],
                        d: 'M387.57 395.51c52.27-5.47 95.38-.99 125 4.26 39.77 7.04 70.21 18.1 88.62 25.75 33.65 13.98 52.4 27.05 57.43 30.64 20 14.25 32.99 27.95 37.01 32.29 11.85 12.81 33.83 37.06 46.45 75.76 3.54 10.85 10.68 33.44 9.04 63.27-1.48 27.01-9.42 46.57-16.77 64.68-5.28 13.02-12.44 30.31-27.14 49.5-10.46 13.65-20.02 22.1-31.82 32.52-7.44 6.57-25.35 22.26-49.59 36.96-37.32 22.63-70.64 31.41-102.46 39.54-26.42 6.75-57.31 14.43-99.42 15.21-45.31.83-81.64-6.74-103.63-12.63-11.08-2.97-49.43-13.8-93.81-39.54-20.45-11.86-38.04-22.06-57.55-41.41-31.06-30.8-44.43-62.42-47.49-69.95-15-36.93-14.95-68.4-14.74-77.67.33-14.39 2.56-39.14 14.04-67.14 12.5-30.5 29.72-49.57 40.71-61.53 31.35-34.11 64.13-50.82 86.09-61.76 27.92-13.91 75.58-33.26 140.05-38.75Z'
                    },
                    {
                        id: 3,
                        name: 'Камни',
                        slug: 'stones',
                        form: '/builder/forms/stone.png',
                        image: '/builder/stones.jpg',
                        dimension: [
                            {
                                name: 'Диаметр',
                                value: '20'
                            },
                            {
                                name: 'Высота',
                                value: '3'
                            }
                        ],
                        d: 'm633.19 445.56 14.31 8.91 1.4 3.05v4.22l5.63-2.34 42.92 26.03 2.11 3.29h4.69l13.14 9.61v4.22l-2.58 6.81-27.68 50.19-4.45 1.64.7 5.63-7.74 14.77-4.69 3.05.23 4.22.24 3.29-26.74 47.84-2.81 1.65h-3.76l1.41 7.03-6.57 12.9-18.99 33.77-5.87 1.88-38.46 47.14 5.16 19.24-3.28 6.8-16.66 29.08-16.65 10.55-14.54 20.88-26.74-16.19-3.75.47-44.56-29.08-34.01-16.65-6.33-.47-22.52-12.43-34.01-21.34-1.4-4.69h-3.52l-35.18-20.41-1.29-4.69-5.63-1.17-42.92-24.4-1.88-5.62-5.63.23-6.33-4.22v-4.69l-6.8.23-20.87-12.66-6.81-7.04v-2.81l-6.56-1.64-13.61-10.32v-3.76l28.47-43.47 46.18-63.23 5.38-1.72-.43-6.24 10.12-21.32 15.71-26.7 3.23-1.93v-8.83l1.3-5.38 46.93-74.5 3.45-1.94.21-7.1 13.78-18.95 9.01-.3 15.68-14.12 16.92 4.77 5.61 3.18 9.36-9.61 30.72 14.77 1.41 2.12 5.63-3.52 16.65 9.85 26.86 17.02 3.67 3.95 5.08 1.98 10.17 22.3.56 4.8 5.93-1.41 35.86 22.59 1.98 6.78 64.45 14.16z'
                    },
                    {
                        id: 4,
                        name: 'Облако',
                        slug: 'cloud',
                        form: '/builder/forms/cloud.png',
                        image: '/builder/cloud-sm.jpg',
                        dimension: [
                            {
                                name: 'Диаметр',
                                value: '15,7'
                            },
                            {
                                name: 'Высота',
                                value: '4'
                            }
                        ],
                        d: 'M328 367.27c2.14-1.85 1.68-3.65 4.13-10.66 0 0 .53-1.52 3.3-8 2.36-5.55 12.1-19 28.77-29.38 5.81-3.61 31.75-18.77 62.93-12 2.88.62 23.84 5.35 35.19 16.58a152.3 152.3 0 0 0 19.46 16.75c1.88 1.36 1.46 1 2.87 2 9.95 7.3 20.83 18.29 20 25.21a4.49 4.49 0 0 0 .17 2.36c1.13 3 5.77 3.7 7.44 4.07 4.58 1 10.9 8.12 23.35 22.33 4.17 4.76 6.25 7.14 8.79 10.32 10.55 13.19 15.82 19.79 16.08 27.23.13 3.91-.86 6.69 1.18 9s5.57 1.86 9.81 5.75a20.23 20.23 0 0 1 2 2.2c4.76 5.65 11.42 9.93 12.93 11 8.42 5.92 20 26.66 24.12 48.56a104.55 104.55 0 0 1 1 29.44 68.29 68.29 0 0 1-3.22 15.23 66.91 66.91 0 0 1-5.92 12.51c-3.58 6.14-8.88 15.21-18.78 24.7-11.55 11.09-24.1 17.89-31.46 20.14-4.88 1.48-7.31 2.22-9.63 2.29-3.94.11-7.44-.8-8.81 1.09a3.26 3.26 0 0 0-.51 2.2c.27 4.53-6.31 14.73-14 23-7 7.52-12.95 11.7-23 18.78 0 0-14.35 10.09-23.5 11.74l-5.26.94c-.55 1.42-1.33 3.35-2.37 5.59a84.65 84.65 0 0 1-10.15 16.58c-5.85 7.38-11.65 11.79-16.92 15.73a104 104 0 0 1-26.05 14.89c-6.67 2.56-17.24 6.52-31.64 6.43a78.67 78.67 0 0 1-34.17-8.12c-13.07-6.48-20.66-14.85-26.22-21-3.05-3.36-11.47-13.08-16.75-25.38-2.79-6.48-4.18-9.73-4.4-13.87s.61-6.41-1.19-9.14c-2.17-3.3-6.41-4.51-7.78-4.9a18.35 18.35 0 0 0-5.75-.68c-9.56.18-21.82-14.51-26.22-19.79-4.56-5.47-10.28-11.92-13.88-20.81-2.57-6.37-3.86-9.55-3.89-13 0-2.74.49-5.35-1.18-7.44-1.78-2.24-4.89-2.44-5.75-2.54-10.79-1.24-24.43-18.82-28.09-23.52a91.06 91.06 0 0 1-13.87-25.54 86.3 86.3 0 0 1-4.57-20.3 78.78 78.78 0 0 1 .68-19.8 83.13 83.13 0 0 1 8.12-23.68c2.84-5.55 14.48-26.91 34.34-36.88 7.77-3.9 11.66-5.85 16.93-6.57 5.69-.77 10.06 0 12-2.91 1.5-2.24 0-4.37 1.7-9.47a25 25 0 0 1 2.53-5.24A55.26 55.26 0 0 1 275 396.2c1.18-1 8.92-7.49 17.43-9.81 3.5-1 5.58-1.36 5.58-1.36 5.4-1 6.57-.48 8.63-1.69s1.58-2 4.74-6.09c2.54-3.28 4.18-5.39 6.76-6.94 4.66-2.77 6.86-.49 9.86-3.04Z'
                    }
                ]
            },
            {
                name: 'Цвет',
                tags: [
                    {
                        id: 1,
                        name: 'Серый',
                        slug: 'gray',
                        color: '#fafafa'
                    },
                    {
                        id: 2,
                        name: 'Красный',
                        slug: 'red',
                        color: '#E53935'
                    },
                    {
                        id: 3,
                        name: 'Желтый',
                        slug: 'yellow',
                        color: '#FFFF00',
                    }
                ]
            },
            {
                name: 'Начинка',
                tags: [
                    {
                        id: 1,
                        name: 'Клубничная',
                        slug: 'straw',
                        form: '/builder/fillings/strawberry.webp',
                        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
                    },
                    {
                        id: 2,
                        name: 'Банановая',
                        slug: 'banana',
                        form: '/builder/fillings/banana.webp',
                        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
                    },
                    {
                        id: 3,
                        name: 'Малиновая',
                        slug: 'malina',
                        form: '/builder/fillings/raspberry.webp',
                        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
                    },
                    {
                        id: 4,
                        name: 'Шоколадная',
                        slug: 'choco',
                        form: '/builder/fillings/choco.jpeg',
                        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
                    }
                ]
            },
            {
                name: 'Декор',
                tags: [
                    {
                        id: 1,
                        name: 'Серый',
                        slug: 'gray'
                    },
                    {
                        id: 2,
                        name: 'Красный',
                        slug: 'red'
                    },
                    {
                        id: 3,
                        name: 'Желтый',
                        slug: 'yellow'
                    }
                ]
            }
        ],
        option_idx: 0,
        tags: [],
        color: '#ffffff',
        filling: 1,
        decor: 1,
        image: '',
        d: '',
        form: {},
        dates: [],
        result: [0, 0, 0, 0, 0]
    }),
    mounted() {
        this.$store.dispatch('hideFooter')
        this.init()

        let now = new Date();

        for(let i = 2; i <= 7; i++) {
            let date = new Date(new Date(now).setDate(now.getDate() + i))
            this.dates.push({
                id: i - 1,
                day: date.getDate(),
                month: date.toLocaleString('ru',{month:'short'})
            })
        }
    },
    beforeUnmount() {
        this.$store.dispatch('showFooter')
    },
    methods: {
        chooseOption(id) {
            this.option_idx = id
            this.tags = this.options[id].tags
        },
        save() {
            this.$store.dispatch('addBuilder', {
                image: '/builder/'+ this.image + '.jpg',
                title: 'Custom',
                price: 9000
            })

            this.$router.push({ name: 'Product', params: { id: 0 } })
        },
        init() {
            this.chooseOption(0)
            this.image = this.tags[0].image
            this.d = this.tags[0].d
            this.color = this.options[1].tags[0].color
            this.form = this.tags[0].dimension
        },
        setForm(id) {
            let target = this.options[0].tags[id]
            this.image = target.image
            this.d = target.d
            this.form = target.dimension
            this.result[0] = id
        },
        setColor(id) {
            this.color = this.options[1].tags[id].color
            this.result[1] = id
        },
        setFilling(id) {
            this.filling = this.options[2].tags[id].id
            this.result[2] = id
        },
        setDecor(id) {
            this.decor = this.options[3].tags[id].id
            this.result[3] = id
        },
        setDate(id) {
            this.result[4] = id
        }
    }
}
</script>
