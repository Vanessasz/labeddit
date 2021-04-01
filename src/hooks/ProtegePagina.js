import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { irParaLogin } from "../router/Coordinator";

export const ProtegePagina = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      irParaLogin(history);
    }
  }, [history]);
};





