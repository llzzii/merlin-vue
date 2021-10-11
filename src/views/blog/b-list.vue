<template>
    <div>
        <listItem v-for="(item,index) in listData" :item="item" :key="index"></listItem>
    </div>
</template>
<script lang="ts" setup >
import { listBlog } from "@/api/juejin";
import listItem from "@/components/list-item.vue";
import { useStore } from "vuex";

import { onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute } from 'vue-router'
import dataList from "@/assets/code/data.json"
import { key } from "@/store";
const store = useStore(key);
const props = defineProps({
    id: String
})

let listData = ref({});
watch(() => props.id, (newVal, oldVal) => {
    console.log(newVal, 123)
    store.commit("setInfo", { type: newVal }); //存储
    loadList(newVal)

})
const route = useRoute()
watch(() => route.path, () => {
    console.log('监听到变化')
    console.log(props.id)
    // loadList(props.id)
}
)
onMounted(() => {
    loadList(props.id)
})
const loadList = (id) => {
    listBlog(id).then(res => {
        listData.value = res
        console.log(listData, 3)

    }).catch(err => {
        listData.value = dataList.data;
        console.log(listData, 1)


    })
}
</script>
