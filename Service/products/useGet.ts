import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebaseConfig";

export default function useGetProductData() {
  const [products, setproducts] = useState([]);
  const [services, setServices] = useState([]);
  const [sales, setSales] = useState([]);

  const getProducts = async (nameCollection: string) => {
    try {
      const querySnapshot = await getDocs(collection(db, nameCollection));
      const products: any = [];
      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        products.push({ ...data, id: doc.id });
      });
      setproducts(products);
    } catch (error) {
      console.log("Error GetProductData:", error);
    }
  };

  const getServices = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "servicios"));
      const servicesList: any = [];
      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        servicesList.push({ ...data, id: doc.id });
      });
      setServices(servicesList);
    } catch (error) {
      console.log("Error GetProductData:", error);
    }
  };

  const getSales = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sales"));
      const servicesList: any = [];
      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        servicesList.push({ ...data, id: doc?.id });
      });
      setSales(servicesList);
    } catch (error) {
      console.log("Error GetProductData:", error);
    }
  };

  return {
    products,
    getProducts,
    services,
    getServices,
    sales,
    getSales,
  };
}
