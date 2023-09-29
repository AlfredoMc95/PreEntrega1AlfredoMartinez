import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((datos) => datos.json())
      .then((respuesta) => setData(respuesta));
  }, [url]);

  return { data };
};

export default UseFetch;
