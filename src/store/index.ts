import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { logs, LogsState } from './modules/logs'
import { types } from './types'

export type State = {
    count: number,
    types?: any,
    logs?: LogsState // 这里必须是可选，不然state会报错
}
export const store = createStore({
    modules: {
        types: types,
        logs: logs
    }
})

export const key: InjectionKey<Store<State>> = Symbol('key');