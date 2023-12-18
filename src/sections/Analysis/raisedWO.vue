<template>
  <h1>Информация о распределении созданных Work Orders</h1>

  <div>Количество созданных Work Orders всего: {{ WO_total_number }}</div>
</template>

<script>
import { byAssets } from "@/js/byAssets"
import { getValue } from "@/js/requests";
export default {
  name: "analysis-raisedWO",
  data() {
    return {
      WO_total_number: {}
    }
  },
  mounted() {
    getValue.call(this, 'WO_raised_number_by_Year', 'WO_total_number')
  },
};
</script>

<style></style>
