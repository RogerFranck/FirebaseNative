import { useEffect } from "react";
import useGet from "../Service/products/useGet";
import { useIsFocused } from "@react-navigation/native";

export default function useSalesMain() {
  const { sales, getSales } = useGet();

  const isFocused = useIsFocused();

  useEffect(() => {
    getSales();
  }, [isFocused]);

  console.log(sales);

  return { sales };
}
