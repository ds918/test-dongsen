<template>
  <div class="pt-9 px-8" id="track-project">
    <div :class="$style.item">
      <div>项目</div>
      <div>2020年湖北乐聊社区微信小程序项目</div>
    </div>
    <div :class="$style.item">
      <div>提交人</div>
      <div>张晓芸</div>
    </div>
    <div :class="$style.item">
      <div>提交时间</div>
      <div>2020-03-12</div>
    </div>
    <div :class="$style.block">
      <div :class="$style.contents">记录内容</div>
      <v-textarea
        class="ma-0 pa-0"
        background-color="#fff"
        hide-details
        :height="$V(245)"
        no-resize
        placeholder="请输入记录内容"
      ></v-textarea>
    </div>
    <v-btn
      class="pa-0 mt-10"
      width="100%"
      :height="$V(88)"
      :style="{borderRadius:$V(8),color:'#fff',fontSize:$V(32)}"
      color="#376abb"
    >提 交</v-btn>
  </div>
</template>
<script>
export default {};
</script>
<style module lang="scss">
.item {
  height: 65px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 28px;
  margin-bottom: 35px;
  border-bottom: 2px solid #e5e5e5;
  div:nth-child(1) {
    color: #666;
  }
  div:nth-child(2) {
    color: #333;
  }
}
.block {
  .contents {
    color: #666;
    margin-bottom: 32px;
    font-size: 28px;
  }
}
</style>
<style lang="scss">
#track-project {
  textarea {
    line-height: 34px !important;
    font-size: 28px !important;
    word-break: break-all;
    height: 245px;
  }
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot,
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 0;
  }
  // .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  //   color: #e5e5e5 !important;
  // }
}
</style>