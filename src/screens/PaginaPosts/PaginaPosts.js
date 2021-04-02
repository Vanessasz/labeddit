import React, { useEffect } from "react";
import { ProtegePagina } from "../../hooks/ProtegePagina";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/apiConstants";
import { DadosSolicitacao } from "../../hooks/DadosSolicitacao";
import { Cards, CardComentarios, CardVotos } from "./estilo";
import { TextField } from "@material-ui/core";
import { CommentListItem } from "../../components/CommentListItem/CommentListItem";
import { Button } from "@material-ui/core";
import { useForm } from '../../hooks/useForm'
import { useHistory } from "react-router-dom";
import { comentarios } from "../../services/user"
import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";

export default function PaginaPosts() {
  ProtegePagina();
  const params = useParams();
  const history = useHistory();
  const data  = DadosSolicitacao(`${BASE_URL}/posts/${params.id}`, []);
  const { form, onChange } = useForm({ text: "" });

  // useEffect(() => {
  // comentarios()
  // }, []);

const mudancaInput = (event) => {
  const { value, name } = event.target;
  onChange(value, name);
};

const formDeEnvio = (event) => {
  event.preventDefault();
  comentarios(form, params.id);
};

  return (
    <Cards>
      <p>Nome:&nbsp; {data.post && data.post.username}</p>
      <p>Título do post:&nbsp; {data.post && data.post.title}</p>
      <p>Post:&nbsp; {data.post && data.post.text}</p>
      <form onSubmit={formDeEnvio}>
      <TextField 
      placeholder={"Seu comentário"}
      value={form.text}
      onChange={mudancaInput}
      name={"text"}
      />
      <Button type={"submit"}>Enviar Comentário</Button>
      </form>
      <CardComentarios>
      {data.post && data.post.comments.map((comment) => {
        return (
        <CommentListItem comment={comment} />
      )})}
      </CardComentarios>
      <CardVotos>
       
      </CardVotos>
    </Cards>
  );
    
  }
    