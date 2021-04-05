import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { irParaFeed } from "../router/Coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      irParaFeed(history);
    })
    .catch((error) => {
      alert("Email ou senha inválidos :(");
    });
};

export const cadastro = (body, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Cadastro efetuado com sucesso :)");
      irParaFeed(history);
    })
    .catch((error) => {
      alert("Ocorreu um erro, veririque os dados e tente novamente");
    });
};

export const criandoPosts = (body, history) => {
  const token = localStorage.getItem("token");
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alert("Post enviado")
      irParaFeed(history);
    })
    .catch((error) => {
      alert("Ocorreu um erro, post não criado");
    });
};

export const detalhesPosts = (id) => {
  axios
    .get(`${BASE_URL}/posts/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {})
    .catch((error) => {
      alert("Erro!!, detalhes não encontrados");
    });
};

export const comentarios = (body, id) => {
   
  axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }})

      .then(res => {  
          alert("Comentário enviado!")

      }).catch(error => {
          console.log(error)
          alert("Não foi possível comentar, tente novamente")
      })
}

export const vote = (comment, direction, id) => {
   
  const body = {
      "direction": direction
  }
      
      axios.put(`${BASE_URL}/posts/${id}/comment/${comment}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token")
          }})
  
          .then(res => {     
              
  
          }).catch(error => {
            console.log(error)
              alert("Não foi possível votar no comentário, tente novamente")
          })
  
  return vote;
}

// export const voteComment = (bodyVote, id, commentId) => {
 
//     const body = {
//         "direction": bodyVote
//     }
        
//         axios.put(`${BASE_URL}/posts/${id}/comment/${commentId}/vote`, body, {
//             headers: {
//               Authorization: localStorage.getItem("token")
//             }})
    
//             .then(res => {         
                
    
//             }).catch(error => {
//                 console.log(error.message)
//             })
    
//     return voteComment;
// }

