import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useItemsStore = defineStore('ItemsStore', {
    state: () => ({
        items: useStorage('items', [])
    }),
    getters: {
        itemsCount() {
            return this.items.length;
        },
        exists: (state) => {
            return (itemId) => state.items.includes(itemId)
        },
    },
    actions: {
        add(itemId) {
            if (!this.items.includes(itemId)) {
                this.items.push(itemId);
            }
        },
        remove(itemId) {
            this.items = this.items.filter((item) => item !== itemId);
        },
    },
});