<template>
  <v-menu offset-y :content-class="$style.meun" transition="scroll-y-transition">
    <template v-slot:activator="{ on, value }">
      <v-overlay :value="value" z-index="5"></v-overlay>
      <v-sheet class="px-8" :class="$style.header" id="search-bar">
        <v-sheet :height="$V(96)" class="py-4 d-flex align-center justify-space-between">
          <v-btn v-on="on" class="pa-0" min-height="100%" text>
            {{ items[currentItem].title }}
            <base-img
              width="19"
              height="12"
              class="my-icons-arrow-down arrowAnimate-active"
              :style="{ marginLeft: $V(25) }"
              :class="value ? 'arrowAnimate-enter' : 'arrowAnimate-leave'"
            />
          </v-btn>
          <v-text-field
            class="mx-8 my-0"
            placeholder="搜索"
            background-color="#f1f1f1"
            :height="$V(64)"
            solo
            flat
            :id="$style.targetInput"
            :hide-details="true"
            @input="$emit('update:fetchValue',$event)"
          >
            <template v-slot:prepend-inner>
              <base-img width="32" height="32" class="my-icons-search mr-4" />
            </template>
          </v-text-field>
          <base-img
            width="44"
            height="36"
            class="my-icons-statistics"
            @click.native="$router.push('/moneyInformation')"
          />
        </v-sheet>
        <v-skeleton-loader :loading="loading" tile type="list-item">
          <v-sheet
            class
            :style="{ fontSize: $V(20), color: '#999999', lineHeight: $V(28) }"
          >共{{len}}条</v-sheet>
        </v-skeleton-loader>
      </v-sheet>
    </template>
    <v-list class="pa-0" style="borderRadius:0">
      <v-list-item
        :ripple="true"
        class="px-8"
        v-for="(item, index) in items"
        :key="index"
        @click="fetchItems(index)"
      >
        <v-list-item-title
          :style="{
            height: $V(80),
            fontSize: $V(28),
            borderBottom: '1px solid #e5e5e5',
            color: currentItem === index ? '#2775c7' : '#666',
          }"
          class="d-flex align-center justify-space-between"
        >
          {{ item.title }}
          <base-img
            v-show="currentItem === index"
            width="28"
            height="18"
            class="my-icons-current-list"
          />
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    len: Number
  },
  data: () => ({
    currentItem: 0,
    items: [
      { title: "全部" },
      { title: "进行中" },
      { title: "完成" },
      { title: "异常" }
    ]
  }),
  methods: {
    fetchItems(index) {
      this.currentItem = index;
      this.$emit("update:fetchItem", index);
    }
  }
};
</script>
<style lang="scss" module>
.meun {
  left: 0 !important;
  min-width: 100% !important;
  width: 100% !important;
  top: 96px !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  border-top: 1px solid #e5e5e5;
}
.header {
  position: fixed;
  z-index: 6;
  left: 0;
  top: 0;
  width: 100%;
  height: 124px;
  border-radius: 0;
  background-color: #fff;
}
#targetInput {
  color: #666;
  font-size: 28px;
  line-height: 28px;
  padding: 0;
  ::placeholder {
    line-height: 28px;
  }
}
</style>
<style lang="scss">
#search-bar {
  .v-btn.v-size--default {
    font-size: 28px !important;
    color: #666666;
  }
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot,
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 24px !important;
  }
}
</style>
