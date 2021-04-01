import React from "react";
import { irParaLogin } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";
import { MeuBotao, Titulo } from "./estilo"


export default function PaginaInicial() {
  const history = useHistory();
  return (
    <div>
      <Titulo>Bem vindo ao LabEddit.</Titulo>
      <MeuBotao onClick={() => irParaLogin(history)}>
        Comece clicando aqui !!
      </MeuBotao>
    </div>
    
  );
}
