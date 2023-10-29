import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const UseReadFB = (filter = "") => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let q;
      if (filter === "") {
        q = query(collection(db, "products"));
      } else {
        q = query(collection(db, "products"), where("category", "==", filter));
      }
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
  }, [filter]);

  return items;
};

export default UseReadFB;
