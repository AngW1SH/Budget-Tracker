<script setup lang="ts">
import { Block } from "@/shared/ui";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";
import CashFlowLegend from "./CashFlowLegend.vue";
import { computed, ref } from "vue";
import { options, initialLabels } from "../configs/CashFlowGraphConfig";

const labels = ref(initialLabels);

const dataComputed = computed(() => {
  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: labels.value.map((label) => ({
      label: label.name,
      borderColor: label.color,
      backgroundColor: label.backgroundColor,
      fill: true,
      data: label.data,
      hidden: label.hidden,
    })),
  };
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const toggleLabel = (name: string) => {
  labels.value = labels.value.map((label) =>
    label.name == name ? { ...label, hidden: !label.hidden } : label
  );
};
</script>
<template>
  <Block class="relative">
    <div class="absolute pb-2 pt-8 px-8 top-0 left-0 right-0 bottom-0">
      <Line :data="dataComputed" :options="options" />
    </div>
    <CashFlowLegend
      @label-click="toggleLabel"
      :labels="labels"
      class="absolute top-3 right-12"
    />
  </Block>
</template>
