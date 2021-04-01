import { useState, useEffect } from "react";
import axios from "axios";

export function DadosSolicitacao(url, estadoInicial) {
  const [data, setData] = useState(estadoInicial);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [url]);

  return data;
}


