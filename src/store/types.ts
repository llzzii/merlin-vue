export const types = {
    state: {
        type: "js"
    },
    mutations: {
        setInfo(state, data) {
            console.log(state)
            console.log(data)
            Object.assign(state, data);
        }
    }
}