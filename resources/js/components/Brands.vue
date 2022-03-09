<template>
  <div class="max-w-6xl mx-auto px-4 py-16 grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-3">

      <router-link to="/products" class="rounded-lg p-5 flex items-center relative bg-cover h-48" style="background-image: url('/images/e2.jpg')">
          <div class="absolute">
              <h2 class="text-xl">EatFitGo</h2>
              <p>Вкусно. Полезно</p>
              <div class="mt-4 flex flex-wrap text-gray-900">
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Завтраки</div>
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Обеды</div>
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Боулы</div>
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Десерты</div>
              </div>
          </div>
      </router-link>

      <router-link to="/products" class="rounded-lg p-5 flex items-center relative bg-cover h-48" style="background-image: url('/images/vr6.jpg')">
          <div class="absolute">
              <h2 class="text-xl text-white">Время Есть</h2>
              <p class="text-white">Вкусно. Полезно</p>
              <div class="mt-4 flex flex-wrap text-gray-900">
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Стейки</div>
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Полуфабрикаты</div>
              </div>
          </div>
      </router-link>

      <router-link to="/products" class="rounded-lg p-5 flex items-center relative bg-cover h-48" style="background-image: url('/images/t1.png')">
          <div class="absolute">
              <h2 class="text-xl text-white">Mousse Cakes</h2>
              <p class="text-white">Вкусно. Полезно</p>
              <div class="mt-4 flex flex-wrap text-gray-900">
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Торты</div>
                  <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Пирожные</div>
              </div>
          </div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: "Brands"
}
</script>
