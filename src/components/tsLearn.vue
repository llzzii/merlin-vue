
<script lang="ts" setup>
import { ref } from "vue";
import child from "./child.vue";

// const props = defineProps({ msg: String });
defineProps<{ msg: string }>();
const count = ref(0);
let count2 = 0; // 非响应式，不更改
const setCount = () => {
  count.value++;
  count2++;
};
</script>

<template>
  <child></child>
  <p>{{ msg }}</p>
  <p>{{ count + "----" + count2 }}</p>
  <el-button size="small " @click="setCount">setCount</el-button>
  <component :is="child"></component>
</template>