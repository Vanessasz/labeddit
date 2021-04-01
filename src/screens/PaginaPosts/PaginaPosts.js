import React from "react";
import { ProtegePagina } from "../../hooks/ProtegePagina";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/apiConstants";
import { DadosSolicitacao } from "../../hooks/DadosSolicitacao";
import { Cards, CardComentarios, CardVotos } from "./estilo";
import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";

export default function PaginaPosts() {
  ProtegePagina();
  const params = useParams();
  const data = DadosSolicitacao(`${BASE_URL}/posts/${params.id}`, []);

  return (
    <Cards>
      <p>Nome:&nbsp; {data.post && data.post.username}</p>
      <p>Título do post:&nbsp; {data.post && data.post.title}</p>
      <p>Post:&nbsp; {data.post && data.post.text}</p>
      <CardComentarios>
        {data.post && data.post.commentsCount} comentários
      </CardComentarios>
      <CardVotos>
        <img src={like} alt="icone like" /> &nbsp;&nbsp;
        {data.post && data.post && data.post.votesCount}&nbsp;&nbsp;
        <img src={deslike} alt="icone deslike" />
      </CardVotos>
    </Cards>
  );
}
