import React from "react";
import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";
import IconButton from "@material-ui/core/IconButton"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItem from "@material-ui/core/ListItem"

export const CommentListItem = (props) => {
  return (
    <ListItem>
      <ListItemText primary={props.comment.username} secondary={props.comment.text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <img src={like} alt="icone like" />
        </IconButton>
        <span>{props.comment.votesCount}</span>
        <IconButton edge="end" aria-label="delete">
          <img src={deslike} alt="icone deslike" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
