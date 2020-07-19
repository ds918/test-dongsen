<template>
  <v-img
    eager
    :max-width="$V(width)"
    :min-width="$V(width)"
    :min-height="$V(height)"
    :max-height="$V(height)"
    :width="width"
    :height="height"
    class="my-icons-bg"
  />
</template>
<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "100%"
    }
  }
};
</script>
