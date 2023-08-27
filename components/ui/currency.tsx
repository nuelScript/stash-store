"use client";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
