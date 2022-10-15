import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

import {BASE_URL} from "../utils"

// Use zustand as light weight Redux alternative
// Single source of state, "Store", for the user
const authStore = (set: any) => ({
    userProfile: null,
    allUsers: [],

    addUser: (user: any) => set({ userProfile: user }),
    removeUser: () => set({userProfile : null}),

    fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`);

        set({allUsers: response.data})
    }
});

const useAuthStore = create(
    persist(authStore, {
        name: 'auth'
    })
)

// Call as a hook in anywhere in code
export default useAuthStore;