<template>
  <div class="bg-gradient container mx-auto px-5 flex flex-col">
    <div class="text-main-white text-center flex flex-col mt-8 mb-16">
      <div class="mb-6">
        <span class="text-md">11/14</span>
        <h1 class="text-2xl">飛行機とサファリ</h1>
      </div>
      <p class="text-lg">
        げきねむ<br />
        朝は４時半か５時には起きないと。 <br />
        荷物は持って出るだけにしておきます。
      </p>
    </div>
    <landmark-card
      :img-src="require(`~/assets/images/day1/card-kawasakike.webp`)"
    />
    <comment>
      <template v-slot:title>
        電車で２時間
      </template>

      <template v-slot:content>
        <a
          href="https://yahoo.jp/SLBKLo"
          target="_blank"
          class="text-main-link underline"
          >乗換を確認する</a
        >
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day1/card-narita.webp`)"
      link="https://www.narita-airport.jp/jp/access/train"
    />

    <comment>
      <template v-slot:title>
        飛行機で２時間
      </template>
      <template v-slot:content>
        機内食はないよ
      </template>
    </comment>

    <landmark-card :img-src="require(`~/assets/images/day1/card-oita.webp`)" />

    <comment>
      <template v-slot:title>
        車ゲット
      </template>
      <template v-slot:content>
        まずはおひるごはん食べるよ<br />
        どっちがいい？
      </template>
    </comment>

    <div class="flex flex-row justify-between">
      <landmark-card
        :img-src="require(`~/assets/images/day1/card-lunch_left.webp`)"
        link="https://www.oitadrip.jp/topics/odekakelunch39/"
      />
      <landmark-card
        :img-src="require(`~/assets/images/day1/card-lunch_right.webp`)"
        link="https://www.oitadrip.jp/topics/odekakelunch46/"
      />
    </div>

    <comment>
      <template v-slot:title>
        車で1時間
      </template>
      <template v-slot:content>
        でっかいもみがいるらしい
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day1/card-safari.webp`)"
    />

    <comment>
      <template v-slot:title>
        旅館まで30分
      </template>
      <template v-slot:content>
        よるごはんたのしみ！<br />
        何時からか不明。。
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day1/card-ryokan.webp`)"
    />

    <div class="mt-6 flex flex-col">
      <h2 class="text-center text-main-white text-2xl">
        おつかれさまでした
      </h2>
      <p class="text-center text-main-white text-lg">
        あしたは地獄めぐりだー！<br />
        チェックアウトは10:00<br />
        おやすみー
      </p>
    </div>

    <div class="mt-10 flex flex-col">
      <h2 class="text-main-white text-lg text-center">二日目</h2>
      <nuxt-link
        to="/day2"
        class="text-main-link-light text-2xl text-center underline"
        >地獄めぐりと食べ歩き</nuxt-link
      >
    </div>

    <nuxt-link
      to="/"
      class="mt-16 mb-8 text-main-link-light text-lg text-center underline"
      >トップへ</nuxt-link
    >
  </div>
</template>

<script>
import LandmarkCard from '~/components/LandmarkCard'
import Comment from '~/components/Comment'

export default {
  components: {
    LandmarkCard,
    Comment
  }
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(
      180deg,
      #4c586a 9.72%,
      #e9faff 22.41%,
      #c7f1ff 70.33%,
      #ffc7a8 76.82%,
      #7789a5 89.58%,
      #4c586a 100%
    ),
    #dff7ff;
}
</style>
