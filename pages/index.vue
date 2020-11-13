<template>
  <div class="container mx-auto px-5">
    <h1 class="text-main-black text-center text-4xl mt-32 tracking-widest">
      別府旅行のしおり
    </h1>
    <div class="flex flex-col text-center">
      <div class="flex flex-col mt-32">
        <h2>一日目</h2>
        <nuxt-link to="/day1" class="text-main-link text-2xl underline"
          >飛行機とサファリ</nuxt-link
        >
      </div>

      <div class="flex flex-col mt-20">
        <h2>二日目</h2>
        <nuxt-link to="/day2" class="text-main-link text-2xl underline"
          >地獄めぐりと食べ歩き</nuxt-link
        >
      </div>

      <div class="mt-56">
        <h2 class="text-main-black text-center text-2xl mb-3 underline">
          持ち物
        </h2>
        <div class="mt-4">
          <check-list>着替え</check-list>
          <check-list>
            カメラ<br />
            （レンズ・フィルター・バッテリー）
          </check-list>
          <check-list>充電器・ケーブル</check-list>
          <check-list>コンタクト</check-list>
          <check-list>メガネ</check-list>
          <check-list>メガネ</check-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckList from '~/components/CheckList'

export default {
  components: {
    CheckList
  }
}
</script>

<style scoped>
div.container:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: url(~assets/images/index/bg.webp) center no-repeat;
  background-size: cover;
}
</style>
