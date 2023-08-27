import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAllItems: () => void;
};

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItem = get().items;
            const existingItem = currentItem.find((item) => item.id === data.id);

            if (existingItem) {
                return toast("Item already exists in Cart");
            }

            set({ items: [...get().items, data] });
            toast.success("Item added to Cart");
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from Cart");
        },
        removeAllItems: () => set({ items: [] }),
    }), {
        name: "Cart",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;