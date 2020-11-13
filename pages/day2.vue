<template>
  <div class="bg-gradient container mx-auto px-5 flex flex-col">
    <div class="text-main-black text-center flex flex-col mt-8 mb-10">
      <div class="mb-6">
        <span class="text-md">11/15</span>
        <h1 class="text-2xl">地獄めぐりと食べ歩き</h1>
      </div>
      <p class="text-lg">
        車でめぐる現代的な地獄めぐり<br />
        途中で寿司を食べます。<br />
        後半は空港に戻って探索！<br />
      </p>
    </div>
    <landmark-card
      :img-src="require(`~/assets/images/day2/card-ryokan-day2.webp`)"
    />
    <comment>
      <template v-slot:title>
        車でちょっと移動
      </template>
      <template v-slot:content>
        近く地獄まで行きます。<br />
        １０分くらい。<br />
        <a
          href="https://goo.gl/maps/wcsD1aSYJ7cetMi98"
          target="_blank"
          class="text-main-link underline"
          >経路を確認する</a
        >
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day2/card-umi_area.webp`)"
    />

    <comment>
      <template v-slot:title>
        観覧券ゲット
      </template>
      <template v-slot:content>
        買って地獄を見る観覧券。<br />
        いいのか悪いのか。<br />
        <br />
        スマホで見せるだけで割引になるよ<br />
        <a
          href="http://www.beppu-jigoku.com/discount/index.html"
          target="_blank"
          class="text-main-link underline"
          >結構やさしい地獄の割引券</a
        >
        <br />
        <br />
        車をとめて歩いて巡ります。 <br />
        そのあとは車で移動して<br />
        おひるごはん！
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day2/card-toyoken.webp`)"
    />

    <comment>
      <template v-slot:title>
        とり天発祥のお店
      </template>
      <template v-slot:content>
        ごはん食べて休憩したら<br />
        次の地獄に出発
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day2/card-chi_area.webp`)"
    />

    <comment>
      <template v-slot:title>
        食後の血の池地獄
      </template>
      <template v-slot:content>
        龍巻地獄の噴出は運次第<br />
        <br />
        地獄めぐりはこれで終わり<br />
        別府から大分空港に戻ります<br />
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day2/card-oita-day2.webp`)"
    />

    <comment>
      <template v-slot:title>
        自由時間
      </template>
      <template v-slot:content>
        空港近くで自由時間<br />
        車は18時に返します<br />
        <br />
        20:10発の飛行機で帰るよ
      </template>
    </comment>

    <landmark-card
      :img-src="require(`~/assets/images/day2/card-kawasakike-day2.webp`)"
    />

    <div class="mt-6 flex flex-col">
      <h2 class="text-center text-main-white text-2xl">
        かえってきたー！
      </h2>
      <p class="text-center text-main-white text-lg">
        たのしかった！！<br />
        もみはどうせ寝てるよね<br />
        今日はゆっくり寝よー<br />
        <br />
        おやすみ
      </p>
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
      #e9faff 0%,
      #c7f1ff 66.64%,
      #ffc7a8 75.28%,
      #7789a5 83.61%,
      #4c586a 100%
    ),
    #dff7ff;
}
</style>
