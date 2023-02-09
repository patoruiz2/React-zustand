import { create } from "zustand"

interface BearState{
  bears: number,
  increase: (by: number) => void,
  removeAllBears: () => void,
}

const useBearStore = create<BearState>()(
 (set) => ({
  bears: 0,
  increase: (by) => {
    console.log("ejecutado increase");
    set(state => (
    {bears: state.bears + by}
    ))
  },
  removeAllBears: () => set({bears: 0}),
 })
);

export default useBearStore;