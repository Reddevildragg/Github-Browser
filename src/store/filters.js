// stores/users.js
import { defineStore } from 'pinia'

const state = {
    filters:[],
}
export const useFiltersStore = defineStore("Filters",{
    state: () => state,
    getters:
    {
    },
    actions: {
    },
})