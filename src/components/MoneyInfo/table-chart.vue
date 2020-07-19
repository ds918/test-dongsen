<template>
  <div>
    <div :class="$style.title">回款统计</div>
    <div :class="$style.outer">
      <table :class="$style.table" border-collapse="collapse">
        <thead>
          <th>序号</th>
          <th>项目</th>
          <th>金额</th>
          <th>项目数</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in 15" :key="index">
            <td :class="$style.num">{{index + 1}}</td>
            <td>{{index + 1}}月回款</td>
            <td>800,000.00</td>
            <td @click.self="$router.push('/moneyReceived')">15</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({})
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
.outer {
  padding-bottom: 40px;
  border-bottom: 2px solid #e5e5e5;
}
.table {
  font-size: 24px;
  width: 100%;
  font-weight: normal;
  font-stretch: normal;

  border-collapse: collapse;
  text-align: center;
  .num {
    width: 80px;
    height: 72px;
    background-color: #f2f2f2;
  }
  td {
    border-bottom: 2px solid #e5e5e5;
    border-right: 2px solid #e5e5e5;
    padding: 0;
    margin: 0;
    &:nth-child(4) {
      color: #376abb;
      text-decoration: underline;
    }
  }
  thead {
    th {
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      height: 72px;
      background-color: #376abb;
      border-right: 2px solid #e5e5e5;
      &:nth-child(4) {
        border: none;
      }
    }
  }
}
</style>
