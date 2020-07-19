<template>
  <v-sheet>
    <v-skeleton-loader
      :loading="loading"
      class="pa-8"
      type="heading,list-item@2,table-row-divider@6"
    >
      <ProjectTitle :list="list" />
    </v-skeleton-loader>
    <v-skeleton-loader
      :class="loading ? 'px-8' : ''"
      :loading="loading"
      type="sentences,image,list-item,image,list-item,image"
    >
      <ProjectTab
        :showPopup.sync="showPopup"
        :showPopupError.sync="showPopupError"
        :showPopupMoney.sync="showPopupMoney"
        :showDate="showDate"
        :showDateError="showDateError"
        :showDateMoney="showDateMoney"
        :list="list"
      />
    </v-skeleton-loader>
    <van-popup v-model="showPopup" position="bottom" :style="{ height: '35%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm"
        @cancel="showPopup = false"
      />
    </van-popup>
    <van-popup
      v-model="showPopupError"
      position="bottom"
      :style="{ height: '35%' }"
    >
      <van-datetime-picker
        v-model="currentDateError"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmError"
        @cancel="showPopupError = false"
      />
    </van-popup>
    <van-popup
      v-model="showPopupMoney"
      position="bottom"
      :style="{ height: '35%' }"
    >
      <van-datetime-picker
        v-model="currentDateMoney"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmMoney"
        @cancel="showPopupMoney = false"
      />
    </van-popup>
  </v-sheet>
</template>
<script>
import ProjectTitle from "@/components/ProjectDetail/project-title";
import ProjectTab from "@/components/ProjectDetail/project-tab";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(Popup);
Vue.use(DatetimePicker);
export default {
  name: "projectDetail",
  props: {
    id: String,
  },
  components: {
    ProjectTitle,
    ProjectTab,
  },
  data: () => ({
    showPopup: false,
    showPopupError: false,
    showPopupMoney: false,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(),
    currentDateError: new Date(),
    currentDateMoney: new Date(),
    showDate: "请选择日期",
    showDateError: "请选择日期",
    showDateMoney: "请选择日期",
    list: null, // 公司信息
    loading: true, // 骨架装显示
  }),
  activated() {
    this.fetchData();
  },
  methods: {
    confirm(value) {
      this.showDate = this.$_moment(value).format("YYYY-MM-DD");
      this.showPopup = false;
    },
    confirmError(value) {
      this.showDateError = this.$_moment(value).format("YYYY-MM-DD");
      this.showPopupError = false;
    },
    confirmMoney(value) {
      this.showDateMoney = this.$_moment(value).format("YYYY-MM-DD");
      this.showPopupMoney = false;
    },
    async fetchData() {
      const {
        data: { data },
      } = await this.$_http.post("ProjectDetail", {
        id: this.id,
      });
      console.log(data);
      this.loading = false;
      this.list = data.list;
    },
  },
  watch: {
    $route: function (to, from) {
      if (from.name === "projectList") {
        this.loading = true;
      }
    },
  },
};
</script>
