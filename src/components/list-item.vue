<template>
    <div class="list-item" v-if="item.result_type == 2">
        <p class="title">{{ item?.result_model?.article_info?.title }}</p>
        <p class="action">
            <span>
                <i class="iconfont icon-riqi"></i>
                {{ item?.result_model?.article_info?.ctime }}
            </span>
            <span>
                <i class="iconfont icon-zuozhe"></i>
                {{ item?.result_model?.author_user_info?.user_name }}
            </span>
            <span>
                <i class="iconfont icon-browse1"></i>
                {{ item?.result_model?.article_info?.view_count }}
            </span>
            <span>
                <i class="iconfont icon-good"></i>
                {{ item?.result_model?.article_info?.digg_count }}
            </span>
        </p>
        <p class="content">{{ item?.result_model?.article_info?.brief_content }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    item: Object
})
</script>
<style lang="less" scoped>
.list-item {
    color: #fff;
    padding: 20px;
    p {
        padding-left: 10px;
    }
    .title {
        font-size: 18px;
        border-left: 3px solid #fff;
    }
    .action {
        font-size: 12px;
        span {
            margin-right: 15px;
        }
    }
    .content {
        font-size: 14px;
    }
}
</style>