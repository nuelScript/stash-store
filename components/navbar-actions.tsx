"use client";

import Button from "@/components/button";
import { ShoppingBag } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const Navbaractions = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black dark:bg-white px-4 py-2"
      >
        <ShoppingBag
          size={20}
          color={resolvedTheme === "dark" ? "black" : "white"}
        />
        <span className="ml-2 text-sm font-medium text-white dark:text-black">
          {cart.items.length}
        </span>
      </Button>
      <ModeToggle />
    </div>
  );
};

export default Navbaractions;
