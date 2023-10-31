import { useEffect, useState } from "react";

//API Fake Store, solo se usar para llamar y posteriormente llenar la base de datos con los elementos de esta API

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
