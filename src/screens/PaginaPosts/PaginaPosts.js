import React, { useState } from "react";
import { ProtegePagina } from "../../hooks/ProtegePagina";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/apiConstants";
import { DadosSolicitacao } from "../../hooks/DadosSolicitacao";
import { Cards, CardComentarios } from "./estilo";
import { TextField } from "@material-ui/core";
import { CommentListItem } from "../../components/CommentListItem/CommentListItem";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

export default function PaginaPosts() {
  ProtegePagina();
  const params = useParams();
  const data = DadosSolicitacao(`${BASE_URL}/posts/${params.id}`, []);
  const [newComment, setNewComment] = useState("")
  
// useEffect(() => {
//   const axiosConfig = {
//     headers: {
//       Authorization: localStorage.getItem("token"),
//     }
//   }

//   axios.get(`${BASE_URL}/posts/${params.postId}`, axiosConfig)
//   .then((response)
//     setPostDetails(response.data.post)
    
//   })
// }, [])
//   const handleUpdateComment = (event) => {
//     setNewComment(event.target.value)
//   }

//   const handleCreateComment = async () => {
//     const axiosConfig = {
//       headers: {
//         Authorization: localStorage.getItem("token")
//       }
//     }

//     const body = {
//       text: newComment 
//     }
//     try{
//     await axios.post(`${BASE_URL}/posts/${params.postId}/comment`, body, axiosConfig)
//     setNewComment("")
//   } catch (error ) {
//     alert("Não foi possível comentar, tente novamente")
//     console.log(error)
//   }
// }
  return (
    <Cards>
      <p>Nome:&nbsp; {data.post && data.post.username}</p>
      <p>Título do post:&nbsp; {data.post && data.post.title}</p>
      <p>Post:&nbsp; {data.post && data.post.text}</p>
      <TextField
      placeholder={"Seu comentário"}
      value={newComment}
      onChange={handleUpdateComment}
      />
      <Button>Enviar Comentário</Button>
      <CardComentarios>
      {data.post && data.post.comments.map((comment) => {
        return (
        <CommentListItem comment={comment} />
      )})}
      </CardComentarios>
      {/* <CardVotos>
        <img src={like} alt="icone like" /> &nbsp;&nbsp;
        {data.post && data.post && data.post.votesCount}&nbsp;&nbsp;
        <img src={deslike} alt="icone deslike" />
      </CardVotos> */}
    </Cards>
  );
}
