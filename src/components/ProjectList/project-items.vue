<template>
  <v-card :to="{path: '/projectDetail',query: {id: item.id}}" class="pt-8" flat>
    <v-card-title class="pa-0 d-flex justify-space-between flex-nowrap" color="#333333">
      <v-sheet
        class="text-truncate font-weight-medium"
        :max-width="$V(520)"
        :style="{ fontSize: $V(32), lineHeight: $V(34) }"
      >{{item.title}}</v-sheet>
      <v-chip
        class="font-weight-regular"
        outlined
        :text-color="color[item.islazy]"
        :color="color[item.islazy]"
        :style="{ fontSize: $V(20), borderRadius: $V(8), padding: $V(6) }"
      >{{item.time.replace(/-/g,'/')}}</v-chip>
    </v-card-title>
    <v-card-text class="pa-0 d-flex justify-space-between align-center" :style="{ height: $V(80) }">
      <v-chip
        class="pa-0"
        outlined
        text-color="#666666"
        label
        :style="{ fontSize: $V(24), border: 'none' }"
      >{{item.name.join('/')}}</v-chip>
      <v-chip
        class="pa-0"
        outlined
        label
        text-color="#666666"
        :style="{ fontSize: $V(24), border: 'none' }"
      >{{item.price}}元</v-chip>
      <v-chip
        class="pa-0"
        outlined
        label
        text-color="#666666"
        :style="{ fontSize: $V(24), border: 'none' }"
      >{{item.progress}}%({{100 - item.progress}}%)</v-chip>
      <v-chip
        class="pa-0"
        outlined
        label
        :text-color="color[item.islazy]"
        :style="{ fontSize: $V(24), border: 'none' }"
      >{{item.price}}元</v-chip>
    </v-card-text>
    <v-progress-linear
      :value="item.progress"
      background-opacity="0"
      rounded
      :height="$V(8)"
      :color="color[item.islazy]"
      style="borderBottom: 1px solid #e5e5e5"
    ></v-progress-linear>
  </v-card>
</template>
<script>
export default {
  props: {
    item: Object
  },
  data: () => ({
    color: ["#bb3737", "#ef9637", "#376abb"]
  })
};
</script>
