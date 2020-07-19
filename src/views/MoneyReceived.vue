<template>
  <div class="py-6">
    <v-sheet class="px-8" :style="{ fontSize: $V(20), color: '#999999', lineHeight: $V(28) }">共25条</v-sheet>
    <ProjectItems v-for="(item, index) in 10" :key="index" />
  </div>
</template>
<script>
import ProjectItems from "@/components/ProjectList/project-items";
export default {
  props: {
    dataIndex: [Number, String]
  },
  components: {
    ProjectItems
  }
};
</script>