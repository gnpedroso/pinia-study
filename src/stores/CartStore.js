import { defineStore } from 'pinia';
import { groupBy } from 'lodash';

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            items: []
        }
    },

    getters: {
        count: ({ items }) => items.length,

        isEmpty: ({ count }) => count === 0,

        grouped: ({ items }) => groupBy(items, (item) => item.name),

        groupCount: ({ grouped }) => (name) => grouped[name].length,

    },

    actions: {
        addItems(count, item) {
            count = parseInt(count);

            for(let i = 0; i < count; i++){
                this.items.push({ ...item });
            }
        }
    }
})