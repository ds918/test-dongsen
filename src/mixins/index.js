import Vue from 'vue';

Vue.mixin({
  data: () => ({
    author: 'dongsen'
  }),
  methods: {
    $V(px) {
      if (arguments[1] === 'px') {
        return `${px / parseInt(process.env.VUE_APP_BASESIZE)}`
      } else {
        return `${px / parseInt(process.env.VUE_APP_BASESIZE)}rem`
      }
    }
  }
})
