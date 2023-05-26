import { useEffect, useState } from "react";
import useGet from "../Service/products/useGet";
import postData from "../Service/products/handlePost";

export default function useSales(navigation: any) {
  const [number, setnumber] = useState(1);
  const [total, setTotal] = useState(0);
  const [elementList, setelementList] = useState<any>([
    { element: null, cant: 1 },
  ]);

  const { products, getProducts, services, getServices } = useGet();

  useEffect(() => {
    getProducts("productos");
    getServices();
  }, []);

  const addNumber = () => {
    elementList.push({ element: null, cant: 1 });
    setnumber(number + 1);
  };
  const deleteNumber = () => {
    if (number > 1) {
      elementList.pop();
      setnumber(number - 1);
    }
  };

  const addElementList = (key: string, index: number, value: any) => {
    const updatedList = [...elementList];
    updatedList[index][key] = value;
    setelementList(updatedList);
    getTotal();
  };

  const getTotal = () => {
    const total = elementList.reduce(
      (accumulator: number, currentItem: any) => {
        const precioVenta = currentItem.element?.precioVenta || 0;
        const cantidad = currentItem.cant;
        const subtotal = precioVenta * cantidad;
        return accumulator + subtotal;
      },
      0
    );
    setTotal(total);
  };

  const saveSales = () => {
    elementList.forEach(({ element, cant }: any) => {
      const payload = { ...element, unidades: element.unidades - cant };
      delete payload.isProduct;
      postData(payload, element?.imagen ? "productos" : "servicios");
    });
    const arrayOfValues = elementList.map((obj: any) => {
      return {
        id: obj.element.id,
        precioVenta: obj.element.precioVenta,
        cant: obj.cant,
        isProduct: obj.element?.imagen ? true : false,
      };
    });
    const today = new Date();
    const formattedDate = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;
    postData({ sales: arrayOfValues, date: formattedDate }, "sales");
    navigation.navigate("Sales");
  };

  return {
    number,
    addNumber,
    deleteNumber,
    products,
    services,
    elementList,
    addElementList,
    total,
    saveSales,
  };
}
