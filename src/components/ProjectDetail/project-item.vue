<template>
  <div :class="[$style.apps, current === len ? 'mb-0' : '']">
    <div
      :class="[
        $style.outer,
        current === 0 ? $style.grey : current === 1 ? $style.orange : $style.red
      ]"
      class="pa-6"
    >
      <div :class="$style.title">
        今日与客户方沟通后确定了项目具体流程，将于11月10签订合同之后支付项目预付款今日与客户方沟通后确定了项目具体流程，将于11月10签订合同之后支付项目预付款.
      </div>
      <div class="d-flex aligin-center justify-space-between">
        <div class="d-flex align-center">
          <div :class="$style.author" class="d-flex align-center">
            <base-img
              :style="{ marginRight: $V(16) }"
              width="24"
              height="24"
              class="my-icons-edit-name"
            />张晓芸
          </div>
          <div :class="$style.time">2019/08/02</div>
        </div>
        <v-btn
          v-show="current !== 0"
          class="px-3 py-1"
          :class="current === 1 ? $style.delay : $style.passed"
          :style="{ fontSize: $V(20) }"
          :ripple="false"
          depressed
          :text-color="current === 2 ? '#ef9637' : '#bb3737'"
          >{{ current === 1 ? "延期" : "异常" }}</v-btn
        >
      </div>
    </div>
    <div :class="[$style.package, $attrs.setHeader]">
      <base-img
        width="28"
        height="25"
        :class="
          current === 0
            ? 'my-icons-grey-package'
            : current === 1
            ? 'my-icons-orange-package'
            : 'my-icons-red-package'
        "
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    current: Number,
    len: Number
  }
};
</script>
<style module lang="scss">
.first {
  .package {
    height: 100px;
  }
}
.apps {
  position: relative;
  margin-bottom: 24px;
}
.grey {
  background-color: rgb(235, 240, 248);
  border-radius: 8px 0px 0px 8px;
  border-left: solid 2px #376abb;
  border-top: solid 2px #376abb;
  border-bottom: solid 2px #376abb;
}
.orange {
  background-color: rgb(253, 244, 235);
  border-radius: 8px 0px 0px 8px;
  border-left: solid 2px #ef9637;
  border-top: solid 2px #ef9637;
  border-bottom: solid 2px #ef9637;
}
.red {
  background-color: rgb(248, 235, 235);
  border-radius: 8px 0px 0px 8px;
  border-left: solid 2px #bb3737;
  border-top: solid 2px #bb3737;
  border-bottom: solid 2px #bb3737;
}
.outer {
  position: relative;
}
.title {
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 42px;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 30px;
}
.author {
  @include fontStyle();
  color: #666;
  margin-right: 40px;
}
.time {
  @include fontStyle();
  color: #999;
}
.package {
  position: absolute;
  top: calc(25px + 30px - 100%);
  left: -80px;
  height: calc(100% + 34px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 80px;
  &::before {
    content: "";
    height: calc(100% - 28px - 25px);
    position: absolute;
    width: 2px;
    background-color: rgba(0, 0, 0, 0.12);
    bottom: 25px;
  }
  &::after {
    content: "";
    height: 2px;
    position: absolute;
    width: 16px;
    background-color: rgba(0, 0, 0, 0.12);
    bottom: 12.5px;
    width: calc(50% - 14px);
    right: 0;
  }
}
.delay {
  border: solid 2px #ef9637;
  color: #ef9637 !important;
}
.passed {
  border: solid 2px #bb3737;
  color: #bb3737 !important;
}
</style>
<style lang="scss">
.setHeader {
  position: absolute;
  top: calc(25px + 30px - 220px);
  left: -80px;
  height: calc(220px + 34px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 80px;
  &::before {
    content: "";
    height: calc(220px - 28px - 25px);
    position: absolute;
    width: 2px;
    background-color: rgba(0, 0, 0, 0.12);
    bottom: 25px;
  }
}
</style>
