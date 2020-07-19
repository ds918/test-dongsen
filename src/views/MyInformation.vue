<template>
  <div>
    <v-card
      class="d-flex align-center justify-center tile"
      :height="$V(480)"
      flat
      :img="require('@/assets/img/bg-750-480.png')"
      tile
    >
      <v-sheet
        color="transparent"
        :width="$V(160)"
        class="d-flex flex-column align-center justify-space-between"
      >
        <v-avatar color="#fff" :size="$V(160)">
          <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        <div :style="{color: '#fff',fontSize: $V(36)}" class="mt-8 mb-6">尤雨溪</div>
        <v-sheet
          class="px-4"
          :style="{fontSize: $V(24),borderRadius: $V(8),lineHeight: $V(40),color: '#fff'}"
          :height="$V(40)"
          color="#ef9637"
        >会计</v-sheet>
      </v-sheet>
      <div class="elevation-3" :class="$style.workSpace" position="absoulte">财务部</div>
      <div :class="$style.flot" class="d-flex">
        <div :class="$style.items">
          <div>59</div>
          <div>款项</div>
        </div>
        <div :class="$style.items">
          <div>26</div>
          <div>发票</div>
        </div>
      </div>
    </v-card>
    <div :class="$style.content">
      <v-dialog v-model="dialog" :width="$V(600)" :style="{borderRadius:$V(8)}">
        <template v-slot:activator="{ on }">
          <div v-ripple v-on="on" class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <base-img width="31" height="34" class="my-icons-clear-31-34" />
              <div class="ml-6">清除缓存</div>
            </div>
            <div class="d-flex align-center">
              <div class="mr-6">3.12M</div>
              <base-img width="10" height="18" class="my-icons-arrow-right-grey" />
            </div>
          </div>
        </template>
        <v-card :class="$style.dialog_content">
          <div
            :style="{fontSize: $V(28),color: '#666',marginBottom: $V(80)}"
            class="text-center"
          >确定清除缓存吗？</div>
          <div class="d-flex align-center justify-space-between">
            <v-btn
              :style="{fontSize:$V(28),borderRadius:$V(8)}"
              :width="$V(240)"
              :height="$V(80)"
              color="#999999"
              depressed
              outlined
              @click="dialog = false"
            >取消</v-btn>
            <v-btn
              :style="{fontSize:$V(28),borderRadius:$V(8),color:'#fff'}"
              :width="$V(240)"
              :height="$V(80)"
              color="#376abb"
              depressed
              @click="dialog = false"
            >确定</v-btn>
          </div>
        </v-card>
      </v-dialog>
      <div v-ripple class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <base-img width="34" height="28" class="my-icons-aboutus-34-28" />
          <div class="ml-6">关于我们</div>
        </div>
        <div class="d-flex align-center">
          <base-img width="10" height="18" class="my-icons-arrow-right-grey" />
        </div>
      </div>
      <div
        v-ripple
        @click="$router.push('/invoiceInformation')"
        class="d-flex align-center justify-space-between"
      >
        <div class="d-flex align-center">
          <base-img width="28" height="28" class="my-icons-form-28" />
          <div class="ml-6">公司开票信息</div>
        </div>
        <div class="d-flex align-center">
          <base-img width="10" height="18" class="my-icons-arrow-right-grey" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>
<style module lang="scss">
.workSpace {
  position: absolute;
  top: 24px;
  left: 0;
  background-color: #ffffff;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #376abb;
  padding: 11px 31px;
  line-height: 1;
  border-radius: 0px 8px 8px 0px !important;
}
.flot {
  width: 686px;
  height: 145px;
  background-color: #ffffff;
  box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px !important;
  position: absolute;
  bottom: -72.5px;
  left: 0;
  right: 0;
  margin: 0 auto;

  .items {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 32px 0;
    > div:nth-child(1) {
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #376abb;
    }
    > div:nth-child(2) {
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #999999;
    }
    &:nth-child(1) {
      border-right: 2px solid #e5e5e5;
    }
  }
}
.content {
  padding-top: 92px;
  padding-left: 32px;
  padding-right: 32px;
  line-height: 1;
  font-size: 28px;
  color: #666;
  > div {
    height: 100px;
    border-bottom: 2px solid #e5e5e5;
  }
}
.dialog_content {
  padding: 80px 40px 40px;
}
</style>