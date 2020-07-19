<template>
  <div :class="$style.outer">
    <BallChart class="mb-10" />
    <TableChart class="mb-10" />
    <LineChart />
  </div>
</template>
<script>
import BallChart from "@/components/MoneyInfo/ball-chart";
import TableChart from "@/components/MoneyInfo/table-chart";
import LineChart from "@/components/MoneyInfo/line-chart";
export default {
  components: {
    BallChart,
    TableChart,
    LineChart
  }
};
</script>
<style module lang="scss">
.outer {
  padding: 40px 32px 80px;
}
</style>
<style lang="scss"></style>
