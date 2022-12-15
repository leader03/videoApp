import create from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

const authStore = (set: any) => ({
    userProfile: null,

    addUser: (user: any) => set({ userProfile: user}),
    removeUser: () => set({ userProfile : null})
})

const useAuthStores = create(
    persist(authStore, {
        name:'auth'
    })
)

export default useAuthStores