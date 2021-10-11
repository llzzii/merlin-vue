<script lang="ts" setup>
import HeaderLayout from "./headerLayout.vue"

</script>

<template>
    <div class="layout">
        <HeaderLayout></HeaderLayout>
        <div class="main">
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>
<style scoped>
.layout {
    max-width: 1200px;
    margin: 0 auto;
}
</style>