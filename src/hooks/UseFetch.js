import { useEffect, useState } from "react";

const UseFetch = (url, id = "") => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let link = `${url}/${id}`;
    fetch(link)
      .then((datos) => datos.json())
      .then((respuesta) => setData(respuesta));
  }, [url]);

  return { data };
};

export default UseFetch;
