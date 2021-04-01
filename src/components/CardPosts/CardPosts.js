import React from "react";
import { Cards, CardComentarios, CardVotos, MeuBotao } from "../estilo";
import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";
import { irParaPosts } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

export default function CardPosts(props) {
  const history = useHistory();
  return (
    <Cards>
      <MeuBotao onClick={() => irParaPosts(history, props.id)}>
        Para mais detalhes clique !!
      </MeuBotao>
      <p>{props.username}</p>
      {props.text}
      <CardComentarios>
        {props.commentsCount}&nbsp;&nbsp;comentários
      </CardComentarios>
      <CardVotos>
        <img src={like} alt="icone like" />
        &nbsp;&nbsp;{props.votesCount}&nbsp;&nbsp;
        <img src={deslike} alt="icone deslike" />
      </CardVotos>
    </Cards>
  );
}
