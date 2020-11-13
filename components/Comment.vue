<template>
  <div class="w-full my-8 ">
    <h2 class="text-main-black text-center text-2xl mb-3">
      <slot name="title"></slot>
    </h2>
    <p class="text-main-black text-center text-lg">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>
