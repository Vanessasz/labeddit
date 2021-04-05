import React from "react";
import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";
import IconButton from "@material-ui/core/IconButton"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItem from "@material-ui/core/ListItem"

export const CommentListItem = (props) => {

const lidaAcimaVote = () => {
  props.vote(props.comment.id, 1)
}

const lidaAbaixoVote = () => {
  props.vote(props.comment.id, -1)
}

  return (
    <ListItem>
      <ListItemText primary={props.comment.username} secondary={props.comment.text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={lidaAcimaVote}>
          <img src={like} alt="icone like" />
        </IconButton>
        <span>{props.comment.votesCount}</span>
        <IconButton edge="end" onClick={lidaAbaixoVote }>
          <img src={deslike} alt="icone deslike" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
