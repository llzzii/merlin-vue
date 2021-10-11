import { Module } from 'vuex';
import { State } from '../index';

export type LogsData = {
    id: string,
    name: string,
    createTime: string
}

const initialState = {
    LogsData: [] as LogsData[]
};

export type LogsState = typeof initialState;

export const logs = {
    namespaced: true,
    state: initialState,
    mutations: {
        addLog(state, payload: LogsData) {
            state.LogsData.unshift(payload);
        }
    }
} as Module<LogsState, State>; //Module<S, R> S 该模块类型 R根模块类型