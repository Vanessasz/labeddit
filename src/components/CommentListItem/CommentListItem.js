import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const CommentListItem = (props) => {
  const lidaAcimaVoto = () => {
    if (props.comment.userVoteDirection === 1) {
      props.voto(props.comment.id, 0);
    } else {
      props.voto(props.comment.id, 1);
    }
  };

  const lidaAbaixoVoto = () => {
    if (props.comment.userVoteDirection === -1) {
      props.voto(props.comment.id, 0);
    } else {
      props.voto(props.comment.id, -1);
    }
  };

  return (
    <ListItem>
      <ListItemText
        primary={props.comment.username}
        secondary={props.comment.text}
      />
      <ListItemSecondaryAction>
   <IconButton edge="end" onClick={lidaAcimaVoto}>
   &nbsp;<ArrowUpwardIcon
            color={
              props.comment.userVoteDirection === 1 ? "primary" : "disabled"
            }
          />&nbsp;&nbsp;
        </IconButton>
        {props.comment.votesCount}
        <IconButton
          color={
            props.comment.userVoteDirection === -1 ? "secondary" : "disabled"
          }
          edge="end"
          onClick={lidaAbaixoVoto}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
   );
        }

      
