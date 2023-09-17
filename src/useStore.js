import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useUserStore = create(
	persist(
		(set) => ({
			token: null,
			isAuthenticated: false,
			login: (token, user) => {
				set({ token, user, isAuthenticated: true })
			},
			logout: () => {
				set({ token: null, user: null, isAuthenticated: false })
			},
		}),
		{
			name: 'userAuth',
			storage: createJSONStorage(() => localStorage),
		}
	)
)

export default useUserStore
