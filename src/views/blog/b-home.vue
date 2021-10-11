<template>
    <div>
        <div class="banner"></div>
        <BEchart></BEchart>
    </div>
</template>
<script setup lang="ts">
import BEchart from "@/components/b-echart.vue"
</script>
<style>
.banner {
    width: 100%;
    height: 260px;
    background-image: url("/src/assets/images/banner.png");
}
</style>