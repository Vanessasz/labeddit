import React from "react";
import { ProtegePagina } from "../../hooks/ProtegePagina";
import { BASE_URL } from "../../constants/apiConstants";
import { DadosSolicitacao } from "../../hooks/DadosSolicitacao";
import { useHistory } from "react-router-dom";
import CardPosts from "../../components/CardPosts/CardPosts";
import { CardPost, MeuBotao, Input, TextArea } from "./estilo";
import { criandoPosts } from "../../services/user";
import { useForm } from "../../hooks/useForm";

export default function PaginaFeed() {
  ProtegePagina();
  const history = useHistory();
  const { form, onChange } = useForm({ text: "", title: "" });

  const mudancaInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const formDeEnvio = (event) => {
    event.preventDefault();
    criandoPosts(form, history);
  };

  const data = DadosSolicitacao(`${BASE_URL}/posts`);

  return (
    <div>
      <CardPost>
        <form onSubmit={formDeEnvio}>
          <p>Digite um título para o seu post.</p>
          <Input name="title" value={form.title} onChange={mudancaInput} />

          <p>Escreva seu post.</p>
          <TextArea
            type="text"
            name="text"
            value={form.text}
            onChange={mudancaInput}
          />
          <MeuBotao>Postar</MeuBotao>
        </form>
      </CardPost>

      <div>
        {data &&
          data.posts.map((posts) => {
            return (
              <CardPosts
                key={posts.id}
                id={posts.id}
                username={posts.username}
                title={posts.title}
                text={posts.text}
                commentsCount={posts.commentsCount}
                votesCount={posts.votesCount}
              />
            );
          })}
      </div>
    </div>
  );
}
