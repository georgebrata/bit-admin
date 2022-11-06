import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => {
        return {
            isSidebarOpen: false
        }
    },
    actions: {
        openSidebar() {
            this.isSidebarOpen = true;
        },
        closeSidebar() {
            this.isSidebarOpen = false;
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
})
