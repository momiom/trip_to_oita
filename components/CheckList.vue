<template>
  <div class="w-full my-2 pl-4">
    <label class="flex justify-start items-center">
      <div
        class="border-2 rounded border-main-black w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
      >
        <input type="checkbox" class="opacity-0 absolute" />
        <svg
          class="fill-current hidden w-4 h-4 text-main-black pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="select-none text-2xl text-main-black text-left">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {}
</script>

<style>
input:checked + svg {
  display: block;
}
</style>
