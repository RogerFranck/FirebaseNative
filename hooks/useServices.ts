import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import useGetProductData from "../Service/products/useGet";
import handleDelete from "../Service/products/handleDelete";
import { GeneralContext } from "../context/generalContext";

export default function useServices() {
  const { user } = useContext(GeneralContext);
  const isFocused = useIsFocused();
  const [forceUpdate, setforceUpdate] = useState(true);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [serviceSelected, setServiceSelected] = useState({});

  const { products, getProducts } = useGetProductData();

  const confirmDelete = (product: object) => {
    setDialogVisible(true);
    setServiceSelected(product);
  };

  const cancellDelete = () => {
    setDialogVisible(false);
    setServiceSelected({});
  };

  const deleteService = () => {
    const { id }: any = serviceSelected;
    handleDelete(id, "services");
    setServiceSelected({});
    setDialogVisible(false);
    setforceUpdate(!forceUpdate);
  };

  useEffect(() => {
    getProducts("services");
  }, [isFocused, forceUpdate]);

  return {
    deleteService,
    cancellDelete,
    confirmDelete,
    dialogVisible,
    products,
  };
}
