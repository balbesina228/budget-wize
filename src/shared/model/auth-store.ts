import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  email: string;
};

type AuthState = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

export const useAuth = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      login: (email) =>
        set({
          user: {
            id: crypto.randomUUID(),
            email,
          },
        }),
      logout: () => set({ user: null }),
    }),
    { name: "auth-storage" }
  )
);
