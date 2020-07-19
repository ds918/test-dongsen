<template>
  <v-card class="elevation-0" id="project-tab">
    <v-tabs
      v-model="tab"
      color="#376abb"
      slider-color="#376abb"
      grow
      background-color="#f2f2f2"
      :height="$V(80)"
    >
      <v-tab
        class="ma-0 pa-0"
        :style="{ fontSize: $V(28) }"
        v-for="(item, index) in list.persent"
        :key="index"
        >{{ item | persent(index) }}</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item class="pt-6">
        <v-timeline
          v-for="(item, index) in list.items"
          :key="index"
          dense
          align-top
          class="pa-0"
        >
          <v-timeline-item
            :class="[index + 1 < list.step ? $style.timePassed : '']"
            class="pa-0"
          >
            <template v-slot:icon>
              <v-sheet
                :width="$V(56)"
                :height="$V(56)"
                class="d-flex align-center justify-center elevation-0"
                :style="{
                  borderRadius: '50%',
                  borderColor: index === 1 ? '#376abb' : ''
                }"
                :class="[index === 1 ? $style.borderStyle : '']"
                color="#e5e5e5"
              >
                <base-img
                  :width="index === 0 ? 20 : 25"
                  :height="index === 0 ? 14 : 31"
                  :class="[
                    index === 0
                      ? 'my-icons-complete'
                      : index === 1
                      ? 'my-icons-money-active'
                      : 'my-icons-money-grey'
                  ]"
                />
              </v-sheet>
            </template>
            <v-expansion-panels flat tile :value="value === index + 1">
              <v-expansion-panel>
                <v-expansion-panel-header
                  :class="[index + 1 < list.step ? $style.timePassed : '']"
                  @click="value = value === index + 1 ? '0' : index + 1"
                  hide-actions
                  class="pa-0"
                  :ripple="true"
                >
                  <div
                    class="py-8 pr-8 d-flex flex-column justify-space-between"
                    :class="$style.itemSize"
                  >
                    <div class="d-flex align-center justify-space-between">
                      <div>
                        <!-- <span :class="$style.fontSize">{{
                          index + 1 === 1
                            ? "预付款"
                            : index + 1 === 2
                            ? "开发款"
                            : "验收款"
                        }}</span -->
                        <span :class="$style.fontSize">{{ item.name }}</span
                        >（20%）
                        <span :class="$style.fontSize">8000</span>
                      </div>
                      <v-chip
                        v-if="index + 1 < list.step"
                        :style="{ fontSize: $V(24) }"
                        label
                        color="#fafafa"
                        text-color="#666666"
                      >
                        已完成
                        <base-img
                          width="19"
                          height="12"
                          class="my-icons-arrow-down arrowAnimate-active"
                          :style="{ marginLeft: $V(18) }"
                          :class="
                            index + 1 === value
                              ? 'arrowAnimate-enter'
                              : 'arrowAnimate-leave'
                          "
                        />
                      </v-chip>
                      <v-dialog
                        v-if="index + 1 === list.step"
                        v-model="dialog"
                        :width="$V(600)"
                        :style="{ borderRadius: $V(8) }"
                      >
                        <template v-slot:activator="{ on }">
                          <v-btn
                            v-on="on"
                            outlined
                            color="#376abb"
                            :style="{ fontSize: $V(24), borderRadius: $V(8) }"
                            @click.stop
                            >执行</v-btn
                          >
                        </template>
                        <v-card :class="$style.dialog_content">
                          <div :class="$style.content">
                            <v-radio-group
                              v-model="radioGroup"
                              :hide-details="true"
                              class="ma-0 pa-0 radioGroup"
                              mandatory
                              row
                              :height="$V(48)"
                            >
                              <v-radio
                                on-icon="mdi-check-circle"
                                off-icon="mdi-radiobox-blank mdi-dark mdi-inactive"
                                color="#376abb"
                                background-color="#fff"
                                label="完成"
                                value="完成"
                                :ripple="false"
                              ></v-radio>
                              <v-radio
                                on-icon="mdi-check-circle"
                                off-icon="mdi-radiobox-blank mdi-dark mdi-inactive"
                                color="#376abb"
                                background-color="#fff"
                                label="延期"
                                value="延期"
                                :ripple="false"
                              ></v-radio>
                              <v-radio
                                on-icon="mdi-check-circle"
                                off-icon="mdi-radiobox-blank mdi-dark mdi-inactive"
                                color="#376abb"
                                background-color="#fff"
                                label="异常"
                                value="异常"
                                :ripple="false"
                              ></v-radio>
                            </v-radio-group>
                          </div>
                          <div
                            :class="$style.fetchValue"
                            v-show="radioGroup === '延期'"
                          >
                            <div
                              class="d-flex align-start justify-space-between mb-8"
                              @click="$emit('update:showPopup', true)"
                              :style="{
                                fontSize: $V(28),
                                height: $V(64),
                                borderBottom: '1px solid #e5e5e5'
                              }"
                            >
                              <div style="color: #666">延期时间</div>
                              <div
                                :style="{
                                  color:
                                    showDate === '请选择日期' ? '#999' : '#666'
                                }"
                                class="d-flex align-center"
                              >
                                <div>{{ showDate }}</div>
                                <base-img
                                  width="10"
                                  height="18"
                                  class="my-icons-arrow-right-grey ml-6"
                                />
                              </div>
                            </div>
                            <v-textarea
                              class="ma-0 pa-0"
                              background-color="#fff"
                              solo
                              flat
                              hide-details
                              :height="$V(200)"
                              no-resize
                              placeholder="请填写延期理由"
                              :style="{
                                borderRadius: $V(8),
                                border: '1px solid #e5e5e5'
                              }"
                            ></v-textarea>
                          </div>
                          <div
                            :class="$style.fetchValue"
                            v-show="radioGroup === '异常'"
                          >
                            <div
                              class="d-flex align-start justify-space-between mb-8"
                              @click="$emit('update:showPopupError', true)"
                              :style="{
                                fontSize: $V(28),
                                height: $V(64),
                                borderBottom: '1px solid #e5e5e5'
                              }"
                            >
                              <div style="color: #666">异常时间</div>
                              <div
                                :style="{
                                  color:
                                    showDateError === '请选择日期'
                                      ? '#999'
                                      : '#666'
                                }"
                                class="d-flex align-center"
                              >
                                <div>{{ showDateError }}</div>
                                <base-img
                                  width="10"
                                  height="18"
                                  class="my-icons-arrow-right-grey ml-6"
                                />
                              </div>
                            </div>
                            <v-textarea
                              class="ma-0 pa-0"
                              background-color="#fff"
                              solo
                              flat
                              hide-details
                              :height="$V(200)"
                              no-resize
                              placeholder="请填写异常理由"
                              :style="{
                                borderRadius: $V(8),
                                border: '1px solid #e5e5e5'
                              }"
                            ></v-textarea>
                          </div>
                          <div
                            class="d-flex align-center justify-space-between"
                          >
                            <v-btn
                              :style="{ fontSize: $V(28), borderRadius: $V(8) }"
                              :width="$V(240)"
                              :height="$V(80)"
                              color="#999999"
                              depressed
                              outlined
                              @click="dialog = false"
                              >取消</v-btn
                            >
                            <v-btn
                              :style="{
                                fontSize: $V(28),
                                borderRadius: $V(8),
                                color: '#fff'
                              }"
                              :width="$V(240)"
                              :height="$V(80)"
                              color="#376abb"
                              depressed
                              @click="dialog = false"
                              >确定</v-btn
                            >
                          </div>
                        </v-card>
                      </v-dialog>
                      <v-chip
                        v-if="index + 1 > list.step"
                        :style="{ fontSize: $V(24) }"
                        label
                        color="#fafafa"
                        text-color="#666666"
                        >执行</v-chip
                      >
                    </div>
                    <div>合同规定时间：2019/11/11</div>
                    <div>实际到款时间：2019/11/11</div>
                  </div>
                </v-expansion-panel-header>
                <transition name="itemListAnimate">
                  <div
                    :style="{ paddingBottom: $V(90) }"
                    :class="[index + 1 < list.step ? $style.timePassed : '']"
                    v-if="value === index + 1"
                  >
                    <template v-for="(item, index) in item.workspace">
                      <ProjectItem
                        :key="index"
                        :current="index"
                        :len="item.length"
                        :setHeader="index === 0 ? 'setHeader' : ''"
                      />
                    </template>
                    <div
                      :class="$style.add"
                      class="d-flex align-center"
                      @click.stop="$router.push('/trackProject')"
                    >
                      <div :class="$style['add-img']">
                        <!-- <base-img width="32" height="32" class="my-icons-add-items" /> -->
                        +
                      </div>
                      <div style="line-height: 1">添加跟踪记录</div>
                    </div>
                  </div>
                </transition>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
        </v-timeline>
      </v-tab-item>
      <v-tab-item>
        <v-timeline
          v-for="(item, index) in 3"
          :key="index"
          dense
          align-top
          class="pa-0"
        >
          <v-timeline-item
            :class="[index + 1 === 1 ? $style.timePassed : '']"
            class="pa-0"
          >
            <template v-slot:icon>
              <v-sheet
                :width="$V(56)"
                :height="$V(56)"
                class="d-flex align-center justify-center elevation-1"
                :style="{
                  borderRadius: '50%',
                  borderColor: index === 1 ? '#376abb' : ''
                }"
                :class="[index === 1 ? $style.borderStyle : '']"
                color="#e5e5e5"
              >
                <base-img
                  :width="index === 0 ? 20 : 25"
                  :height="index === 0 ? 14 : 31"
                  :class="[
                    index === 0
                      ? 'my-icons-complete'
                      : index === 1
                      ? 'my-icons-money-active'
                      : 'my-icons-money-grey'
                  ]"
                />
              </v-sheet>
            </template>
            <v-expansion-panels flat tile :value="value === index + 1">
              <v-expansion-panel>
                <v-expansion-panel-header
                  :class="[index + 1 === 1 ? $style.timePassed : '']"
                  hide-actions
                  class="pa-0"
                >
                  <div
                    class="py-8 pr-8 d-flex flex-column justify-space-between"
                    :class="$style.itemSize"
                  >
                    <div class="d-flex align-center justify-space-between">
                      <div>
                        <span :class="$style.fontSize">{{
                          index + 1 === 1
                            ? "预付款"
                            : index + 1 === 2
                            ? "开发款"
                            : "验收款"
                        }}</span
                        >（20%）
                        <span :class="$style.fontSize">8000</span>
                      </div>
                      <v-chip
                        v-if="index + 1 === 1"
                        :style="{ fontSize: $V(24) }"
                        label
                        color="#fafafa"
                        text-color="#666666"
                        >已完成</v-chip
                      >
                      <v-dialog
                        v-else-if="index + 1 === 2"
                        v-model="dialogs"
                        :width="$V(600)"
                        :style="{ borderRadius: $V(8) }"
                      >
                        <template v-slot:activator="{ on }">
                          <v-btn
                            v-if="index + 1 === 2"
                            v-on="on"
                            outlined
                            color="#376abb"
                            :style="{ fontSize: $V(24), borderRadius: $V(8) }"
                            @click.stop
                            >执行</v-btn
                          >
                        </template>
                        <v-card :class="$style.dialog_content">
                          <div :class="$style.content">
                            <v-radio-group
                              v-model="radioGroups"
                              :hide-details="true"
                              class="ma-0 pa-0 radioGroup radioGroups"
                              mandatory
                              row
                              :height="$V(48)"
                            >
                              <v-radio
                                on-icon="mdi-check-circle"
                                off-icon="mdi-radiobox-blank mdi-dark mdi-inactive"
                                color="#376abb"
                                background-color="#fff"
                                label="完成"
                                value="完成"
                                :ripple="false"
                              ></v-radio>
                              <v-radio
                                on-icon="mdi-check-circle"
                                off-icon="mdi-radiobox-blank mdi-dark mdi-inactive"
                                color="#376abb"
                                background-color="#fff"
                                label="延期"
                                value="延期"
                                :ripple="false"
                              ></v-radio>
                            </v-radio-group>
                          </div>
                          <div
                            :class="$style.fetchValue"
                            v-show="radioGroups === '延期'"
                          >
                            <div
                              class="d-flex align-start justify-space-between mb-8"
                              @click="$emit('update:showPopupMoney', true)"
                              :style="{
                                fontSize: $V(28),
                                height: $V(64),
                                borderBottom: '1px solid #e5e5e5'
                              }"
                            >
                              <div style="color: #666">延期时间</div>
                              <div
                                :style="{
                                  color:
                                    showDateMoney === '请选择日期'
                                      ? '#999'
                                      : '#666'
                                }"
                                class="d-flex align-center"
                              >
                                <div>{{ showDateMoney }}</div>
                                <base-img
                                  width="10"
                                  height="18"
                                  class="my-icons-arrow-right-grey ml-6"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex align-center justify-space-between"
                          >
                            <v-btn
                              :style="{ fontSize: $V(28), borderRadius: $V(8) }"
                              :width="$V(240)"
                              :height="$V(80)"
                              color="#999999"
                              depressed
                              outlined
                              @click="dialogs = false"
                              >取消</v-btn
                            >
                            <v-btn
                              :style="{
                                fontSize: $V(28),
                                borderRadius: $V(8),
                                color: '#fff'
                              }"
                              :width="$V(240)"
                              :height="$V(80)"
                              color="#376abb"
                              depressed
                              @click="dialogs = false"
                              >确定</v-btn
                            >
                          </div>
                        </v-card>
                      </v-dialog>
                      <v-chip
                        v-else
                        :style="{ fontSize: $V(24) }"
                        label
                        color="#fafafa"
                        text-color="#666666"
                        >执行</v-chip
                      >
                    </div>
                    <div>合同规定时间：2019/11/11</div>
                    <div>实际到款时间：2019/11/11</div>
                  </div>
                </v-expansion-panel-header>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
        </v-timeline>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ProjectItem from "@/components/ProjectDetail/project-item";
export default {
  components: {
    ProjectItem
  },
  props: {
    showDate: String,
    showDateError: String,
    showDateMoney: String,
    list: Object
  },
  data() {
    return {
      tab: null,
      value: 0,
      dialog: false,
      dialogs: false,
      radioGroup: "完成",
      radioGroups: "完成"
    };
  },
  filters: {
    persent: function(value, index) {
      const items = ["付款进度", "发票进度"];
      return `${items[index]}（${value}）`;
    }
  }
};
</script>

<style module lang="scss">
.fetchValue {
  margin-bottom: 40px;
  textarea {
    line-height: 34px !important;
    font-size: 28px !important;
    word-break: break-all;
  }
}
.dialog_content {
  padding: 80px 40px 40px;
}
.content {
  margin-bottom: 80px;
  padding-left: 10px;
}
.timePassed {
  background-color: #fafafa;
}
.itemSize {
  @include fontStyle();
  color: #666666;
  min-height: 176px;
}
.fontSize {
  @include fontStyle();
  color: #333333;
  font-size: 28px;
}
.add {
  @include fontStyle();
  font-size: 28px;
  color: #376abb;
  position: relative;
  padding-top: 24px;
}
.add-img {
  position: absolute;
  left: -50px;
  text-align: center;
  line-height: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #376abb;
  bottom: 0;
}
.borderStyle {
  border: 2px solid #376abb;
}
</style>
<style lang="scss">
#project-tab {
  .v-timeline-item__divider {
    padding-top: 32px !important;
  }
  .v-expansion-panel-content__wrap {
    padding: 0 !important;
  }
  .v-timeline:before {
    top: 32px;
    height: calc(100% - 32px);
  }

  .v-timeline-item__dot {
    box-shadow: none !important;
  }
}
.radioGroup {
  .v-input--selection-controls__input {
    margin-right: 24px !important;
  }
  .v-label.theme--light {
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 48px;
    letter-spacing: 0px;
    color: #333333;
  }
  .v-radio.theme--light {
    margin-right: 0 !important;
  }
  .v-input--radio-group__input {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .v-input--selection-controls__input .v-icon {
    font-size: 48px;
  }
}
.radioGroups {
  .v-input--radio-group__input {
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
