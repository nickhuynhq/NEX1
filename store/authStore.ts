import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

// Use zustand as light weight Redux alternative
// Single source of state, "Store", for the user
const authStore = (set: any) => ({
    userProfile: null,

    addUser: (user: any) => set({ userProfile: user }),
    removeUser: () => set({userProfile : null})
});

const useAuthStore = create(
    persist(authStore, {
        name: 'auth'
    })
)

// Call as a hook in anywhere in code
export default useAuthStore;