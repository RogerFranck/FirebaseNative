import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import useGetProductData from "../Service/products/useGet";
import handleDelete from "../Service/products/handleDelete";
import { GeneralContext } from "../context/generalContext";

export default function useProducts() {
  const { user } = useContext(GeneralContext);
  const isFocused = useIsFocused();
  const [forceUpdate, setforceUpdate] = useState(true);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [productSelected, setproductSelected] = useState({});

  const { products, getProducts } = useGetProductData();

  const confirmDelete = (product: object) => {
    setDialogVisible(true);
    setproductSelected(product);
  };

  const cancellDelete = () => {
    setDialogVisible(false);
    setproductSelected({});
  };

  const deleteProduct = () => {
    const { id }: any = productSelected;
    handleDelete(id, "productos");
    setproductSelected({});
    setDialogVisible(false);
    setforceUpdate(!forceUpdate);
  };

  useEffect(() => {
    getProducts();
  }, [isFocused, forceUpdate]);

  return {
    deleteProduct,
    cancellDelete,
    confirmDelete,
    dialogVisible,
    products,
  };
}
