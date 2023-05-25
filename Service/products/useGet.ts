import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebaseConfig";

export default function useGetProductData() {
  const [products, setproducts] = useState([]);

  const getProducts = async (nameCollection : string) => {
    try {
      const querySnapshot = await getDocs(collection(db, nameCollection));
      const products: any = [];
      querySnapshot.forEach((doc : any) => {
        const data = doc.data();
        products.push({ ...data, id: doc.id });
      });
      setproducts(products);
    } catch (error) {
      console.log("Error GetProductData:", error);
    }
  };

  return {
    products,
    getProducts,
  };
}
