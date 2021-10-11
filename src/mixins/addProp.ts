import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
export const addProp = {
    data() {
        return {
            title: '全局mixin',
        }
    },
    title: 'mixin',
    beforeRouteEnter(to, from, next) {

    },
    beforeRouteLeave(to, from, next) {

    },


}


