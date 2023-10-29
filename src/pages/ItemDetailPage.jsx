import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import DetailCArd from "../components/detailCard/DetailCArd";

const ItemDetailPage = ({ addToCart, setSelectedItem, setQuantity }) => {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  let [product, setProduct] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
  }, [id]);

  const add = () => {
    setProduct(product + 1);
  };
  const remove = () => {
    if (product >= 1) {
      setProduct(product - 1);
    } else {
      setProduct((product = 0));
    }
  };

  const buy = () => {
    addToCart();
  };

  return (
    <>
      {items.map((item) => {
        return (
          <DetailCArd
            key={item?.id}
            add={add}
            remove={remove}
            buy={buy}
            item={item}
            product={product}
            setSelectedItem={setSelectedItem}
            setQuantity={setQuantity}
          />
        );
      })}
    </>
  );
};

export default ItemDetailPage;
