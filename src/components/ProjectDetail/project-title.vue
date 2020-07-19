<template>
  <v-card flat>
    <v-card-title
      class="pa-0 mb-7 d-flex flex-nowrap"
      :style="{color:'#333333',fontSize:$V(32),lineHeight:$V(34)}"
    >
      <base-img
        width="36"
        height="34"
        class="my-icons-company-title"
        :style="{marginRight:$V(18)}"
      />
      <div class="font-weight-medium">{{list.companyName}}</div>
    </v-card-title>
    <v-card-text class="pb-6 pt-0 d-flex px-0 align-center">
      <div class="mr-4" :class="[$style.titleSize]">客户名称</div>
      <v-btn
        to="/CustomerInformation"
        :height="$V(48)"
        outlined
        color="#376abb"
        :style="{borderRadius:$V(8)}"
      >
        <base-img width="24" height="24" class="my-icons-company" />
        <div class="ml-2 mr-6" :class="$style.companySize">{{list.companyName}}</div>
        <base-img width="10" height="18" class="my-icons-arrow-right" />
      </v-btn>
    </v-card-text>
    <v-card-text class="pb-8 pt-0 d-flex px-0 align-center justify-space-between">
      <div class="d-flex align-center">
        <div class="mr-4" :class="[$style.titleSize]">签订时间</div>
        <div :class="[$style.contentSize]">{{list.time.replace(/-/g,'/')}}</div>
      </div>
      <v-sheet :min-width="$V(300)" class="d-flex align-center text-left">
        <div class="mr-4" :class="[$style.titleSize]">负责人</div>
        <div :class="[$style.contentSize]">{{list.name.join('/')}}</div>
      </v-sheet>
    </v-card-text>
    <v-card-text class="pb-8 pt-0 d-flex px-0 align-center justify-space-between">
      <div class="d-flex align-center">
        <div class="mr-4" :class="[$style.titleSize]">总款项</div>
        <div :class="[$style.contentSize]">{{list.price}}元</div>
      </div>
      <v-sheet :min-width="$V(300)" class="d-flex align-center text-left">
        <div class="mr-4" :class="[$style.titleSize]">剩余款项</div>
        <div :class="[$style.contentSize]">{{list.price}}元</div>
      </v-sheet>
    </v-card-text>
    <v-card-text class="pb-8 pt-0 d-flex px-0 align-center justify-space-between">
      <div class="d-flex align-center">
        <div class="mr-4" :class="[$style.titleSize]">正式版计划时间</div>
        <div :class="[$style.contentSize]">{{list.time.replace(/-/g,'/')}}</div>
      </div>
      <v-sheet :min-width="$V(300)" class="d-flex align-center text-left">
        <div class="mr-4" :class="[$style.titleSize]">尾款计划时间</div>
        <div :class="[$style.contentSize]">{{list.time.replace(/-/g,'/')}}</div>
      </v-sheet>
    </v-card-text>
    <v-card-text class="pb-8 pt-0 d-flex px-0 align-center justify-space-between">
      <div class="d-flex align-center">
        <div class="mr-4" :class="[$style.titleSize]">当前到款金额</div>
        <div :class="[$style.contentSize]">{{list.price}}元</div>
      </div>
      <v-sheet :min-width="$V(300)" class="d-flex align-center text-left">
        <div class="mr-4" :class="[$style.titleSize]">计划到款时间</div>
        <div :class="[$style.contentSize]">{{list.time.replace(/-/g,'/')}}</div>
      </v-sheet>
    </v-card-text>
    <v-card-text class="pb-0 pt-0 d-flex px-0 align-center justify-space-between">
      <div class="d-flex align-center">
        <div class="mr-4" :class="[$style.titleSize]">项目来源</div>
        <div :class="[$style.contentSize]" class="d-flex align-center">
          <div class="mr-4">招标</div>
          <base-img width="27" height="27" class="my-icons-where-from" />
        </div>
      </div>
      <v-sheet :min-width="$V(300)" class="d-flex align-center text-left">
        <div class="mr-4" :class="[$style.titleSize]">发票类型</div>
        <div :class="[$style.contentSize]">普通发票</div>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    list: Object
  }
};
</script>

<style module lang="scss">
.titleSize {
  color: #999999;
  line-height: 34px;
  @include fontStyle();
}
.companySize {
  line-height: 34px;
  @include fontStyle();
}
.contentSize {
  color: #333333;
  line-height: 34px;
  @include fontStyle();
}
</style>