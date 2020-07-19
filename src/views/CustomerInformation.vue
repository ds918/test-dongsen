<template>
  <div>
    <div class="d-flex align-center justify-space-between px-8" :class="$style.title">
      <div class="d-flex align-center">
        <base-img width="36" height="36" class="my-icons-company-36 mr-5" />
        <div style="line-height: 18px">湖北讯乐科技有限公司</div>
      </div>
      <base-img
        v-copy
        data-clipboard-text="湖北讯乐科技有限公司"
        width="28"
        height="28"
        class="my-icons-copy-active-28"
      />
    </div>
    <div class="px-8 py-6" :class="$style.content">
      <v-btn
        :style="{ borderRadius: $V(8), fontSize: $V(28) }"
        color="#376abb"
        outlined
        width="100%"
        :height="$V(72)"
        class="mb-11"
        @click.stop="dialog = true"
      >
        <base-img width="24" height="24" class="my-icons-add-24 mr-6" />新增联系人
      </v-btn>
      <template v-for="(item, index) in items">
        <div
          :key="index"
          class="d-flex justify-space-between align-start mb-9"
          :style="{
            fontSize: $V(28),
            height: $V(64),
            color: '#666',
            borderBottom: '1px solid #e4e4e4',
            lineHeight: 1
          }"
        >
          <div class="d-flex justify-space-between align-center">
            <base-img width="24" height="24" class="my-icons-person-24 mr-4" />
            <div>{{ item.job }}：</div>
            <div style="color: #333">{{ item.name }}</div>
            <base-img width="24" height="24" class="my-icons-phone-24 ml-8 mr-4" />
            <a
              style="color: #376abb,text-decoration:underline"
              :href="`tel:${item.phone}`"
            >{{ item.phone }}</a>
          </div>
          <div class="d-flex justify-space-between align-center">
            <base-img
              :data-clipboard-text="item.phone"
              v-copy
              width="28"
              height="28"
              class="my-icons-copy-grey-28 mr-8"
            />
            <base-img
              @click.stop.native="dialogs = true"
              width="27"
              height="27"
              class="my-icons-where-from"
            />
          </div>
        </div>
      </template>
      <div
        class="d-flex align-start mb-9"
        :style="{
          fontSize: $V(28),
          color: '#666',
          borderBottom: '1px solid #e4e4e4',
          lineHeight: 1
        }"
      >
        <base-img width="21" height="26" class="my-icons-local-21-26 mr-4" />
        <div style="width:100%" class="mb-8">
          <div class="d-flex justify-space-between align-center mb-6">
            <div>客户地址</div>
            <base-img width="27" height="27" class="my-icons-where-from" />
          </div>
          <div style="color:#333" class="d-flex align-center">
            <div class="mr-4">湖北省武汉市江夏区高新大道32号</div>
            <div style="color: #376abb">地图 ></div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-start"
        :style="{
          fontSize: $V(28),
          color: '#666',
          borderBottom: '1px solid #e4e4e4',
          lineHeight: 1
        }"
      >
        <base-img width="24" height="24" class="my-icons-page-24 mr-4" />
        <div style="width:100%">
          <div class="d-flex justify-space-between align-center mb-6">
            <div>开票信息</div>
            <div class="d-flex justify-space-between align-center">
              <base-img
                v-copy
                data-clipboard-text="单位名称：湖北讯乐科技有限公司"
                width="28"
                height="28"
                class="my-icons-copy-grey-28 mr-8"
              />
              <base-img
                @click.stop.native="dialoger = true"
                width="27"
                height="27"
                class="my-icons-where-from"
              />
            </div>
          </div>
          <div :style="{ color: '#333', lineHeight: $V(48) }" :class="$style.quote">
            <p>单位名称：湖北讯乐科技有限公司</p>
            <p>纳税人识别号：0289378479768389X9</p>
            <p>地址：湖北省武汉市江夏区高新大道32号</p>
            <p>电话：02789376</p>
            <p>开户行：中国工商银行武汉市江夏区支行</p>
            <p>账号：300287629991354</p>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" :width="$V(600)" :style="{ borderRadius: $V(8) }">
      <v-card id="custo-inp" :class="$style.dialog_content">
        <div :class="$style.content" :style="{ fontSize: $V(28), color: '#666', lineHeight: '1' }">
          <div :class="$style.create" class="text-center">新建联系人</div>
          <div :class="$style.items" class="d-flex justify-space-between mb-9">
            <div>姓名</div>
            <v-text-field
              class="ma-0 pa-0"
              placeholder="请填写姓名"
              solo
              flat
              :id="$style.targetInput1"
              :hide-details="true"
              :width="$V(100)"
              reverse
              :height="$V(28)"
              type="text"
            ></v-text-field>
          </div>
          <div :class="$style.items" class="d-flex justify-space-between mb-9">
            <div>职务</div>
            <v-text-field
              class="ma-0 pa-0"
              placeholder="请填写职务"
              solo
              flat
              :id="$style.targetInput2"
              :hide-details="true"
              :width="$V(100)"
              reverse
              :height="$V(28)"
              type="text"
            ></v-text-field>
          </div>
          <div :class="$style.items" class="d-flex justify-space-between">
            <div>电话</div>
            <v-text-field
              class="ma-0 pa-0"
              placeholder="请填写手机号码"
              solo
              flat
              :id="$style.targetInput3"
              :hide-details="true"
              :width="$V(100)"
              reverse
              :height="$V(28)"
              type="number"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex align-center justify-space-between">
          <v-btn
            :style="{ fontSize: $V(28), borderRadius: $V(8) }"
            :width="$V(240)"
            :height="$V(80)"
            color="#999999"
            depressed
            outlined
            @click="dialog = false"
          >取消</v-btn>
          <v-btn
            :style="{ fontSize: $V(28), borderRadius: $V(8), color: '#fff' }"
            :width="$V(240)"
            :height="$V(80)"
            color="#376abb"
            depressed
            @click="dialog = false"
          >确定</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogs" :width="$V(600)" :style="{ borderRadius: $V(8) }">
      <v-card id="custo-inp" :class="$style.dialog_content">
        <div :class="$style.content" :style="{ fontSize: $V(28), color: '#666', lineHeight: '1' }">
          <div :class="$style.create" class="text-center">编辑联系人</div>
          <div :class="$style.items" class="d-flex justify-space-between mb-9">
            <div>姓名</div>
            <v-text-field
              class="ma-0 pa-0"
              placeholder="请填写姓名"
              solo
              flat
              :id="$style.targetInput4"
              :hide-details="true"
              :width="$V(100)"
              reverse
              :height="$V(28)"
              type="text"
              value="张晓芸"
            ></v-text-field>
          </div>
          <div :class="$style.items" class="d-flex justify-space-between mb-9">
            <div>职务</div>
            <v-text-field
              class="ma-0 pa-0"
              placeholder="请填写职务"
              solo
              flat
              :id="$style.targetInput5"
              :hide-details="true"
              :width="$V(100)"
              reverse
              :height="$V(28)"
              type="text"
              value="项目经理"
            ></v-text-field>
          </div>
          <div :class="$style.items" class="d-flex justify-space-between">
            <div>电话</div>
            <v-text-field
              class="ma-0 pa-0"
              placeholder="请填写手机号码"
              solo
              flat
              :id="$style.targetInput6"
              :hide-details="true"
              :width="$V(100)"
              reverse
              :height="$V(28)"
              type="number"
              value="13276893654"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex align-center justify-space-between">
          <v-btn
            :style="{ fontSize: $V(28), borderRadius: $V(8) }"
            :width="$V(240)"
            :height="$V(80)"
            color="#999999"
            depressed
            outlined
            @click="dialogs = false"
          >取消</v-btn>
          <v-btn
            :style="{ fontSize: $V(28), borderRadius: $V(8), color: '#fff' }"
            :width="$V(240)"
            :height="$V(80)"
            color="#376abb"
            depressed
            @click="dialogs = false"
          >确定</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialoger" :width="$V(600)" :style="{ borderRadius: $V(8) }">
      <v-card id="custo-inp" :class="$style.dialog_content">
        <div :class="$style.content" :style="{ fontSize: $V(28), color: '#666', lineHeight: '1' }">
          <div :class="$style.creater" class="text-center">编辑开票信息</div>
          <v-textarea
            class="ma-0 pa-0"
            background-color="#fff"
            solo
            flat
            hide-details
            :height="$V(360)"
            no-resize
            :style="{ borderRadius: $V(8), border: '1px solid #e5e5e5' }"
            value="单位名称：湖北讯乐科技有限公司
纳税人识别号：0289378479768389X
9
地址：湖北省武汉市江夏区高新大道3
2号
电话：02789376
开户行：中国工商银行武汉市江夏区支
行
账号：300287629991354"
          ></v-textarea>
        </div>
        <div class="d-flex align-center justify-space-between">
          <v-btn
            :style="{ fontSize: $V(28), borderRadius: $V(8) }"
            :width="$V(240)"
            :height="$V(80)"
            color="#999999"
            depressed
            outlined
            @click="dialoger = false"
          >取消</v-btn>
          <v-btn
            :style="{ fontSize: $V(28), borderRadius: $V(8), color: '#fff' }"
            :width="$V(240)"
            :height="$V(80)"
            color="#376abb"
            depressed
            @click="dialoger = false"
          >确定</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      { job: "产品经理", name: "周登", phone: "15678230983" },
      { job: "项目经理", name: "刘玉芬", phone: "13278488754" },
      { job: "技术负责人", name: "王晓宇", phone: "15678230983" },
      { job: "助理", name: "孙莹莹", phone: "13278488754" }
    ],
    dialog: false,
    dialogs: false,
    dialoger: false
  })
};
</script>
<style lang="scss" module>
.title {
  height: 100px;
  background-color: rgb(215, 225, 241);
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0px;
  line-height: 34px;
  color: #376abb;
}
.quote {
  p {
    margin: 0;
  }
}
.dialog_content {
  padding: 40px;
}
.content {
  margin-bottom: 80px;
}
.create {
  margin-bottom: 80px;
}
.creater {
  margin-bottom: 40px;
}
.items {
  height: 65px;
  border-bottom: 2px solid #e5e5e5;
}
@for $i from 1 through 6 {
  #targetInput#{$i} {
    color: #333;
    font-size: 28px;
    line-height: 1;
    padding: 0;
    ::placeholder {
      line-height: 1;
    }
  }
}
</style>
<style lang="scss">
#custo-inp {
  .v-input__slot {
    padding: 0 !important;
    align-items: flex-start;
  }
  textarea {
    line-height: 42px !important;
    font-size: 28px !important;
    word-break: break-all;
    padding-left: 24px;
  }
}
</style>