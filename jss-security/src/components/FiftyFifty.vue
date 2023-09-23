<template>
  <div class="grid md:grid-cols-3 gap-3.5 pb-11 container items-center">
    <div class="md:col-span-2">
      <span class="text-xl">{{ text }}</span>
    </div>
    <image :src="'/assets/images/' + imageFile"/>
    <!-- <image src="require(`!!assets-loader!@images/${imageFile}`)"/> -->
  </div>
</template>

<script>
export default {
  props: ["text", "imageFile", "inverted"],
};
</script>

<style></style>
