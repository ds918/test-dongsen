<template>
  <div :id="$style.navigation">
    <v-bottom-navigation
      app
      :height="$V(98)"
      color="#376abb"
      mandatory
      background-color="#f7f7f7"
      v-model="NAVIGATION_INDEX"
    >
      <v-btn height="100%" min-width="33.33333%" to="/" exact value="0">
        <span>项目</span>
        <base-img
          width="40"
          height="44"
          :style="{ marginBottom: $V(11) }"
          :class="[
            NAVIGATION_INDEX === '0'
              ? 'my-icons-project'
              : 'my-icons-unproject',
          ]"
        />
      </v-btn>
      <v-btn height="100%" min-width="33.33333%" to="/moneyInformation" value="1" exact>
        <span>统计</span>
        <base-img
          width="44"
          height="44"
          :style="{ marginBottom: $V(11) }"
          :class="[
            NAVIGATION_INDEX === '1' ? 'my-icons-census' : 'my-icons-uncensus',
          ]"
        />
      </v-btn>
      <v-btn height="100%" min-width="33.33333%" to="/myInformation" exact value="2">
        <span>我的</span>
        <base-img
          width="40"
          height="44"
          :style="{ marginBottom: $V(11) }"
          :class="[
            NAVIGATION_INDEX === '2' ? 'my-icons-mine' : 'my-icons-unmine',
          ]"
        />
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  computed: {
    NAVIGATION_INDEX: {
      get() {
        return this.$store.state.navigation.NAVIGATION_INDEX;
      },
      set(index) {
        this.$store.commit("navigation/NAVIGATION_TARGET", index);
      }
    }
  }
};
</script>
<style lang="scss" module>
#navigation {
  height: 100px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
