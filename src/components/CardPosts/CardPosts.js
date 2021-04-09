import React from "react";
import { Cards, CardComentarios, CardVotos, MeuBotao } from "../estilo";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import { irParaPosts } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

export default function CardPosts(props) {
  const history = useHistory();

  const cimaVoto = () => {
    props.votoPosts(props.id, 1);
  };

  const baixoVoto = () => {
    props.votoPosts(props.id, -1);
  };

  return (
    <Cards>
      <MeuBotao onClick={() => irParaPosts(history, props.id)}>
        Para mais detalhes clique !!
      </MeuBotao>
      <p>{props.username}</p>
      {props.text}
      <CardComentarios>
        {props.commentsCount} comentários &nbsp;
      </CardComentarios>
      <CardVotos>
        <IconButton edge="end" onClick={cimaVoto}>
          <ArrowUpwardIcon
            color={props.id.userVoteDirection === 1 ? "primary" : "disabled"}
          />
        </IconButton>
        &nbsp;&nbsp;{props.votesCount}
        <IconButton
          color={props.id.userVoteDirection === -1 ? "secondary" : "disabled"}
          edge="end"
          onClick={baixoVoto}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </CardVotos>
    </Cards>
  );
}
