import React from "react";
import axios from "axios";
import { ProtegePagina } from "../../hooks/ProtegePagina";
import { BASE_URL } from "../../constants/apiConstants";
import { DadosSolicitacao } from "../../hooks/DadosSolicitacao";
import { useHistory } from "react-router-dom";
import CardPosts from "../../components/CardPosts/CardPosts";
import { CardPost, MeuBotao, Input, TextArea } from "./estilo";
import { criandoPosts } from "../../services/allRequisitions";
import { useForm } from "../../hooks/useForm";
import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

export default function PaginaFeed() {
  ProtegePagina();
  const params = useParams();
  const history = useHistory();
  const { form, onChange, limparInput } = useForm({ text: "", title: "" });

  const mudancaInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const formDeEnvio = (event) => {
    event.preventDefault();
    criandoPosts(form, history);
    limparInput();
  };

  const data = DadosSolicitacao(`${BASE_URL}/posts`);

  // Voto dos posts
  const votoPosts = async (id, direction) => {
    const body = {
      direction: direction,
    };

    await axios
      .put(`${BASE_URL}/posts/${id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })

      .then((res) => {})
      .catch((error) => {
        console.log(error);
        alert("Não foi possível votar no post, tente novamente");
      });

    return votoPosts;
  };

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
        {data ? (
          data.posts.map((posts) => {
            return (
              <CardPosts
                key={posts.id}
                votoPosts={votoPosts}
                id={posts.id}
                username={posts.username}
                title={posts.title}
                text={posts.text}
                commentsCount={posts.commentsCount}
                votesCount={posts.votesCount}
              />
            );
          })
        ) : (
          <p>
            <LinearProgress color={"secondary"} />
          </p>
        )}
      </div>
    </div>
  );
}
