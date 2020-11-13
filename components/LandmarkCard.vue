<template>
  <div class="w-full">
    <template v-if="link">
      <a :href="link" target="_blank">
        <img class="w-full object-cover" :src="imgSrc" :alt="alt" />
      </a>
    </template>
    <template v-else>
      <img class="w-full object-cover" :src="imgSrc" :alt="alt" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
