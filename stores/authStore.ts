import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useAuthStore = create<BearState>()(
  immer((set) => ({
    bears: 0,
    increase: (by) =>
      set((state) => {
        state.bears += by;
      }),
  }))
);
