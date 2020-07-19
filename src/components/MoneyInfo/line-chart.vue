<template>
  <div>
    <div :class="$style.title">回款曲线</div>
    <v-chart :class="$style.echarts" :options="option" autoresize />
  </div>
</template>
<script>
import ECharts from "vue-echarts";
export default {
  components: {
    "v-chart": ECharts
  },
  data: () => ({
    option: {
      grid: {
        bottom: "20%",
        width: "86%",
        height: "60%"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          color: "#999999",
          rotate: 0
        },
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        },
        data: [
          "10月",
          "11月",
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月"
        ]
      },
      yAxis: {
        type: "value",
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#e5e5e5"
          }
        },
        axisLabel: {
          interval: 0,
          color: "#999",
          padding: 0,
          lineHeight: 1
        },
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        },
        name: "万元",
        nameTextStyle: {
          align: "right"
        }
      },
      series: [
        {
          color: "#376abb",
          data: [50, 20, 30, 40, 70, 60, 70, 80, 70, 50, 20],
          type: "line",
          lineStyle: {
            width: 3
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
.echarts {
  width: 100%;
  height: 325px;
}
</style>
