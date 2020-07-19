<template>
  <v-sheet :style="{ paddingTop: $V(124) }">
    <SearchBar
      :fetchItem.sync="fetchItem"
      :fetchValue.sync="fetchValue"
      @fetchSearch="fetchSearch"
      :loading="loading"
      :len="list.length"
    />
    <v-skeleton-loader
      class="px-8"
      :loading="loading"
      tile
      type="list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line"
    >
      <!-- <van-pull-refresh
        pulling-text="下拉刷新"
        loosing-text="释放刷新"
        v-model="isLoading"
        @refresh="fetchReflesh"
      >
        <van-list
          v-model="loadMore"
          :finished="finished"
          finished-text="没有更多了"
          @load="fetchLoadMore"
          :immediate-check="false"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        > -->
      <div :class="$style.wrapperInner">
        <template v-if="list && list.length">
          <ProjectItems v-for="item in list" :item="item" :key="item.id" />
        </template>
        <template v-else>
          <div
            :class="$style.listNone"
            class="d-flex align-center justify-center"
          >
            暂无数据
          </div>
        </template>
      </div>
      <!-- </van-list> -->
      <!-- </van-pull-refresh> -->
    </v-skeleton-loader>
  </v-sheet>
</template>
<script>
import Vue from "vue";
import ProjectItems from "@/components/ProjectList/project-items";
import SearchBar from "@/components/ProjectList/search-bar";
import { PullRefresh, List } from "vant";
Vue.use(PullRefresh).use(List);
export default {
  components: {
    ProjectItems,
    SearchBar
  },
  data: () => ({
    fetchItem: 0, // 当前type
    fetchValue: "",
    list: [], // 项目详情列表
    loading: true, // 显示骨架装
    type: 0, // 项目状况
    isLoading: false, // 下拉刷新
    loadMore: false, // 上拉加载
    finished: false, // 上拉加载是否结束
    error: false // 上拉加载失败
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() /*获取列表数据*/ {
      this.loading = true;
      let {
        data: { data, code }
      } = await this.$_http.post("ProjectList", {
        type: this.type
      });
      this.loading = false;
      if (code === 1) {
        this.list = data.list;
      }
    },
    async fetchReflesh() /*下拉刷新*/ {
      let {
        data: { data, code }
      } = await this.$_http.post("ProjectList", {
        type: this.type
      });
      this.isLoading = false;
      if (code === 1) {
        this.list = data.list;
      }
    },
    async fetchLoadMore() /*上拉加载*/ {
      let {
        data: { data, code }
      } = await this.$_http.post("ProjectList", {
        type: this.type
      });
      this.loadMore = false;
      if (code === 1) {
        this.list = this.list.concat(data.list);
      }
    },
    fetchSearch() {
      alert(1);
    }
  },
  watch: {
    fetchItem: function(to) {
      this.type = to;
      this.fetchData();
    },
    fetchValue: function(to) {
      this.fetchData(to);
    }
  }
};
</script>
<style lang="scss" module>
.listNone {
  height: calc(100vh - 124px - 98px);
}
.wrapperInner {
  min-height: calc(100vh - 124px - 98px);
}
</style>
