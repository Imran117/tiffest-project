import { createStore } from "vuex";

const store = createStore({
    state: {
        currentLang: 'ru',
        langs: ['uz', 'ru', 'en'],
        isOpenLang: false,
        isOpenMore: false,
        isOpenBar: false,
        links: ["/", "/Tiffest", "/Program", "/Movie-show", "/Location", "/Premiers", "/Faces", "/Media", "/History", "/Master-classes", "/News"]
    },
    mutations: {
        changeLang(state, payload) {
            state.currentLang = payload

        },
        changeIsOpen(state, payload) {
            state[payload] = !state[payload]
        },
    },
    actions: {},
    getters: {}
})

export default store