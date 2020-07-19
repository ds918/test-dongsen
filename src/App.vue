<template>
  <v-app id="app" v-cloak>
    <v-main :class="{ [$style.contentType]: !displayNavbar }">
      <!-- <transition
        :duration="{ enter: 100, leave: 0 }"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
      > -->
      <keep-alive :exclude="excludeList">
        <router-view></router-view>
      </keep-alive>
      <!-- </transition> -->
    </v-main>
    <base-alert />
    <base-overlay />
    <transition name="navigationAnimate">
      <bottomNavigation v-show="displayNavbar" />
    </transition>
  </v-app>
</template>

<script>
// import { VMain } from 'vuetify/lib/framework'
import bottomNavigation from "@/components/bottom-navigation";
export default {
  name: "App",
  components: {
    bottomNavigation,
    // VMain
  },
  computed: {
    displayNavbar() {
      return this.displayNavbarList.every(
        (routeName) => routeName !== this.$route.name
      );
    },
  },
  data: () => ({
    excludeList: [],
    displayNavbarList: [
      "projectDetail",
      "trackProject",
      "customerInformation",
      "moneyReceived",
      "settings",
      "invoiceInformation",
    ],
  }),
};
</script>
<style module lang="scss">
[v-cloak] {
  display: none;
}
.contentType {
  padding-bottom: 0 !important;
}
</style>
