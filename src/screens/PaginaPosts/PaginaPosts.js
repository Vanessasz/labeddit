import React from "react";
import { ProtegePagina } from "../../hooks/ProtegePagina";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/apiConstants";
import { DadosSolicitacao } from "../../hooks/DadosSolicitacao";
import { Cards, CardComentarios, CardVotos } from "./estilo";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CommentListItem } from "../../components/CommentListItem/CommentListItem";
import { useForm } from '../../hooks/useForm'
import { comentarios, vote } from "../../services/allRequisitions"

export default function PaginaPosts() {
  ProtegePagina();
  const params = useParams();
  const data  = DadosSolicitacao(`${BASE_URL}/posts/${params.id}`, []);
  const { form, onChange, limparInput } = useForm({ text: "" });

const mudancaInput = (event) => {
  const { value, name } = event.target;
  onChange(value, name);
};

const formDeEnvio = (event) => {
  event.preventDefault();
  comentarios(form, params.id);
  limparInput()
};

  return (
    <Cards>
      <p>Nome:&nbsp; {data.post && data.post.username}</p>
      <p>Título do post:&nbsp; {data.post && data.post.title}</p>
      <p>Post:&nbsp; {data.post && data.post.text}</p>
      <form onSubmit={formDeEnvio}>
      <TextField 
      color={"secondary"}
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
        <CommentListItem comment={comment} vote={vote}/>
      )})}
      </CardComentarios>
      <CardVotos>
       
      </CardVotos>
    </Cards>
  );
    
  }
    