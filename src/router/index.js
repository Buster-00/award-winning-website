import { createMemoryHistory, createRouter } from 'vue-router'
import field from '@/views/field.vue'
import home from '@/views/home.vue'

const routes = [
    { path: '/', component:  home},
    { path: '/test', component:  field},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})