import { createStore } from "vuex";

const store = createStore({
    state: {
        links: [
            {
                name: 'TIFFEST-22',
                pagesName: 'Tiffest'

            },
            {
                name: 'Программа',
                pagesName: 'Program'

            },
            {
                name: 'Кинопоказы',
                pagesName: 'Movie-show'

            },
            {
                name: 'Локации',
                pagesName: 'Location'

            },
            {
                name: 'Премьеры',
                pagesName: 'Premiers'
            },
            {
                name: 'Лица',
                pagesName: 'Faces'
            },
            {
                name: 'Медиа',
                pagesName: 'Media'
            },
            {
                name: 'История',
                pagesName: 'History'
            },
            {
                name: 'Мастер-классы',
                pagesName: 'Master-classes'
            },
            {
                name: 'Новости',
                pagesName: 'News'
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {}
})

export default store