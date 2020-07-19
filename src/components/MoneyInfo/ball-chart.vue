<template>
  <div>
    <div :class="$style.title">回款总概</div>
    <div class="d-flex align-center" :class="$style.top">
      <base-img width="22" height="21" class="my-icons-coin-22-21" />
      <div class="ml-2">
        总款项
        <strong>136</strong> 万元
      </div>
    </div>
    <v-chart
      @click.self="
        $router.push({
          path: 'moneyReceived',
          query: { dataIndex: $event.dataIndex }
        })
      "
      :class="$style.echarts"
      :options="option"
      autoresize
    />
  </div>
</template>
<script>
import "echarts";
import ECharts from "vue-echarts";

export default {
  components: {
    "v-chart": ECharts
  },
  data: () => ({
    option: {
      legend: {
        type: "scroll",
        orient: "horizontal",
        bottom: "0",
        textStyle: {
          color: "#666666"
        },
        icon: "pin",
        data: ["已收款项", "剩余款项", "异常款项"],
        itemWidth: 25 * 0.6,
        itemHeight: 14 * 0.6,
        selectedMode: false
      },
      series: [
        {
          type: "pie",
          radius: "63%",
          center: ["50%", "40%"],
          label: {
            formatter: params => {
              return `${params.percent}万元（${params.percent}%）`;
            },
            distanceToLabelLine: 0
          },
          labelLine: {
            lineStyle: {
              color: "#e5e5e5"
            },
            length: 5,
            length2: 10
          },
          color: ["#ef9637", "#bb3737", "#376abb"],
          data: [
            { value: 31, name: "剩余款项" },
            { value: 11, name: "异常款项" },
            { value: 58, name: "已收款项" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    }
  })
};
</script>

<style module lang="scss">
.title {
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 32px;
}
.top {
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #666666;
  strong {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #333333;
  }
}
.echarts {
  width: 100%;
  height: 400px;
  padding-bottom: 40px;
  border-bottom: 2px solid #e5e5e5;
}
</style>
